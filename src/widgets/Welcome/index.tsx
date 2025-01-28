"use client";

import Image from "next/image";
import MainBanner from "@/public/home-page/main-banner.webp";
import MainBannerMobile from "@/public/home-page/main-banner-mob.webp";
import { motion } from "framer-motion";

const Welcome: React.FC = () => {
  return (
    <section className="bg-gray-50 p-12 lg:p-24 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.2,
              },
            },
          }}
          initial="hidden"
          animate="visible"
          className="flex w-fit grow flex-col items-center justify-center gap-6 lg:items-start"
        >
          <div className="w-fit font-bold text-greenDark">
            Репетиторський центр онлайн
          </div>
          <div className="w-fit text-center font-DelaGothicOne text-6xl font-bold text-gray-900 lg:w-10/12 lg:text-left">
            Ми - це місце для цікавого вивчення іноземних мов
          </div>
          <div className="w-4/5 text-center text-lg text-grayDark lg:text-left">
            Практикуйте іноземні мови та вивчайте нові речі разом з платформою.
          </div>
          {/* <div className="w-fit rounded-full bg-greenLight px-6 py-3.5 text-base font-bold text-greenDark">
            About platform
          </div> */}
        </motion.div>
        <Image
          width={933}
          className="relative left-24 hidden w-[48vw] lg:block"
          height={601}
          src={MainBanner}
          alt="main banner"
        />
        <Image
          width={335}
          className="mt-6 block lg:hidden"
          height={280}
          src={MainBannerMobile}
          alt="main banner mobile"
        />
      </div>
    </section>
  );
};

export default Welcome;
