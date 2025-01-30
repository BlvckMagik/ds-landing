"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-around gap-12 border-t-2 border-t-gray-200 bg-gray-50 px-8 py-16 sm:flex-row sm:gap-0 lg:p-16 dark:border-t-gray-800 dark:bg-gray-900">
      <div className="h-8 w-auto font-DelaGothicOne text-2xl text-gray-900">
        Drako Schule
      </div>
      <div>
        <div className="mb-4 font-bold">Контакти:</div>
        <div className="flex flex-col gap-y-2.5">
          <Link
            href="https://www.instagram.com/drako_schule"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
          <a
            href="https://t.me/drako_schule"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Viber
          </a>
        </div>
      </div>
      <div>
        <div className="mb-4 font-bold">Додатково:</div>
        <div className="flex flex-col gap-y-2.5">
          <Link href="career" rel="noopener noreferrer">
            Пошук викладачів
          </Link>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            ГавГавгав
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            мфумфумф
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
