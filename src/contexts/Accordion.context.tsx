import { createContext, useContext } from "react";

type AccordionContext = {
  selectedAccordion: string;
  changeSelectedAccordion: (accordionName: string) => void;
};

const AccordionContext = createContext<AccordionContext>({
  selectedAccordion: "",
  changeSelectedAccordion: (accordionName) => {},
});

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("Error in creating Accordion Item");

  return context;
};
export { AccordionContext, useAccordionContext };
