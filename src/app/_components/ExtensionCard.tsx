import React from "react";
import { Browser } from "./Extension";
import Image from "next/image";
import { useMediaQuery } from "../_hooks/useMediaQuery";
import useClient from "@/hooks/useClient";

interface ExtensionCardProps extends Browser {
  index: number;
}

const ExtensionCard = ({
  logo,
  minVersion,
  name,
  index,
}: ExtensionCardProps) => {
  const isLgScreen = useMediaQuery("(min-width: 1024px)");
  const isClient = useClient();

  if (!isClient) {
    return null;
  }

  return (
    <div
      className="w-full max-w-[280px] shadow-md mx-auto flex flex-col items-center justify-center rounded-md"
      style={{
        marginTop: isLgScreen ? index * 4 * 6 : 0,
      }}
    >
      <div className="flex flex-col items-center justify-center p-5">
        <Image
          src={logo.src}
          width={logo.width}
          height={logo.height}
          alt={`${name}-logo`}
        />
        <h3 className="font-bold mt-5">Add to {name}</h3>
        <span className="text-[14px] text-grayish-blue ">
          Minimum version {minVersion}
        </span>
      </div>
      <Image
        src={"/images/bg-dots.svg"}
        alt={"separator"}
        className="mt-5"
        width={280}
        height={4}
      />
      <div className="p-5 pt-0">
        <button className="bg-soft-blue py-2 px-5 text-sm text-white font-medium rounded-sm inline-block mt-5">
          Add & Install Extension
        </button>
      </div>
    </div>
  );
};

export default ExtensionCard;
