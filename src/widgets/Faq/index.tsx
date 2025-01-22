"use client";

import Disclosure from "@/src/components/Disclosure";
import { faqItems } from "@/src/entities/constants/faq";

const Faq = () => {
  return (
    <section className="grid grid-cols-1 place-items-center gap-6 p-12 text-gray-900 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10 lg:p-24">
      {faqItems.map((item, i) => (
        <Disclosure key={i} title={item.title} content={item.content} />
      ))}
    </section>
  );
};

export default Faq;
