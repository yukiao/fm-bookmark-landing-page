import React, { useCallback, useEffect, useState } from "react";

const useScroll = (scrollThreshold: number) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > scrollThreshold; // Adjust the scroll threshold as needed
    setIsScrolled(scrolled);
  }, [scrollThreshold]);

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return isScrolled;
};

export default useScroll;
