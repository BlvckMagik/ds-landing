"use client";

import Image from "next/image";
import MainBanner from "@/public/home-page/main-banner.webp";
import MainBannerMobile from "@/public/home-page/main-banner-mob.webp";

const Welcome: React.FC = () => {
  return (
    <section className="bg-gray-50 p-12 lg:p-24">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="flex w-fit grow flex-col items-center justify-center gap-6 lg:items-start">
          <div className="text-greenDark w-fit font-bold">
            E-COURSE PLATFORM
          </div>
          <div className="w-fit text-center font-DelaGothicOne text-6xl font-bold text-gray-900 lg:text-left">
            Learning and teaching online, made easy.
          </div>
          <div className="text-grayDark w-4/5 text-center text-lg lg:text-left">
            Practice your English and learn new things with the platform.
          </div>
          <div className="text-greenDark bg-greenLight w-fit rounded-full px-6 py-3.5 text-base font-bold">
            About platform
          </div>
        </div>
        <Image
          width={933}
          className="w-48vw relative left-24 hidden lg:block"
          height={601}
          src={MainBanner}
          alt="main banner"
        />
        <Image
          width={335}
          className="block lg:hidden"
          height={280}
          src={MainBannerMobile}
          alt="main banner mobile"
        />
      </div>
    </section>
  );
};

export default Welcome;
