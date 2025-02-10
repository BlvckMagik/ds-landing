"use client";

import { motion } from "framer-motion";

const AboutUs: React.FC = () => {
  return (
    <section className="p-8 md:p-14 lg:p-24 dark:bg-gray-900 dark:bg-opacity-95">
      <h1 className="mb-16 w-full text-center font-DelaGothicOne text-6xl font-bold text-gray-900">
        Про нас
      </h1>
      <div className="flex flex-col items-center justify-between gap-16 lg:flex-row lg:items-start">
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
          className="flex w-fit grow flex-col justify-center gap-6 text-center lg:text-left"
        >
          <div className="flex flex-col gap-4 text-center text-lg lg:text-left">
            <p>
              У нас на заняттях діти зможуть відчути себе комфортно та залучено
              завдяки нашому &quot;казковому&quot; підходу. Якщо дитині до 10
              років, навчання відбувається в сюжеті. У кожного є свій персонаж,
              якого діти розвивають, заробляють віртуальні гроші, купують для
              нього речі, машини, будинки, різноманітні предмети. Також
              вирощують своїх улюбленців, від милих котиків до могутніх
              драконів!
            </p>
            <p>
              Сюжет напряму пов&apos;язаний з програмою навчання, і між завдань
              у паузах, ми ще й дивимось, як розвивається Всесвіт з нашими
              героями! Учні мають можливість читати та відповідати за своїх
              персонажів, впливати на сюжет, розвивати ідеї та хід подій нашої
              історії й усе це - іноземною мовою!
            </p>
            <p>
              Якщо важко та нудно вчитись, то ця методика прекрасно підійде для
              Вашої дитини, адже ми збалансовано наповнюємо уроки завданнями, що
              також здебільшого відбуваються в різних іграх і нашою захопливою
              історією!
            </p>
            <p>
              Ми спираємось на комунікативний підхід - тому дуже скоро ми
              розговоримо іноземною будь-яку дитинку :)
            </p>
          </div>
        </motion.div>
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
          className="flex w-fit grow flex-col items-center justify-center gap-6 text-center lg:items-start lg:text-left"
        >
          <div className="flex flex-col gap-4 text-center text-lg lg:text-left">
            <p>
              Учням старше 11 років ми також пропонуємо захопливі уроки в
              ігровому форматі! Ми поєднуємо навчання з активними розвагами, щоб
              зробити процес ще цікавішим і ефективнішим.
            </p>
            <p>
              На наших заняттях ми зможем не лише грати в баскетбол, боулінг,
              футбол, хрестики-нулики чи інші ігри, а й розвивати свої навички
              критичного мислення, логіки та комунікації. Учасники
              виконуватимуть завдання в командах, обговорюватимуть цікаві теми й
              навіть змагатимуться за призи!
            </p>
            <p>
              На наших заняттях ми зможем не лише грати в баскетбол, боулінг,
              футбол, хрестики-нулики чи інші ігри, а й розвивати свої навички
              критичного мислення, логіки та комунікації. Учасники
              виконуватимуть завдання в командах, обговорюватимуть цікаві теми й
              навіть змагатимуться за призи!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
