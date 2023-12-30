import React, { useState } from "react";
import Image from "next/image";

type FeatureKey = "simple-bookmarking" | "speedy-searching" | "easy-sharing";

type Feature = {
  title: string;
  key: FeatureKey;
};

type FeatureDetail = {
  key: FeatureKey;
  title: string;
  description: string;
  imgSrc: string;
  imgHeight: number;
  imgWidth: number;
};

const featuresList: Feature[] = [
  {
    title: "Simple Bookmarking",
    key: "simple-bookmarking",
  },
  {
    title: "Speedy Searching",
    key: "speedy-searching",
  },
  {
    title: "Easy Sharing",
    key: "easy-sharing",
  },
];

const featuresDetail: FeatureDetail[] = [
  {
    key: "simple-bookmarking",
    title: "Bookmark in 1 minute",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.",
    imgSrc: "/images/illustration-features-tab-1.svg",
    imgWidth: 536,
    imgHeight: 346,
  },
  {
    key: "speedy-searching",
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    imgSrc: "/images/illustration-features-tab-2.svg",
    imgWidth: 478,
    imgHeight: 416,
  },
  {
    key: "easy-sharing",
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    imgSrc: "/images/illustration-features-tab-3.svg",
    imgWidth: 440,
    imgHeight: 380,
  },
];

const Features = () => {
  const [activeFeature, setActiveFeature] =
    useState<FeatureKey>("simple-bookmarking");

  const featureDetail = featuresDetail.find(
    (feature) => feature.key === activeFeature,
  )!;

  return (
    <section id="features" className="h-screen py-24">
      <div className="px-6 sm:px-14 lg:px-28">
        <h2 className="text-2xl font-semibold text-center">Features</h2>
        <p className="text-grayish-blue max-w-sm text-center mx-auto mt-5 text-sm">
          Our aim is to make it quick and easy for you to access your favorite
          websites. Your bookmark sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <ul className="flex flex-col lg:flex-row max-w-screen-sm mx-auto items-center justify-center mt-10 px-6 sm:px-14 lg:px-0">
        {featuresList.map((feature) => (
          <li
            className={`w-full lg:w-40 text-sm text-center font-medium py-5 tracking-wider ${
              activeFeature === feature.key
                ? "text-very-dark-blue border-b-2 border-soft-red"
                : "text-grayish-blue border-b border-grayish-blue hover:text-soft-red cursor-pointer"
            }`}
            key={feature.key}
            onClick={() => setActiveFeature(feature.key)}
          >
            {feature.title}
          </li>
        ))}
      </ul>

      <div className="flex flex-col space-y-16 lg:space-y-0 lg:flex-row box-border mt-10">
        <div className="lg:w-1/2 ">
          <div className="mx-6 sm:mx-14 lg:ml-28 relative">
            <Image
              width={featureDetail.imgWidth}
              height={featureDetail.imgHeight}
              className="object-contain w-full"
              src={featureDetail.imgSrc}
              alt={"feature-image"}
            />
            <div className="absolute h-4/5 bg-soft-blue w-full md:w-[120%] top-1/3 -left-10 md:-left-40 lg:-left-28 rounded-br-full -z-10" />
          </div>
        </div>
        <div className="lg:w-1/2 px-6 sm:px-14 lg:px-28 box-border flex flex-col justify-center space-y-5">
          <h3 className="font-semibold text-2xl">{featureDetail.title}</h3>
          <p className="text-grayish-blue tracking-wider">
            {featureDetail.description}
          </p>
          <button className="hover:bg-transparent hover:border-soft-blue hover:text-soft-blue bg-soft-blue px-5 py-2 rounded-md shadow-md text-white text-sm font-medium self-start border border-transparent">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
