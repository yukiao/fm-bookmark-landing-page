import React, { ComponentPropsWithoutRef } from "react";

interface AccordionChevronProps extends ComponentPropsWithoutRef<"svg"> {}

const AccordionChevron = ({ className, ...props }: AccordionChevronProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="12"
      className={className}
      {...props}
    >
      <path fill="none" stroke-width="3" d="M1 1l8 8 8-8" />
    </svg>
  );
};

export default AccordionChevron;
