import React from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="px-6 sm:px-14 lg:px-28">
      <h2 className="text-2xl font-semibold text-center">{title}</h2>
      <p className="text-grayish-blue max-w-sm text-center mx-auto mt-5 text-sm">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
