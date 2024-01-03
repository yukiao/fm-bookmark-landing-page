import React from "react";
import SectionHeader from "./SectionHeader";
import Accordion from "@/components/Accordion";

const Faq = () => {
  return (
    <section className="mb-5">
      <SectionHeader
        title={"Frequently Asked Questions"}
        description={
          "Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."
        }
      />
      <div className="px-6 sm:px-14 lg:px-28 mt-5">
        <Accordion>
          <Accordion.Item title="What is Bookmark?" name="what-is-bookmark">
            <span>Hello</span>
          </Accordion.Item>
          <Accordion.Item
            title="How can i request a new browser?"
            name="how-can-i-request-a-new-browser"
          >
            <span>Hello</span>
          </Accordion.Item>
          <Accordion.Item
            title="Is there a mobile app?"
            name="is-there-a-mobile-app"
          >
            <span>Hello</span>
          </Accordion.Item>
          <Accordion.Item
            title="What about other Chromium browsers?"
            name="what-about-other-chromium-browsers"
          >
            <span>Hello</span>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
