"use client";

import Image from "next/image";
import MainBanner from "@/public/home-page/main-banner.webp";
import MainBannerMobile from "@/public/home-page/main-banner-mob.webp";
import { motion } from "framer-motion";

const Welcome: React.FC = () => {
  return (
    <section className="bg-gray-50 p-8 md:p-14 lg:p-24 dark:bg-gray-900">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delay: 0,
              duration: 0.5,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-between lg:flex-row"
      >
        <div className="flex w-full flex-col items-center justify-center gap-6 text-center lg:w-1/2 lg:items-start lg:text-left">
          <div className="w-fit font-bold text-greenDark">
            Репетиторський центр онлайн
          </div>
          <div className="w-fit text-center font-DelaGothicOne text-4xl font-bold text-gray-900 lg:w-10/12 lg:text-left lg:text-6xl">
            Ми - це онлайн простір для вивчення мов
          </div>
          <div className="w-4/5 text-center text-lg text-grayDark lg:text-left">
            Практикуйте іноземні мови та вивчайте нові речі разом з нами.
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <a href="#applyForm">
              <button className="bg-orangeDark min-h-5 min-w-12 rounded-full px-8 py-3 text-white">
                Записатись
              </button>
            </a>
            <a href="https://t.me/managerDrakoBot" target="_blank">
              <button className="min-h-5 min-w-12 rounded-full bg-greenDark px-8 py-3 text-white">
                Консультація менеджера
              </button>
            </a>
          </div>
          {/* <div className="w-fit rounded-full bg-greenLight px-6 py-3.5 text-base font-bold text-greenDark">
            About platform
          </div> */}
        </div>

        <div className="relative hidden h-[601px] w-[48vw] lg:block">
          <Image
            priority
            fill
            className="relative left-24 object-contain"
            src={MainBanner}
            alt="main banner"
            sizes="48vw"
          />
        </div>

        <div className="relative mt-6 block h-[280px] w-[335px] lg:hidden">
          <Image
            priority
            fill
            className="object-contain"
            src={MainBannerMobile}
            alt="main banner mobile"
            sizes="335px"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Welcome;
