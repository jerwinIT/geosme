import Link from "next/link";
import React from "react";
import { mobileNavLinks } from "@/constant/constant";
import { CgClose } from "react-icons/cg";

type MobileNavbarProps = {
  showNav: boolean;
  closeNav: () => void;
};

export default function MobileNavbar({ showNav, closeNav }: MobileNavbarProps) {
  return (
    <div
      className={`fixed inset-0 z-[1000] transition-opacity duration-300 ${
        showNav ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 transition-opacity duration-500 ease-in-out ${
          showNav ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeNav}
      />

      {/* NavLinks */}
      <div
        className={`fixed right-0 top-0 h-full w-[80%] sm:w-[60%] bg-white transform transition-all duration-500 ease-in-out ${
          showNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 space-y-6">
          {mobileNavLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Link
                key={link.id}
                href={link.url}
                className="group"
                onClick={closeNav}
                style={{
                  animation: showNav
                    ? `slideIn 0.5s ease-out ${index * 0.1}s forwards`
                    : "none",
                  opacity: 0,
                  transform: "translateX(20px)",
                }}
              >
                <div className="flex items-center gap-4 ml-12 hover:text-[#d72323] transition-colors duration-300">
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-[#d72323]" />
                  <p className="text-black text-[20px] sm:text-[30px] group-hover:text-[#d72323]">
                    {link.label}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-10 right-10 sm:w-8 sm:h-8 w-6 h-6 text-[#d72323] cursor-pointer hover:rotate-90 transition-transform duration-300"
        />
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
