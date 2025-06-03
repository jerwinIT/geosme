import React from "react";

export default function HeroSection() {
  return <div className="relative h-[120vh] w-full sm:h-[100vh]">
    <div className="absolute top-0 left-0 w-full h-full"></div>
    {/* text-content */}
    <div className="absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="flex items-center justify-center flex-col w-full h-full">
        <div>
          <h1 className="text-4xl font-bold">Discover Local Businesses in Batangas</h1>
          <p className="text-lg">Connect with Small and Medium Enterprises across Batangas Province. Find services, explore market trends, and support local businesses.</p>
        </div>

      </div>

    </div>
  </div>;
};
