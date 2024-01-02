import React from "react";
import SectionHeader from "./SectionHeader";
import ExtensionCard from "./ExtensionCard";

export type Browser = {
  logo: {
    src: string;
    width: number;
    height: number;
  };
  name: string;
  minVersion: number;
};

const browserList: Browser[] = [
  {
    name: "Chrome",
    minVersion: 62,
    logo: {
      src: "/images/logo-chrome.svg",
      height: 100,
      width: 102,
    },
  },
  {
    name: "Firefox",
    minVersion: 55,
    logo: {
      src: "/images/logo-firefox.svg",
      height: 100,
      width: 105,
    },
  },
  {
    name: "Opera",
    minVersion: 46,
    logo: {
      src: "/images/logo-opera.svg",
      height: 100,
      width: 96,
    },
  },
];

const Extension = () => {
  return (
    <section id="pricing" className="pt-24 min-h-screen">
      <SectionHeader
        title={"Download the extension"}
        description={
          "We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd liked us to prioritize."
        }
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-screen-md xl:max-w-screen-lg mx-auto mt-5 items-start gap-5">
        {browserList.map((browser, index) => (
          <ExtensionCard index={index} key={browser.name} {...browser} />
        ))}
      </div>
    </section>
  );
};

export default Extension;
