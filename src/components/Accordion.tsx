import {
  AccordionContext,
  useAccordionContext,
} from "@/contexts/Accordion.context";
import React, { PropsWithChildren, useState } from "react";
import AccordionChevron from "./AccordionChevron";

interface AccordionProps extends PropsWithChildren {}
interface AccordionItemProps extends PropsWithChildren {
  title: string;
  name: string;
}

const Accordion = ({ children }: AccordionProps) => {
  const [selectedItem, setSelectedItem] = useState<string>("");

  return (
    <AccordionContext.Provider
      value={{
        selectedAccordion: selectedItem,
        changeSelectedAccordion(accordionName) {
          if (selectedItem === accordionName) {
            setSelectedItem("");
            return;
          }

          setSelectedItem(accordionName);
        },
      }}
    >
      <div className="max-w-sm mx-auto">{children}</div>
    </AccordionContext.Provider>
  );
};

Accordion.Item = ({ children, name, title }: AccordionItemProps) => {
  const { selectedAccordion, changeSelectedAccordion } = useAccordionContext();
  const isActive = selectedAccordion === name;

  const handleAccordionClick = () => {
    changeSelectedAccordion(name);
  };
  return (
    <div className="border-b border-grayish-blue flex flex-col py-3 first:border-t ">
      <div
        className="flex justify-between items-center cursor-pointer group"
        onClick={handleAccordionClick}
      >
        <h3 className="font-medium group-hover:text-soft-red">{title}</h3>

        <AccordionChevron
          className={`${
            isActive
              ? "stroke-soft-red rotate-180"
              : "stroke-soft-blue rotate-0"
          } transition-all duration-300 shrink-0`}
        />
      </div>
      <div
        className={`${
          selectedAccordion === name ? "h-auto pt-5" : "h-0 overflow-hidden"
        } text-sm text-grayish-blue`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
