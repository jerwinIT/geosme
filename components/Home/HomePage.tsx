import React from "react";
import HeroSection from "./Hero/HeroSection";
import Municipalities from "./Municipalities/Municipalities";
import BusinessCategories from "./BusinessCategories/BusinessCategories";
import BusinessFeeds from "./BusinessFeeds/BusinessFeeds";
//This is where we add hero section, features section, about section, and contact section

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />

      {/* Separator Line */}
      <div className="flex justify-center py-8">
        <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
      </div>

      <Municipalities />

      {/* Separator Line */}
      <div className="flex justify-center py-8">
        <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
      </div>

      <BusinessCategories />

      {/* Separator Line */}
      <div className="flex justify-center py-8">
        <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
      </div>

      <BusinessFeeds />
    </div>
  );
}
