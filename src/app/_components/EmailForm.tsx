import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import z from "zod";

const EmailForm = () => {
  const [email, setEmail] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const emailSchema = z.string().email();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setIsError(true);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isError) {
      setIsError(false);
    }
    setEmail(e.target.value);
  };

  return (
    <form
      className={`flex flex-col md:flex-row justify-center max-w-sm w-full mx-auto space-y-2 md:space-y-0 md:space-x-2`}
      onSubmit={handleSubmit}
    >
      <div
        className={`border-2 flex-1 ${
          isError ? "border-soft-red bg-soft-red" : ""
        } rounded-sm relative border-transparent`}
      >
        <div className={`flex space-x-2 items-center bg-white px-2 rounded-sm`}>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            className="flex-1 min-w-0 h-8 outline-0 px-3 rounded-sm  text-sm w-full bg-transparent"
          />
          {isError && (
            <div className="shrink-0">
              <Image
                src={"/images/icon-error.svg"}
                alt={"error-icon"}
                height={20}
                width={20}
              />
            </div>
          )}
        </div>
        <div
          className={`bg-soft-red  w-full px-2 ${
            !isError ? "invisible" : "visible"
          }`}
        >
          <span className="text-[14px] text-white font-medium">
            <em>Whoops, make sure it's an email</em>
          </span>
        </div>
      </div>
      <button
        type="submit"
        className="bg-soft-red h-8 text-[14px] md:px-3 text-white font-medium rounded-sm shrink-0"
      >
        Contact Us
      </button>
    </form>
  );
};

export default EmailForm;
