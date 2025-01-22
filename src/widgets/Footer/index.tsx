"use client";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-around gap-12 border-t-2 border-t-gray-200 bg-white px-8 py-16 sm:flex-row sm:gap-0 lg:p-16">
      <div className="h-8 w-auto font-DelaGothicOne text-2xl text-gray-900">
        Drako Schule
      </div>
      <div>
        <div className="mb-4 font-bold">Контакти:</div>
        <div className="flex flex-col gap-y-2.5">
          <a
            href="https://www.instagram.com/drako_schule"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
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
        <div className="mb-4 font-bold">БлаБлабла:</div>
        <div className="flex flex-col gap-y-2.5">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            МяуМяуМяу
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            ГавГавгав
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            МуМуМу
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
