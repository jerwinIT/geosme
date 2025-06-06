import {
  createUser,
  recordLoginAttempt,
  recordAuditEvent,
  updateUserLastLogin,
} from "@/lib/db/repositories/users/user-mutations";
import { findUserByEmail } from "@/lib/db/repositories/users/user-queries";
import {
  verifyUserPassword,
  isPasswordSecure,
} from "@/lib/db/repositories/users/user-auth";
import type {
  User,
  CreateUserData,
  LoginAttemptData,
  AuditEventData,
} from "@/lib/db/repositories/users/types";

export interface AuthResult {
  success: boolean;
  user?: User;
  error?: string;
}

export interface RegistrationData {
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

// Business logic for user registration
export async function registerUser(
  registrationData: RegistrationData,
  context?: { ipAddress?: string; userAgent?: string }
): Promise<AuthResult> {
  try {
    const { username, email, password, firstName, lastName } = registrationData;

    // Validate password strength
    if (!isPasswordSecure(password)) {
      return {
        success: false,
        error:
          "Password must be at least 8 characters with uppercase, lowercase, numbers, and special characters",
      };
    }

    // Check if user already exists
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return {
        success: false,
        error: "User with this email already exists",
      };
    }

    // Create user
    const userData: CreateUserData = {
      username,
      email,
      password,
      firstName,
      lastName,
    };

    const newUser = await createUser(userData);

    // Log audit event
    await recordAuditEvent({
      userId: newUser.id,
      action: "user_registered",
      details: { registrationMethod: "email" },
      ipAddress: context?.ipAddress,
      userAgent: context?.userAgent,
    });

    return {
      success: true,
      user: newUser,
    };
  } catch (error) {
    console.error("Registration failed:", error);
    return {
      success: false,
      error: "Registration failed. Please try again.",
    };
  }
}

// Business logic for user authentication
export async function authenticateUser(
  email: string,
  password: string,
  context?: { ipAddress?: string; userAgent?: string }
): Promise<AuthResult> {
  try {
    // Record login attempt
    const attemptData = {
      email,
      success: false,
      ipAddress: context?.ipAddress,
      userAgent: context?.userAgent,
    };

    // Verify credentials
    const user = await verifyUserPassword(email, password);

    if (!user) {
      await recordLoginAttempt(attemptData);
      return {
        success: false,
        error: "Invalid email or password",
      };
    }

    if (!user.isActive) {
      await recordLoginAttempt(attemptData);
      return {
        success: false,
        error: "Account has been deactivated",
      };
    }

    // Success - update login tracking
    await updateUserLastLogin(user.id);
    await recordLoginAttempt({ ...attemptData, success: true });

    // Log audit event
    await recordAuditEvent({
      userId: user.id,
      action: "user_login",
      details: { loginMethod: "email" },
      ipAddress: context?.ipAddress,
      userAgent: context?.userAgent,
    });

    return {
      success: true,
      user,
    };
  } catch (error) {
    console.error("Authentication failed:", error);
    return {
      success: false,
      error: "Authentication failed. Please try again.",
    };
  }
}
