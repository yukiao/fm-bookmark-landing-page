import React, { PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`w-full max-w-[1440px] px-6 sm:px-14 lg:px-28 mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
