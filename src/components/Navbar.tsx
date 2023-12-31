"use client";
import React, { useState } from "react";
import Container from "./Container";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import useScroll from "@/app/_hooks/useScroll";
import { navItems } from "@/utils/const";
import { handleNavItemClick } from "@/utils/handleNavItemClick.util";
import LogoIcon from "./LogoIcon";

interface NavbarProps {}

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const isScrolled = useScroll(96);

  return (
    <div
      className={`w-screen max-w-full sticky top-0 bg-white ${
        isScrolled && "shadow-md"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center h-20">
          <LogoIcon
            className="z-30 relative"
            textClassName={`${toggle ? "fill-white" : "fill-very-dark-blue"}`}
            circleIconClassName={`${toggle ? "fill-white" : "fill-soft-blue"}`}
            bookmarkIconClassName={`${
              toggle ? "fill-very-dark-blue" : "fill-white"
            }`}
          />

          <ul className="hidden md:flex items-center space-x-10">
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

            <li>
              <button className="bg-soft-red uppercase text-white text-[14px] font-medium px-5 py-1 shadow-md rounded-sm">
                Login
              </button>
            </li>
          </ul>

          <div className="md:hidden relative z-30">
            <Hamburger
              size={24}
              toggled={toggle}
              toggle={setToggle}
              color={toggle ? "white" : "black"}
            />
          </div>
        </div>
      </Container>

      {toggle && (
        <div className="fixed w-screen max-w-full h-screen bg-very-dark-blue top-0 left-0 opacity-90 z-20">
          <Container>
            <ul className="flex flex-col mt-24">
              {navItems.map((navItem) => (
                <li
                  key={navItem.id}
                  className="border-t-grayish-blue border-t py-5"
                >
                  <button
                    className="uppercase text-white w-full tracking-widest"
                    onClick={() => {
                      handleNavItemClick(navItem.id);
                    }}
                  >
                    {navItem.title}
                  </button>
                </li>
              ))}
              <li className="border-t-grayish-blue border-t py-5">
                <button className="text-white uppercase tracking-widest border-white border-2 w-full rounded-md py-2">
                  Login
                </button>
              </li>
            </ul>
          </Container>

          <div className="flex items-center justify-center absolute bottom-12 w-full space-x-10">
            <Image
              src={"/images/icon-facebook.svg"}
              width={24}
              height={24}
              alt="facebook-logo"
            />

            <Image
              src={"/images/icon-twitter.svg"}
              height={20}
              width={24}
              alt="twitter-logo"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
