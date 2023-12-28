import React, { PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {}

const Container = ({ children }: ContainerProps) => {
  return <div className="w-5/6 md:w-4/5 mx-auto">{children}</div>;
};

export default Container;
