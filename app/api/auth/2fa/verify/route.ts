import { NextRequest, NextResponse } from "next/server";
import speakeasy from "speakeasy";
import { get2FA, enable2FA, logAuditEvent } from "@/lib/db/users";

export async function POST(request: NextRequest) {
  try {
    const { code, userId } = await request.json();

    if (!code || !userId) {
      return NextResponse.json(
        { error: "Code and user ID are required" },
        { status: 400 }
      );
    }

    // Get user's 2FA settings
    const user2FA = await get2FA(userId);
    if (!user2FA) {
      return NextResponse.json(
        { error: "2FA not set up for this user" },
        { status: 404 }
      );
    }

    // Verify the TOTP code
    const verified = speakeasy.totp.verify({
      secret: user2FA.secret,
      token: code,
      window: 1, // Allow 1 step tolerance
      encoding: "base32",
    });

    if (verified) {
      // Enable 2FA for the user
      await enable2FA(userId);

      // Log the event
      await logAuditEvent(userId, "2fa_enabled", { success: true });

      return NextResponse.json({
        success: true,
        message: "2FA setup completed successfully",
        backupCodes: user2FA.backupCodes,
      });
    } else {
      // Log failed attempt
      await logAuditEvent(userId, "2fa_verification_failed", {
        code: code.replace(/./g, "*"),
      });

      return NextResponse.json(
        { error: "Invalid verification code" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("2FA verification error:", error);
    return NextResponse.json(
      { error: "Failed to verify 2FA code" },
      { status: 500 }
    );
  }
}
