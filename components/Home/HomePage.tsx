import React from "react";
import HeroSection from "./Hero/HeroSection";
import Municipalities from "./Municipalities/Municipalities";
import BusinessCategories from "./BusinessCategories/BusinessCategories";
//This is where we add hero section, features section, about section, and contact section

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Municipalities />
      <BusinessCategories />
    </div>
  );
}
