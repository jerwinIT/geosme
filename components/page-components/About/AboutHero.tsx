import React from "react";
import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      {/* About heading */}
      {/* <div className="w-full px-4 sm:px-6 lg:px-8 mb-12 md:mb-16 lg:mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-center text-text">
          About <span className="text-primary-500">GeoSME</span>
        </h1>
      </div> */}

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Left content*/}
          <div className="w-full lg:flex-1">
            {/* Heading */}
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-left text-text mb-4 sm:mb-6 leading-tight">
                About <span className="text-primary-500">GeoSME</span>
              </h2>
            </div>
            {/* Body */}
            <div className="flex flex-col gap-6">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-text-secondary">
                GeoSME Batangas is dedicated to empowering Small and Medium
                Enterprises (SMEs) across Batangas Province through innovative
                geospatial technology and data-driven insights.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-text-secondary">
                We believe that local businesses are the backbone of the
                economy, and our mission is to create a comprehensive platform
                that connects consumers with SMEs while providing valuable
                market intelligence to business owners.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-4 py-2 bg-primary-400 text-[#fff] rounded-full text-sm sm:text-base font-medium">
                Empowering SME Business
              </span>
              <span className="px-4 py-2 bg-primary-400 text-[#fff] rounded-full text-sm sm:text-base font-medium">
                Data-Driven Insights
              </span>
            </div>
          </div>

          {/* Right content */}
          <div className="w-full lg:flex-1 max-w-2xl">
            <Image
              src="/images/about/geosme-mission.webp"
              alt="About GeoSME Batangas - Empowering local businesses through geospatial technology"
              width={700}
              height={450}
              className="w-full h-auto rounded-lg border-2 border-gray-200"
              priority={false}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </div>
      </div>
    </div>
  );
}
