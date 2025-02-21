"use client";

import useMediaQuery from "@/src/entities/hooks/useIsMobile";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ApplySteps: React.FC = () => {
  const matches = useMediaQuery(960);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity1 = useTransform(scrollYProgress, [0.21, 0.26], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.24, 0.29], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.27, 0.32], [0, 1]);
  const opacity4 = useTransform(scrollYProgress, [0.3, 0.35], [0, 1]);
  const opacity5 = useTransform(scrollYProgress, [0.33, 0.38], [0, 1]);
  const opacity6 = useTransform(scrollYProgress, [0.36, 0.41], [0, 1]);
  const opacity7 = useTransform(scrollYProgress, [0.39, 0.44], [0, 1]);
  const opacity8 = useTransform(scrollYProgress, [0.42, 0.47], [0, 1]);
  const opacity9 = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);

  const opacityMobile1 = useTransform(scrollYProgress, [0.2, 0.25], [0, 1]);
  const opacityMobile2 = useTransform(scrollYProgress, [0.25, 0.3], [0, 1]);
  const opacityMobile3 = useTransform(scrollYProgress, [0.3, 0.35], [0, 1]);
  const opacityMobile4 = useTransform(scrollYProgress, [0.35, 0.4], [0, 1]);
  const opacityMobile5 = useTransform(scrollYProgress, [0.4, 0.45], [0, 1]);
  const opacityMobile6 = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);
  const opacityMobile7 = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);
  const opacityMobile8 = useTransform(scrollYProgress, [0.55, 0.6], [0, 1]);
  const opacityMobile9 = useTransform(scrollYProgress, [0.6, 0.65], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="p-8 md:p-14 lg:p-24 dark:bg-gray-900 dark:bg-opacity-95"
    >
      <h1 className="mb-8 w-full text-center font-DelaGothicOne text-4xl font-bold text-gray-900 lg:mb-16 lg:text-6xl">
        Як розпочати навчання
      </h1>
      <div className="mt-4 flex h-[900px] items-center justify-center gap-12 lg:mt-0 lg:h-auto lg:flex-col lg:items-start lg:justify-between">
        <div className="flex h-full items-center justify-between gap-12 lg:h-auto lg:w-full lg:flex-col lg:items-start">
          <div className="hidden w-full justify-between gap-16 lg:flex">
            <motion.div className="flex max-w-64 flex-col justify-center gap-2">
              <motion.h2
                style={{ opacity: matches ? opacityMobile1 : opacity1 }}
                className="text-left font-DelaGothicOne text-2xl text-gray-900"
              >
                Залишити заявку
              </motion.h2>
              <motion.p
                style={{ opacity: matches ? opacityMobile1 : opacity1 }}
                className="text-left text-gray-500"
              >
                На нашому сайті або у асистента
              </motion.p>
            </motion.div>
            <motion.div className="flex max-w-64 flex-col justify-center gap-2">
              <motion.h2
                style={{ opacity: matches ? opacityMobile5 : opacity5 }}
                className="text-center font-DelaGothicOne text-2xl text-gray-900"
              >
                Тестуємо рівень знань
              </motion.h2>
              <motion.p
                style={{ opacity: matches ? opacityMobile5 : opacity5 }}
                className="text-center text-gray-500"
              >
                Якщо Ви його не знаєте
              </motion.p>
            </motion.div>
            <motion.div className="flex max-w-64 flex-col justify-center gap-2">
              <motion.h2
                style={{ opacity: matches ? opacityMobile9 : opacity9 }}
                className="text-right font-DelaGothicOne text-2xl text-gray-900"
              >
                Починаємо нашу співпрацю! :)
              </motion.h2>
            </motion.div>
          </div>
          <div className="flex h-full flex-col items-center justify-between gap-4 py-10 lg:w-full lg:flex-row lg:px-16 lg:py-0">
            <motion.div
              style={{ opacity: matches ? opacityMobile1 : opacity1 }}
              className="h-6 w-6 rounded-full bg-black dark:bg-white"
            />
            <motion.div
              style={{ opacity: matches ? opacityMobile2 : opacity2 }}
              className="w-1 flex-grow bg-black lg:h-1 lg:w-auto dark:bg-white"
            />
            <motion.div
              style={{ opacity: matches ? opacityMobile3 : opacity3 }}
              className="h-6 w-6 rounded-full bg-black dark:bg-white"
            />
            <motion.div
              style={{ opacity: matches ? opacityMobile4 : opacity4 }}
              className="w-1 flex-grow bg-black lg:h-1 lg:w-auto dark:bg-white"
            />
            <motion.div
              style={{ opacity: matches ? opacityMobile5 : opacity5 }}
              className="h-6 w-6 rounded-full bg-black dark:bg-white"
            />
            <motion.div
              style={{ opacity: matches ? opacityMobile6 : opacity6 }}
              className="w-1 flex-grow bg-black lg:h-1 lg:w-auto dark:bg-white"
            />
            <motion.div
              style={{ opacity: matches ? opacityMobile7 : opacity7 }}
              className="h-6 w-6 rounded-full bg-black dark:bg-white"
            />
            <motion.div
              style={{ opacity: matches ? opacityMobile8 : opacity8 }}
              className="w-1 flex-grow bg-black lg:h-1 lg:w-auto dark:bg-white"
            />
            <motion.div
              style={{ opacity: matches ? opacityMobile9 : opacity9 }}
              className="h-6 w-6 rounded-full bg-black dark:bg-white"
            />
          </div>
          <div className="flex hidden w-full justify-around px-16 lg:flex">
            <div className="flex max-w-64 flex-col justify-center gap-2">
              <motion.h2
                style={{ opacity: matches ? opacityMobile3 : opacity3 }}
                className="text-center font-DelaGothicOne text-2xl text-gray-900"
              >
                Ми зв&apos;язуємось з вами
              </motion.h2>
              <motion.p
                style={{ opacity: matches ? opacityMobile3 : opacity3 }}
                className="text-center text-gray-500"
              >
                Підбираємо групу (якщо знаєте рівень), узгоджуємо час
              </motion.p>
            </div>
            <div className="flex max-w-64 flex-col justify-center gap-2">
              <motion.h2
                style={{ opacity: matches ? opacityMobile7 : opacity7 }}
                className="text-center font-DelaGothicOne text-2xl text-gray-900"
              >
                Проходимо пробний урок
              </motion.h2>
              <motion.p
                style={{ opacity: matches ? opacityMobile7 : opacity7 }}
                className="text-center text-gray-500"
              >
                Задля знайомства з групою та постійним викладачем
              </motion.p>
            </div>
          </div>
        </div>
        <div className="flex h-full flex-col items-center justify-between gap-12 lg:hidden">
          <div className="flex max-w-64 flex-col justify-center gap-2">
            <motion.h2
              style={{ opacity: matches ? opacityMobile1 : opacity1 }}
              className="text-left font-DelaGothicOne text-2xl text-gray-900"
            >
              Залишити заявку
            </motion.h2>
            <motion.p
              style={{ opacity: matches ? opacityMobile1 : opacity1 }}
              className="text-left text-gray-500"
            >
              На нашому сайті або у асистента
            </motion.p>
          </div>
          <div className="flex max-w-64 flex-col justify-center gap-2">
            <motion.h2
              style={{ opacity: matches ? opacityMobile3 : opacity3 }}
              className="text-left font-DelaGothicOne text-2xl text-gray-900"
            >
              Ми зв&apos;язуємось з вами
            </motion.h2>
            <motion.p
              style={{ opacity: matches ? opacityMobile3 : opacity3 }}
              className="text-left text-gray-500"
            >
              Підбираємо групу (якщо знаєте рівень), узгоджуємо час
            </motion.p>
          </div>
          <div className="flex max-w-64 flex-col justify-center gap-2">
            <motion.h2
              style={{ opacity: matches ? opacityMobile5 : opacity5 }}
              className="text-left font-DelaGothicOne text-2xl text-gray-900"
            >
              Тестуємо рівень знань
            </motion.h2>
            <motion.p
              style={{ opacity: matches ? opacityMobile5 : opacity5 }}
              className="text-left text-gray-500"
            >
              Якщо Ви його не знаєте
            </motion.p>
          </div>
          <div className="flex max-w-64 flex-col justify-center gap-2">
            <motion.h2
              style={{ opacity: matches ? opacityMobile7 : opacity7 }}
              className="text-left font-DelaGothicOne text-2xl text-gray-900"
            >
              Проходимо пробний урок
            </motion.h2>
            <motion.p
              style={{ opacity: matches ? opacityMobile7 : opacity7 }}
              className="text-left text-gray-500"
            >
              Задля знайомства з групою та постійним викладачем
            </motion.p>
          </div>
          <div className="flex max-w-64 flex-col justify-center gap-2">
            <motion.h2
              style={{ opacity: matches ? opacityMobile9 : opacity9 }}
              className="text-left font-DelaGothicOne text-2xl text-gray-900"
            >
              Починаємо нашу співпрацю! :)
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplySteps;
