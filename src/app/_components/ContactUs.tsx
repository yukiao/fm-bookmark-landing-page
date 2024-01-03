import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <section className="py-10 bg-soft-blue">
      <Container>
        <div className="flex flex-col space-y-5">
          <p className="text-white text-center tracking-[4px] uppercase text-[12px] font-medium">
            35.000+ Already Joined
          </p>
          <p className="max-w-sm mx-auto text-center text-white font-bold text-2xl">
            Stay up-to-date with what we're doing
          </p>
          <div className="flex justify-center max-w-sm w-full mx-auto space-x-2">
            <div className="border-2 border-soft-red rounded-sm relative bg-soft-red">
              <div className="flex space-x-2 items-center bg-white px-2 rounded-sm">
                <input
                  type="text"
                  className="flex-1 min-w-0 h-8 outline-0 px-3 rounded-sm  text-sm w-full bg-transparent"
                />
                <div className="shrink-0">
                  <Image
                    src={"/images/icon-error.svg"}
                    alt={"error-icon"}
                    height={20}
                    width={20}
                  />
                </div>
              </div>
              <div className="bg-soft-red  w-full px-2">
                <span className="text-[14px] text-white font-medium">
                  <em>Whoops, make sure it's an email</em>
                </span>
              </div>
            </div>
            <button className="bg-soft-red h-8 text-[14px] px-3 text-white font-medium rounded-sm shrink-0">
              Contact Us
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
