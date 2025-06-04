"use client";
import React, { useRef } from "react";
import MunicipalityCard from "@/components/MunicipalityCard";
import Button from "@/components/Button";

const municipalities = Array.from({ length: 20 }, (_, i) => ({
  title: i === 0 ? "All" : `Municipality ${i}`,
  subtitle:
    i === 0 ? "10,000 SMEs" : `${Math.floor(Math.random() * 1000)} businesses`,
  imageUrl: `https://picsum.photos/300/100?random=${i}`,
  overlayColor: "bg-black",
  overlayOpacity: "bg-opacity-70",
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
    <div className="py-12 relative">
      <h1 className="text-2xl font-bold mb-4">Municipality</h1>
      <div className="flex items-center">
        {/* Left Scroll Button */}
        <Button name="<" className="mr-2" onClick={() => scroll("left")} />
        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex justify-start items-center overflow-x-auto space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 2xl:space-x-[50px] scrollbar-hide hide-scrollbar h-[140px]"
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
              overlayColor={m.overlayColor}
              overlayOpacity={m.overlayOpacity}
            />
          ))}
        </div>
        {/* Right Scroll Button */}
        <Button name=">" className="ml-2" onClick={() => scroll("right")} />
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
