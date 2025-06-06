import { NextRequest, NextResponse } from "next/server";
import speakeasy from "speakeasy";
import QRCode from "qrcode";
import { create2FA, findUserByEmail } from "@/lib/db/users";

export async function POST(request: NextRequest) {
  try {
    const { email, username } = await request.json();

    if (!email || !username) {
      return NextResponse.json(
        { error: "Email and username are required" },
        { status: 400 }
      );
    }

    // Check if user exists (in real implementation, you'd get this from session)
    const user = await findUserByEmail(email);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Generate 2FA secret
    const secret = speakeasy.generateSecret({
      name: `GeoSME (${user.email})`,
      issuer: "GeoSME",
      length: 32,
    });

    // Generate QR code
    const qrCodeUrl = await QRCode.toDataURL(secret.otpauth_url!);

    // Store the secret in database
    const twoFA = await create2FA(user.id, secret.base32!);

    const response = {
      secret: secret.base32,
      qrCodeUrl,
      backupCodes: twoFA.backupCodes,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("2FA generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate 2FA setup" },
      { status: 500 }
    );
  }
}
