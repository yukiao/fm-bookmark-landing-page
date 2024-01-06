import Container from "@/components/Container";
import React from "react";
import EmailForm from "./EmailForm";

const ContactUs = () => {
  return (
    <section id="contact" className="py-10 bg-soft-blue">
      <Container>
        <div className="flex flex-col space-y-5">
          <p className="text-white text-center tracking-[4px] uppercase text-[12px] font-medium">
            35.000+ Already Joined
          </p>
          <p className="max-w-sm mx-auto text-center text-white font-bold text-1xl">
            Stay up-to-date with what we&apos;re doing
          </p>
          <EmailForm />
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
