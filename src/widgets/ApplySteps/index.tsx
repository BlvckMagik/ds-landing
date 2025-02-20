"use client";

import useTheme from "@/src/entities/hooks/useTheme";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ApplySteps: React.FC = () => {
  const { isDarkModeEnabled } = useTheme();

  const [colors, setColors] = useState(["#fff", "#000"]);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    setColors(isDarkModeEnabled ? ["#2c2c2c", "#fff"] : ["#fff", "#000"]);
  }, [isDarkModeEnabled]);

  const backgroundColor1 = useTransform(scrollYProgress, [0.15, 0.2], colors);
  const backgroundColor2 = useTransform(scrollYProgress, [0.2, 0.25], colors);
  const backgroundColor3 = useTransform(scrollYProgress, [0.25, 0.3], colors);
  const backgroundColor4 = useTransform(scrollYProgress, [0.3, 0.35], colors);
  const backgroundColor5 = useTransform(scrollYProgress, [0.35, 0.4], colors);
  const backgroundColor6 = useTransform(scrollYProgress, [0.4, 0.45], colors);
  const backgroundColor7 = useTransform(scrollYProgress, [0.45, 0.5], colors);
  const backgroundColor8 = useTransform(scrollYProgress, [0.5, 0.55], colors);
  const backgroundColor9 = useTransform(scrollYProgress, [0.55, 0.6], colors);

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
                style={{ color: backgroundColor1 }}
                className="text-left font-DelaGothicOne text-2xl text-gray-900"
              >
                Залишити заявку
              </motion.h2>
              <motion.p
                style={{ color: backgroundColor1 }}
                className="text-left text-gray-500"
              >
                На нашому сайті або у асистента
              </motion.p>
            </motion.div>
            <motion.div className="flex max-w-64 flex-col justify-center gap-2">
              <motion.h2
                style={{ color: backgroundColor5 }}
                className="text-center font-DelaGothicOne text-2xl text-gray-900"
              >
                Тестуємо рівень знань
              </motion.h2>
              <motion.p
                style={{ color: backgroundColor5 }}
                className="text-center text-gray-500"
              >
                Якщо Ви його не знаєте
              </motion.p>
            </motion.div>
            <motion.div className="flex max-w-64 flex-col justify-center gap-2">
              <motion.h2
                style={{ color: backgroundColor9 }}
                className="text-right font-DelaGothicOne text-2xl text-gray-900"
              >
                Починаємо нашу співпрацю! :)
              </motion.h2>
            </motion.div>
          </div>
          <div className="flex h-full flex-col items-center justify-between gap-4 py-10 lg:w-full lg:flex-row lg:px-16 lg:py-0">
            <motion.div
              style={{ backgroundColor: backgroundColor1 }}
              className="h-6 w-6 rounded-full"
            />
            <motion.div
              style={{ backgroundColor: backgroundColor2 }}
              className="w-1 flex-grow lg:h-1 lg:w-auto"
            />
            <motion.div
              style={{ backgroundColor: backgroundColor3 }}
              className="h-6 w-6 rounded-full"
            />
            <motion.div
              style={{ backgroundColor: backgroundColor4 }}
              className="w-1 flex-grow lg:h-1 lg:w-auto"
            />
            <motion.div
              style={{ backgroundColor: backgroundColor5 }}
              className="h-6 w-6 rounded-full"
            />
            <motion.div
              style={{ backgroundColor: backgroundColor6 }}
              className="w-1 flex-grow lg:h-1 lg:w-auto"
            />
            <motion.div
              style={{ backgroundColor: backgroundColor7 }}
              className="h-6 w-6 rounded-full"
            />
            <motion.div
              style={{ backgroundColor: backgroundColor8 }}
              className="w-1 flex-grow lg:h-1 lg:w-auto"
            />
            <motion.div
              style={{ backgroundColor: backgroundColor9 }}
              className="h-6 w-6 rounded-full"
            />
          </div>
          <div className="flex hidden w-full justify-around px-16 lg:flex">
            <div className="flex max-w-64 flex-col justify-center gap-2">
              <motion.h2
                style={{ color: backgroundColor3 }}
                className="text-center font-DelaGothicOne text-2xl text-gray-900"
              >
                Ми зв&apos;язуємось з вами
              </motion.h2>
              <motion.p
                style={{ color: backgroundColor3 }}
                className="text-center text-gray-500"
              >
                Підбираємо групу (якщо знаєте рівень), узгоджуємо час
              </motion.p>
            </div>
            <div className="flex max-w-64 flex-col justify-center gap-2">
              <motion.h2
                style={{ color: backgroundColor7 }}
                className="text-center font-DelaGothicOne text-2xl text-gray-900"
              >
                Проходимо пробний урок
              </motion.h2>
              <motion.p
                style={{ color: backgroundColor7 }}
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
              style={{ color: backgroundColor1 }}
              className="text-left font-DelaGothicOne text-2xl text-gray-900"
            >
              Залишити заявку
            </motion.h2>
            <motion.p
              style={{ color: backgroundColor1 }}
              className="text-left text-gray-500"
            >
              На нашому сайті або у асистента
            </motion.p>
          </div>
          <div className="flex max-w-64 flex-col justify-center gap-2">
            <motion.h2
              style={{ color: backgroundColor3 }}
              className="text-left font-DelaGothicOne text-2xl text-gray-900"
            >
              Ми зв&apos;язуємось з вами
            </motion.h2>
            <motion.p
              style={{ color: backgroundColor3 }}
              className="text-left text-gray-500"
            >
              Підбираємо групу (якщо знаєте рівень), узгоджуємо час
            </motion.p>
          </div>
          <div className="flex max-w-64 flex-col justify-center gap-2">
            <motion.h2
              style={{ color: backgroundColor5 }}
              className="text-left font-DelaGothicOne text-2xl text-gray-900"
            >
              Тестуємо рівень знань
            </motion.h2>
            <motion.p
              style={{ color: backgroundColor5 }}
              className="text-left text-gray-500"
            >
              Якщо Ви його не знаєте
            </motion.p>
          </div>
          <div className="flex max-w-64 flex-col justify-center gap-2">
            <motion.h2
              style={{ color: backgroundColor7 }}
              className="text-left font-DelaGothicOne text-2xl text-gray-900"
            >
              Проходимо пробний урок
            </motion.h2>
            <motion.p
              style={{ color: backgroundColor7 }}
              className="text-left text-gray-500"
            >
              Задля знайомства з групою та постійним викладачем
            </motion.p>
          </div>
          <div className="flex max-w-64 flex-col justify-center gap-2">
            <motion.h2
              style={{ color: backgroundColor9 }}
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
