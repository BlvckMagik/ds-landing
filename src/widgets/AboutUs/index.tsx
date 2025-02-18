"use client";

import { motion } from "framer-motion";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const AboutUs: React.FC = () => {
  return (
    <section className="p-8 md:p-14 lg:p-24 dark:bg-gray-900 dark:bg-opacity-95">
      <h1 className="mb-8 w-full text-center font-DelaGothicOne text-4xl font-bold text-gray-900 lg:mb-16 lg:text-6xl">
        Чому варто обрати нас?
      </h1>
      <h1 className="mb-8 w-full text-center font-DelaGothicOne text-xl font-bold text-gray-900 lg:mb-16 lg:text-3xl">
        Наш унікальний підхід до навчання
      </h1>
      <div className="flex items-center justify-between gap-16 lg:flex-row lg:items-start">
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
          className="flex hidden w-fit grow flex-wrap justify-center gap-6 text-center lg:flex lg:text-left"
        >
          <div className="text-md flex w-[30%] min-w-[400px] flex-col gap-4 rounded-xl bg-gray-100 p-6 text-center shadow-xl transition-transform duration-300 hover:-translate-y-2 sm:p-10 lg:text-left lg:text-lg dark:bg-white/5">
            <p className="mb-4 text-xl font-bold lg:text-2xl">
              Для дітей до 10 років
            </p>
            <p>🧚 Казкове навчання – заняття проходять у сюжетній формі.</p>
            <p>🎭 Власний персонаж – діти створюють і розвивають героя.</p>
            <p>
              💰 Віртуальна економіка – заробляють гроші, купують речі, будинки,
              тварин.
            </p>
            <p>🐉 Домашні улюбленці – від котиків до драконів.</p>
            <p>📖 Захопливий сюжет – пов’язаний з програмою навчання.</p>
            <p>
              🗣 Жива мова – учні взаємодіють та впливають на події історії
              іноземною мовою.
            </p>
          </div>

          <div className="text-md flex w-[30%] min-w-[400px] flex-col gap-4 rounded-xl bg-gray-100 p-6 text-center shadow-xl transition-transform duration-300 hover:-translate-y-2 sm:p-10 lg:text-left lg:text-lg dark:bg-white/5">
            <p className="mb-4 text-xl font-bold lg:text-2xl">
              Для дітей від 11 років
            </p>
            <p>🎲 Ігровий формат – навчання також поєднується з розвагами.</p>
            <p>🏀 Активні ігри онлайн – баскетбол, футбол, боулінг та інші.</p>
            <p>🧠 Розвиток навичок – критичне мислення, логіка, комунікація.</p>
            <p>
              🏆 Командні змагання – обговорення тем, виконання завдань та
              призи.
            </p>
            <p>
              📱Робота з сучасними порталами для навчання, та платформами
              Youtube, Tiktok
            </p>
          </div>

          <div className="text-md flex w-[30%] min-w-[400px] flex-col gap-4 rounded-xl bg-gray-100 p-6 text-center shadow-xl transition-transform duration-300 hover:-translate-y-2 sm:p-10 lg:text-left lg:text-lg dark:bg-white/5">
            <p className="mb-4 text-xl font-bold lg:text-2xl">
              Для дорослих 🏆🎭
            </p>
            <p>
              😄 Дорослі — теж діти! Ми вважаємо, що навчання має бути цікавим у
              будь-якому віці, тому наші заняття з дорослими також проходять в
              інтерактивному форматі.
            </p>
            <p>
              🎲 Ми теж граємо! Уроки наповнені рольовими сценаріями, квестами,
              живими дискусіями і ми можемо грати в хрестики нулики, морський
              бій та інше :)
            </p>
            <p>
              🗣 Говоримо з першого заняття – долаємо мовний бар’єр легко та
              невимушено.
            </p>
            <p>
              � Готуємо до важливого – допоможемо підготуватися до міжнародних
              іспитів, співбесід, ділових переговорів та подорожей.
            </p>
            <p>🔥 Без зубріння – лише практика!</p>
          </div>
        </motion.div>

        <div className="flex w-full justify-center lg:hidden">
          <div className="w-full max-w-md">
            <TabGroup>
              <TabList className="flex gap-4">
                <Tab className="rounded-full px-3 py-1 text-sm/6 font-semibold transition-all duration-300 focus:outline-none data-[hover]:bg-gray-100/50 data-[selected]:bg-gray-100 data-[selected]:data-[hover]:bg-gray-100 data-[focus]:outline-1 data-[focus]:outline-white dark:text-white dark:data-[hover]:bg-white/5 dark:data-[selected]:bg-white/10 dark:data-[selected]:data-[hover]:bg-white/10">
                  До 10 років
                </Tab>
                <Tab className="rounded-full px-3 py-1 text-sm/6 font-semibold transition-all duration-300 focus:outline-none data-[hover]:bg-gray-100/50 data-[selected]:bg-gray-100 data-[selected]:data-[hover]:bg-gray-100 data-[focus]:outline-1 data-[focus]:outline-white dark:text-white dark:data-[hover]:bg-white/5 dark:data-[selected]:bg-white/10 dark:data-[selected]:data-[hover]:bg-white/10">
                  Від 11 років
                </Tab>
                <Tab className="rounded-full px-3 py-1 text-sm/6 font-semibold transition-all duration-300 focus:outline-none data-[hover]:bg-gray-100/50 data-[selected]:bg-gray-100 data-[selected]:data-[hover]:bg-gray-100 data-[focus]:outline-1 data-[focus]:outline-white dark:text-white dark:data-[hover]:bg-white/5 dark:data-[selected]:bg-white/10 dark:data-[selected]:data-[hover]:bg-white/10">
                  Дорослі
                </Tab>
              </TabList>
              <TabPanels className="mt-3">
                <TabPanel className="rounded-xl bg-gray-100 p-3 dark:bg-white/5">
                  <p>
                    🧚 Казкове навчання – заняття проходять у сюжетній формі.
                  </p>
                  <p>
                    🎭 Власний персонаж – діти створюють і розвивають героя.
                  </p>
                  <p>
                    💰 Віртуальна економіка – заробляють гроші, купують речі,
                    будинки, тварин.
                  </p>
                  <p>🐉 Домашні улюбленці – від котиків до драконів.</p>
                  <p>📖 Захопливий сюжет – пов’язаний з програмою навчання.</p>
                  <p>
                    🗣 Жива мова – учні взаємодіють та впливають на події
                    історії іноземною мовою.
                  </p>
                </TabPanel>
                <TabPanel className="rounded-xl bg-gray-100 p-3 dark:bg-white/5">
                  <p>
                    🎲 Ігровий формат – навчання також поєднується з розвагами.
                  </p>
                  <p>
                    🏀 Активні ігри онлайн – баскетбол, футбол, боулінг та інші.
                  </p>
                  <p>
                    🧠 Розвиток навичок – критичне мислення, логіка,
                    комунікація.
                  </p>
                  <p>
                    🏆 Командні змагання – обговорення тем, виконання завдань та
                    призи.
                  </p>
                  <p>
                    📱Робота з сучасними порталами для навчання, та платформами
                    Youtube, Tiktok
                  </p>
                </TabPanel>
                <TabPanel className="rounded-xl bg-gray-100 p-3 dark:bg-white/5">
                  <p>
                    😄 Дорослі — теж діти! Ми вважаємо, що навчання має бути
                    цікавим у будь-якому віці, тому наші заняття з дорослими
                    також проходять в інтерактивному форматі.
                  </p>
                  <p>
                    🎲 Ми теж граємо! Уроки наповнені рольовими сценаріями,
                    квестами, живими дискусіями і ми можемо грати в хрестики
                    нулики, морський бій та інше :)
                  </p>
                  <p>
                    🗣 Говоримо з першого заняття – долаємо мовний бар’єр легко
                    та невимушено.
                  </p>
                  <p>
                    � Готуємо до важливого – допоможемо підготуватися до
                    міжнародних іспитів, співбесід, ділових переговорів та
                    подорожей.
                  </p>
                  <p>🔥 Без зубріння – лише практика!</p>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
