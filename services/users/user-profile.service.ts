import {
  findUserById,
  updateUserProfile,
  deactivateUserAccount,
  recordAuditEvent,
  type User,
  type UpdateUserProfileData,
} from "@/lib/db";

export interface ProfileUpdateResult {
  success: boolean;
  user?: User;
  error?: string;
}

export interface ProfileData {
  firstName?: string;
  lastName?: string;
  bio?: string;
  location?: string;
  avatarUrl?: string;
}

// Business logic for updating user profile
export async function updateUserProfileData(
  userId: string,
  profileData: ProfileData,
  context?: { ipAddress?: string; userAgent?: string }
): Promise<ProfileUpdateResult> {
  try {
    // Validate user exists and is active
    const existingUser = await findUserById(userId);
    if (!existingUser) {
      return {
        success: false,
        error: "User not found",
      };
    }

    if (!existingUser.isActive) {
      return {
        success: false,
        error: "Cannot update deactivated account",
      };
    }

    // Validate profile data
    const validationResult = validateProfileData(profileData);
    if (!validationResult.isValid) {
      return {
        success: false,
        error: validationResult.error,
      };
    }

    // Update profile
    const updatedUser = await updateUserProfile(userId, profileData);

    // Log audit event
    await recordAuditEvent({
      userId,
      action: "profile_updated",
      details: {
        updatedFields: Object.keys(profileData),
        hasAvatar: !!profileData.avatarUrl,
      },
      ipAddress: context?.ipAddress,
      userAgent: context?.userAgent,
    });

    return {
      success: true,
      user: updatedUser,
    };
  } catch (error) {
    console.error("Profile update failed:", error);
    return {
      success: false,
      error: "Profile update failed. Please try again.",
    };
  }
}

// Business logic for getting user profile
export async function getUserProfile(userId: string): Promise<{
  success: boolean;
  user?: User;
  error?: string;
}> {
  try {
    const user = await findUserById(userId);

    if (!user) {
      return {
        success: false,
        error: "User not found",
      };
    }

    return {
      success: true,
      user,
    };
  } catch (error) {
    console.error("Get profile failed:", error);
    return {
      success: false,
      error: "Failed to retrieve profile",
    };
  }
}

// Business logic for deactivating user account
export async function deactivateUser(
  userId: string,
  reason?: string,
  context?: { ipAddress?: string; userAgent?: string }
): Promise<{ success: boolean; error?: string }> {
  try {
    // Verify user exists
    const user = await findUserById(userId);
    if (!user) {
      return {
        success: false,
        error: "User not found",
      };
    }

    if (!user.isActive) {
      return {
        success: false,
        error: "Account is already deactivated",
      };
    }

    // Deactivate account
    await deactivateUserAccount(userId);

    // Log audit event
    await recordAuditEvent({
      userId,
      action: "account_deactivated",
      details: { reason: reason || "user_requested" },
      ipAddress: context?.ipAddress,
      userAgent: context?.userAgent,
    });

    return { success: true };
  } catch (error) {
    console.error("Account deactivation failed:", error);
    return {
      success: false,
      error: "Account deactivation failed. Please try again.",
    };
  }
}

// Helper function to validate profile data
function validateProfileData(profileData: ProfileData): {
  isValid: boolean;
  error?: string;
} {
  // Validate first name
  if (profileData.firstName !== undefined) {
    if (
      profileData.firstName.length < 1 ||
      profileData.firstName.length > 100
    ) {
      return {
        isValid: false,
        error: "First name must be between 1 and 100 characters",
      };
    }
  }

  // Validate last name
  if (profileData.lastName !== undefined) {
    if (profileData.lastName.length < 1 || profileData.lastName.length > 100) {
      return {
        isValid: false,
        error: "Last name must be between 1 and 100 characters",
      };
    }
  }

  // Validate bio
  if (profileData.bio !== undefined) {
    if (profileData.bio.length > 500) {
      return {
        isValid: false,
        error: "Bio must be 500 characters or less",
      };
    }
  }

  // Validate location
  if (profileData.location !== undefined) {
    if (profileData.location.length > 255) {
      return {
        isValid: false,
        error: "Location must be 255 characters or less",
      };
    }
  }

  // Validate avatar URL
  if (profileData.avatarUrl !== undefined) {
    try {
      new URL(profileData.avatarUrl);
    } catch {
      return {
        isValid: false,
        error: "Avatar URL must be a valid URL",
      };
    }
  }

  return { isValid: true };
}
