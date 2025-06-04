"use client";
import React, { useRef } from "react";
import MunicipalityCard from "@/components/MunicipalityCard";
import Button from "@/components/Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const municipalities = Array.from({ length: 10 }, (_, i) => ({
  title: i === 0 ? "All" : `Municipality ${i}`,
  subtitle:
    i === 0 ? "10,000 SMEs" : `${Math.floor(Math.random() * 1000)} businesses`,
  imageUrl: "/Images/batangas-capitol-new.jpg",
}));

export default function Municipalities() {
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
    <div className="pt-12 relative">
      {/* <h1 className="text-2xl font-bold mb-4">Municipality</h1> */}
      <div className="flex items-center">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-110 focus:outline-none"
          aria-label="Scroll left"
        >
          <IoIosArrowBack className="w-6 h-6" />
        </button>
        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex justify-start items-center overflow-x-auto space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 2xl:space-x-[50px] scrollbar-hide hide-scrollbar h-[100px]"
          style={{
            scrollBehavior: "smooth",
            width: `calc(${municipalities.length * 320}px + ${
              (municipalities.length - 1) * 50
            }px)`,
            maxWidth: "100%",
          }}
        >
          {municipalities.map((m, idx) => (
            <MunicipalityCard
              key={idx}
              title={m.title}
              subtitle={m.subtitle}
              imageUrl={m.imageUrl}
            />
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
