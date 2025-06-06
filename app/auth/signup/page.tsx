import { Metadata } from "next";
import { SignUpForm } from "@/components/auth/signup-form";

export const metadata: Metadata = {
  title: "Sign Up - GeoSME",
  description: "Create your GeoSME account",
};

export default function SignUpPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-sm sm:max-w-md w-full space-y-6 sm:space-y-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-text">
            Create your account
          </h2>
          <p className="mt-2 text-sm sm:text-base text-text-secondary">
            Join GeoSME and start exploring
          </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}
