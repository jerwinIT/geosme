"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNavbar from "./MobileNavbar";

export default function ResponsiveNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const handNavShow = () => setShowNavbar(true);
  const handCloseNav = () => setShowNavbar(false);
  return (
    <div>
      <Nav openNav={handNavShow} />
      <MobileNavbar showNav={showNavbar} closeNav={handCloseNav} />
    </div>
  );
}
