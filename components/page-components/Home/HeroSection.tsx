import React from "react";
import MunicipalityCard from "@/components/ui/Cards/MunicipalityCard";
import MunicipalityCardSkeleton from "@/components/ui/Skeleton/MunicipalityCardSkeleton";
import { Municipality } from "@/types";
import { Building2, LineChart, MapPin } from "lucide-react";
import CTAButton from "@/components/ui/Buttons/CTAButton";

export default function HeroSection() {
  const isLoading = false;
  const numberOfCards = 5;
  const municipalities: Municipality[] = [];
  const handleError = () => {
    // Implementation of handleError
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-surface -mt-20 pt-20">
      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight text-text">
            Empowering <span className="text-primary-500">Batangas SMEs</span>{" "}
            with <span className="text-primary-500">Data-Driven Insights</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            Your comprehensive platform for SME discovery, business analytics,
            and fintech adoption insights across Batangas Province.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <CTAButton href="/explore" icon={MapPin} variant="primary">
              Explore SMEs
            </CTAButton>
            <CTAButton
              href="/business-portal"
              icon={Building2}
              variant="secondary"
            >
              Business Portal
            </CTAButton>
            <CTAButton
              href="/fintech-insights"
              icon={LineChart}
              variant="tertiary"
            >
              Fintech SME
            </CTAButton>
          </div>
        </div>
      </div>

      {isLoading
        ? // Show skeleton loading
          Array.from({ length: numberOfCards }).map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 min-w-[200px] sm:min-w-[250px] md:min-w-[280px] lg:min-w-[320px] xl:min-w-[360px]"
            >
              <MunicipalityCardSkeleton />
            </div>
          ))
        : // Show actual cards
          municipalities.map((municipality) => (
            <div
              key={municipality.id}
              className="flex-shrink-0 min-w-[200px] sm:min-w-[250px] md:min-w-[280px] lg:min-w-[320px] xl:min-w-[360px]"
            >
              <MunicipalityCard {...municipality} onError={handleError} />
            </div>
          ))}
    </div>
  );
}
