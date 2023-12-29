import React, { ComponentPropsWithoutRef } from "react";
import Image from "next/image";

interface HeroButtonProps extends ComponentPropsWithoutRef<"button"> {}

const HeroButton = ({ className, children, ...props }: HeroButtonProps) => {
  return (
    <button
      className={`cursor-pointer font-medium px-2 md:px-5 py-3 border-transparent border-2 rounded-md text-[14px] md:text-sm shadow-lg hover:bg-transparent ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-6rem)] flex flex-col-reverse lg:flex-row xl:space-x-20">
      {/* Left Section */}
      <div className="flex flex-col justify-center flex-1 space-y-5 text-center lg:text-left px-6 sm:px-14 lg:px-28">
        <h1 className="text-3xl lg:text-5xl font-medium">
          A Simple Bookmark Manager
        </h1>
        <p className="text-grayish-blue">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>

        <div className="flex items-center justify-center lg:justify-start space-x-5">
          <HeroButton className="bg-soft-blue text-white hover:border-soft-blue hover:text-soft-blue">
            Get it on chrome
          </HeroButton>
          <HeroButton className="bg-grayish-blue border-transparent bg-opacity-20 hover:border-grayish-blue hover:text-grayish-blue ">
            Get it on firefox
          </HeroButton>
        </div>
      </div>

      {/* Right Section */}

      <div className="flex-1 flex md:justify-center xl:justify-end overflow-hidden items-center">
        <div className="h-fit w-fit relative -z-10">
          <Image
            width={657}
            height={466}
            className="object-contain -mr-20 w-full  "
            src={"/images/illustration-hero.svg"}
            alt={"hero-image"}
          />
          <div className="absolute h-4/5 bg-soft-blue w-full md:w-[200%] lg:w-full top-1/4 left-[40px] rounded-bl-full -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
