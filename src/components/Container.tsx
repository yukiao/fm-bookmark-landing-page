import React, { PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-[1440px] px-6 sm:px-14 lg:px-28 mx-auto">
      {children}
    </div>
  );
};

export default Container;
