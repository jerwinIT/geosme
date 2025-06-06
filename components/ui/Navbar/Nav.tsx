"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";
import ThemeLogo from "@/components/ui/Theme/ThemeLogo";
import Button from "@/components/ui/Buttons/Button";

type NavProps = {
  openNav: () => void;
};

export default function Nav({ openNav }: NavProps) {
  const [showTooltip, setShowTooltip] = useState(true);
  const [showMobileTooltip, setShowMobileTooltip] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
      setShowMobileTooltip(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Helper function to check if link is active
  const isActiveLink = (url: string) => {
    if (url === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(url);
  };

  return (
    <div className="flex w-full h-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[100px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] fixed z-[1000]">
      <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-4 w-1/4">
          <Link
            href="/"
            className="transition-transform hover:scale-105 duration-200"
          >
            <ThemeLogo width={153} height={50} priority={true} />
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center justify-center gap-8 w-2/4">
          {navLinks.map((links) => {
            const isActive = isActiveLink(links.url);
            return (
              <Link
                key={links.id}
                href={links.url}
                className="relative group"
                aria-current={isActive ? "page" : undefined}
              >
                <p
                  className={`relative text-sm font-poppins font-normal leading-normal transition-colors duration-300 ${
                    isActive
                      ? "text-[#d72323] font-medium"
                      : "text-text-secondary hover:text-[#d72323]"
                  }`}
                >
                  {links.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                      isActive
                        ? "w-full bg-[#d72323]"
                        : "w-0 bg-black/50 group-hover:w-full group-hover:bg-[#d72323]"
                    }`}
                  ></span>
                </p>
              </Link>
            );
          })}
        </div>

        {/*Auth Buttons */}
        <div className="hidden lg:flex items-center justify-end gap-6 w-1/4">
          <div className="relative group">
            <Link
              href="/business-portal"
              className="relative group"
              aria-current={
                isActiveLink("/business-portal") ? "page" : undefined
              }
            >
              <p
                className={`relative text-sm font-poppins font-normal leading-normal transition-colors duration-300 ${
                  isActiveLink("/business-portal")
                    ? "text-[#d72323] font-medium"
                    : "text-text-secondary group-hover:text-[#d72323]"
                }`}
              >
                Business Portal
                <span
                  className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                    isActiveLink("/business-portal")
                      ? "w-full bg-[#d72323]"
                      : "w-0 bg-black/50 group-hover:w-full group-hover:bg-[#d72323]"
                  }`}
                ></span>
              </p>
            </Link>
            <div
              className={`absolute top-full mt-2 right-0 transition-all duration-300 ease-in-out whitespace-nowrap ${
                showTooltip
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
              }`}
            >
              <div className="relative bg-white p-4 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-text/10 backdrop-blur-sm">
                <div className="absolute -top-2 right-4 w-4 h-4 bg-white border-l border-t border-text/10 rotate-45"></div>
                <p className="text-text-secondary text-sm font-medium relative z-10">
                  Are you a Business Owner?
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>

          <div className="h-6 w-[1px] bg-black/20"></div>

          <Link href="/login">
            <Button
              name="Login"
              className={
                isActiveLink("/login") ? "ring-2 ring-[#d72323]/20" : ""
              }
            />
          </Link>

          <Link
            href="/signup"
            className="relative group"
            aria-current={isActiveLink("/signup") ? "page" : undefined}
          >
            <p
              className={`relative text-sm font-poppins font-normal leading-normal transition-colors duration-300 ${
                isActiveLink("/signup")
                  ? "text-[#d72323] font-medium"
                  : "text-text-secondary group-hover:text-[#d72323]"
              }`}
            >
              Signup
              <span
                className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                  isActiveLink("/signup")
                    ? "w-full bg-[#d72323]"
                    : "w-0 bg-black/50 group-hover:w-full group-hover:bg-[#d72323]"
                }`}
              ></span>
            </p>
          </Link>
        </div>

        {/* Mobile Menu Button with Tooltip */}
        <div className="relative lg:hidden">
          <button
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-[#d72323] hover:scale-110 active:scale-95 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-[#d72323]/20 rounded-md"
            aria-label="Open navigation menu"
            aria-expanded="false"
          >
            <HiBars3BottomRight className="w-full h-full" />
          </button>
          <div
            className={`absolute top-full mt-2 right-0 transition-all duration-300 ease-in-out ${
              showMobileTooltip
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            <div className="relative bg-white p-5 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-text/10 backdrop-blur-sm max-w-[280px]">
              <div className="absolute -top-2 right-4 w-4 h-4 bg-white border-l border-t border-text/10 rotate-45"></div>
              <div className="space-y-2">
                <p className="text-text-secondary text-sm font-medium relative z-10">
                  Are you a Business Owner?
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#d72323] font-semibold">
                    Open Menu
                  </span>
                  <span className="text-text/70">→</span>
                  <span className="text-text/80">Go to Business Portal</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
