"use client";
import React, { useRef } from "react";
import Button from "@/components/Button";
import {
  FaStore,
  FaUtensils,
  FaHotel,
  FaShoppingBag,
  FaIndustry,
  FaCar,
  FaHome,
  FaGraduationCap,
  FaHospital,
  FaPlane,
} from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const businessCategories = [
  { title: "All", icon: FaStore, count: "10,000 SMEs" },
  { title: "Restaurants", icon: FaUtensils, count: "1,200 businesses" },
  { title: "Hotels", icon: FaHotel, count: "800 businesses" },
  { title: "Retail", icon: FaShoppingBag, count: "2,500 businesses" },
  { title: "Manufacturing", icon: FaIndustry, count: "1,500 businesses" },
  { title: "Transportation", icon: FaCar, count: "900 businesses" },
  { title: "Real Estate", icon: FaHome, count: "700 businesses" },
  { title: "Education", icon: FaGraduationCap, count: "600 businesses" },
  { title: "Healthcare", icon: FaHospital, count: "400 businesses" },
  { title: "Travel", icon: FaPlane, count: "300 businesses" },
];

export default function BusinessCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="py-12 relative">
      <div className="flex items-center">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-110 focus:outline-none"
          aria-label="Scroll left"
        >
          <IoIosArrowBack className="w-6 h-6" />
        </button>
        <div
          ref={scrollRef}
          className="flex justify-start items-center overflow-x-auto space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 2xl:space-x-[50px] scrollbar-hide hide-scrollbar"
          style={{
            scrollBehavior: "smooth",
            width: `calc(${businessCategories.length * 200}px + ${
              (businessCategories.length - 1) * 50
            }px)`,
            maxWidth: "100%",
          }}
        >
          {businessCategories.map((category, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center min-w-[160px] cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-[50px] h-[50px] rounded-full bg-primary-500 flex items-center justify-center mb-2">
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-medium text-center text-black">
                {category.title}
              </h3>
              <p className="text-base text-gray-500 text-center">
                {category.count}
              </p>
            </div>
          ))}
        </div>
        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-110 focus:outline-none"
          aria-label="Scroll right"
        >
          <IoIosArrowForward className="w-6 h-6" />
        </button>
      </div>
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
