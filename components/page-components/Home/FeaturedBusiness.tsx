"use client";

import React from "react";
import Image from "next/image";
import { BusinessCard } from "@/components/ui/Cards";
import { dummyBusinesses } from "@/data/BusinessDataDummy";
import CTAButton from "@/components/ui/Buttons/CTAButton";

const FeaturedBusiness: React.FC = () => {
  // Get top 4 businesses by rating
  const featuredBusinesses = [...dummyBusinesses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  const handleFavoriteToggle = (id: string) => {
    // TODO: Implement favorite toggle logic
    console.log("Toggle favorite for business:", id);
  };

  const handleError = (error: Error) => {
    console.error("Error loading business image:", error);
  };

  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-text mb-4 sm:mb-6 leading-tight">
            Featured <span className="text-primary-500">SMEs</span>
          </h2>
          <p className="text-lg md:text-lg lg:text-xl xl:text-2xl text-text-secondary">
            Discover top-rated SMEs in Batangas
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBusinesses.map((business) => (
            <BusinessCard
              key={business.id}
              {...business}
              onFavoriteToggle={handleFavoriteToggle}
              onError={handleError}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <CTAButton href="/explore">View All SMEs</CTAButton>
      </div>
    </section>
  );
};

export default FeaturedBusiness;
