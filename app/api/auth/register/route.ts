import { NextRequest, NextResponse } from "next/server";
import { registerUser } from "@/services/users/user-auth.service";
import { signupSchema } from "@/lib/validations/auth";

// Presentation Layer: API Route Handler
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, email, password, confirmPassword } = body;

    // Validate input using Zod schema
    const validation = signupSchema.safeParse({
      username,
      email,
      password,
      confirmPassword,
    });

    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validation.error.issues.map((issue) => ({
            field: issue.path[0],
            message: issue.message,
          })),
        },
        { status: 400 }
      );
    }

    // Extract context information
    const ipAddress =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";

    // Call Business Logic Layer
    const result = await registerUser(
      {
        username,
        email,
        password,
      },
      {
        ipAddress,
        userAgent,
      }
    );

    // Handle business logic result
    if (!result.success) {
      const status = result.error?.includes("already")
        ? 409
        : result.error?.includes("security")
        ? 400
        : 500;

      return NextResponse.json({ error: result.error }, { status });
    }

    // Return successful response (without sensitive data)
    return NextResponse.json(
      {
        success: true,
        message: "User created successfully",
        user: {
          id: result.user!.id,
          username: result.user!.username,
          email: result.user!.email,
          createdAt: result.user!.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("User registration error:", error);

    return NextResponse.json(
      { error: "Failed to create user account" },
      { status: 500 }
    );
  }
}
