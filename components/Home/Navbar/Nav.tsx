import React from "react";
import Link from "next/link";
import { navLinks } from "@/constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";
import ThemeLogo from "@/components/ThemeLogo";
import Button from "@/components/Button";

type NavProps = {
  openNav: () => void;
};

export default function Nav({ openNav }: NavProps) {
  return (
    <div className="flex w-full h-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[100px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] fixed z-[1000]">
      <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-4 w-1/4">
          <ThemeLogo width={153} height={50} priority={true} />
        </div>
        {/* Nav Links */}
        <div className="hidden lg:flex items-center justify-center gap-8 w-2/4">
          {navLinks.map((links) => {
            return (
              <Link key={links.id} href={links.url}>
                <p className="relative text-text-secondary text-sm font-poppins font-normal leading-normal group hover:text-[#d72323]">
                  {links.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black/50 transition-all duration-300 group-hover:w-full group-hover:bg-[#d72323]"></span>
                </p>
              </Link>
            );
          })}
        </div>

        {/*Auth Buttons */}
        <div className="hidden lg:flex items-center justify-end gap-6 w-1/4">
          <Link href="/register-business">
            <p className="relative text-text-secondary text-sm font-poppins font-normal leading-normal group hover:text-[#d72323]">
              Business Portal
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black/50 transition-all duration-300 group-hover:w-full group-hover:bg-[#d72323]"></span>
            </p>
          </Link>

          <div className="h-6 w-[1px] bg-black/20"></div>

          <Link href="/login">
            <Button name="Login" />
          </Link>

          <Link href="/signup">
            <p className="relative text-text-secondary text-sm font-poppins font-normal leading-normal group hover:text-[#d72323]">
              Signup
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black/50 transition-all duration-300 group-hover:w-full group-hover:bg-[#d72323]"></span>
            </p>
          </Link>
        </div>
        {/* Mobile Menu */}
        <HiBars3BottomRight
          onClick={openNav}
          className="w-8 h-8 cursor-pointer text-[#d72323] lg:hidden hover:scale-110 active:scale-95 transition-transform duration-200"
        />
      </div>
    </div>
  );
}
