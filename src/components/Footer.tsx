"use client";
import React from "react";
import Image from "next/image";
import Container from "./Container";
import LogoIcon from "./LogoIcon";
import { navItems } from "@/utils/const";
import { handleNavItemClick } from "@/utils/handleNavItemClick.util";

const Footer = () => {
  return (
    <div className="bg-very-dark-blue min-h-16 flex items-center w-full py-5 md:py-0">
      <Container>
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 items-center justify-between text-white h-full ">
          <div className="flex flex-col md:flex-row md:space-x-14 space-y-5 md:space-y-0 items-center">
            <LogoIcon textClassName="fill-white" />
            <ul className="flex flex-col md:flex-row md:space-x-10 space-y-5 md:space-y-0 items-center">
              {navItems.map((navItem) => (
                <li key={navItem.id}>
                  <button
                    className="uppercase text-[14px] tracking-widest"
                    onClick={() => {
                      handleNavItemClick(navItem.id);
                    }}
                  >
                    {navItem.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex space-x-5 items-center">
            <Image
              width={24}
              height={24}
              className="cursor-pointer"
              src={"/images/icon-facebook.svg"}
              alt="facebook-icon"
            />
            <Image
              width={24}
              height={24}
              className="cursor-pointer"
              src={"/images/icon-twitter.svg"}
              alt="facebook-icon"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
