import React from "react";
import SearchBar from "@/components/Helper/SearchBar";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-surface  -mt-20 pt-20">
 
      
      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-text">
            Discover Local  {" "} <span className="text-primary-500">Businesses</span> in{" "}
            <span className="text-primary-500">Batangas</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect with Small and Medium Enterprises across Batangas Province.
            Find services, explore market trends, and support local businesses.
          </p>
          
          {/* Search Bar */}
          <div className="">
            {/* You can add your search bar component here */}
            <SearchBar />
            <Link href="/search" className="rounded-[50px] px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group bg-primary-500 relative hover:bg-primary-600 transition-all duration-300 text-white">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000"></span>
              <span className="relative font-bold text-[#fff]">Search</span>

                
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
