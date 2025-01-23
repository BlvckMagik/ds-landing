"use client";

import { Fragment, useEffect, useState } from "react";

import Disclosure from "@/src/components/Disclosure";
import { faqItems } from "@/src/entities/constants/faq";

const Faq = () => {
  const [isHintUsed, setIsHintUsed] = useState<boolean>(true);

  useEffect(() => {
    setIsHintUsed(!!window.localStorage.getItem("isHintUsed") || false);
  }, []);

  return (
    <section
      id="faq"
      className="p-12 text-gray-900 lg:p-24 dark:bg-gray-900 dark:bg-opacity-95"
    >
      <h1 className="mb-16 text-center font-DelaGothicOne text-6xl font-bold text-gray-900">
        FAQ
      </h1>
      <div className="relative grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
        {faqItems.map((item, i) => (
          <Fragment key={i}>
            <Disclosure
              key={i}
              title={item.title}
              content={item.content}
              setIsHintUsed={() => setIsHintUsed(true)}
            />
            {i === 0 && !isHintUsed && (
              <div className="absolute left-0 top-hint flex w-fit items-center justify-center gap-1 rounded-full bg-greenLight px-6 py-1.5 text-sm font-bold text-greenDark">
                Click me to see answer
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#14471E"
                  className="size-4 text-greenDark"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Faq;
