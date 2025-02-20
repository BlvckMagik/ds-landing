"use client";

import { benefits } from "@/src/entities/constants/benefits";

const Benefits: React.FC = () => {
  return (
    <section className="bg-gray-50 p-8 md:p-14 lg:p-24 dark:bg-gray-900">
      <div className="mb-8 w-full text-center font-DelaGothicOne text-4xl font-bold text-gray-900 lg:mb-16 lg:text-6xl">
        Ваші переваги від навчання
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="relative flex h-full flex-col items-center gap-2 rounded-xl bg-gray-200 p-6 text-center shadow-xl transition-transform duration-300 hover:-translate-y-2 dark:bg-gray-900 dark:bg-white/5"
          >
            <div className="absolute left-8 top-8 h-16 w-16 rounded-full bg-white p-4 text-2xl text-white dark:bg-white/10">
              {benefit.icon}
            </div>
            <div className="mb-10 mt-24 text-left text-lg text-gray-900 dark:text-white">
              {benefit.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
