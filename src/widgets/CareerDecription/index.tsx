"use client";

import CareerPost from "@/src/components/CareerPost";
import { motion } from "framer-motion";

const CareerDecription: React.FC = () => {
  return (
    <section className="bg-gray-50 p-8 md:p-14 lg:p-24 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-between lg:flex-row lg:items-start">
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
          className="flex w-full grow flex-col items-center justify-center gap-6 lg:items-start"
        >
          <div className="w-fit font-bold text-greenDark">
            Репетиторський центр онлайн
          </div>
          <div className="w-fit text-center font-DelaGothicOne text-4xl font-bold text-gray-900 lg:w-10/12 lg:text-left lg:text-6xl">
            Доєднуйся до команди викладачів Drako Schule!
          </div>
          <div className="mb-8 flex flex-col gap-4 text-left text-lg lg:mb-0 lg:w-4/5 lg:text-left">
            <p>
              Шукаємо дитячого викладача з німецької мови для онлайн-роботи!
            </p>

            <p>
              Ми – репетиторський центр, який цінує теплу атмосферу, професійний
              підхід та розвиток кожного учасника команди.
            </p>

            <h3>Умови роботи:</h3>
            <ul className="flex flex-col gap-4 pl-6">
              <li>
                🌍 <b>Формат:</b> онлайн, віддалено.
              </li>
              <li>
                👥 <b>Групи:</b> до 6 дітей (вік від 6 років, різний рівень
                підготовки).
              </li>
              <li>
                📚 <b>Матеріали:</b> надаються або обираються самостійно
                (впливає на зп).
              </li>
              <li>
                💰 <b>Зарплата:</b> обговорюється індивідуально (не 150 грн і не
                250 грн 😊).
              </li>
              <li>
                💸 <b>Виплати:</b> після кожного заняття, щотижня, 2 рази на
                місяць або 1 раз на місяць (на ваш вибір).
              </li>
              <li>
                📈 <b>Кар&apos;єрний зріст:</b> можливість підвищення зарплати
                та професійного розвитку.
              </li>
              <li>
                ❣️ <b>Колектив:</b> дружній, підтримуючий, з куратором, який
                допомагає у роботі та організації.
              </li>
              <li>
                🔎 <b>Тіч-менеджмент:</b> контроль прогресу, розбір уроків,
                покращення навичок.
              </li>
              <li>
                💃 <b>Додатково:</b> шпрахклуби, індивідуальні уроки для
                викладачів, оплата підписок.
              </li>
            </ul>

            <h3>Вимоги до кандидатів:</h3>
            <ul className="flex flex-col gap-4 pl-6">
              <li>
                🇩🇪 <b>Рівень німецької:</b> від B1.
              </li>
              <li>
                🫡 <b>Відповідальність:</b> пунктуальність, мінімум переносів та
                замін.
              </li>
              <li>
                👩‍🎓 <b>Співбесіда:</b> онлайн.
              </li>
              <li>
                🏵 <b>Навантаження:</b> готовність працювати мінімум з 3
                групами.
              </li>
              <li>
                🐥 <b>Особисті якості:</b> терпіння до дітей, любов до навчання.
              </li>
              <li>
                🎨 <b>Креативність:</b> сучасний підхід до викладання.
              </li>
            </ul>

            <h3>Чому варто приєднатися до нас?</h3>
            <ul className="flex flex-col gap-4 pl-6">
              <li>Можливість працювати у зручному графіку.</li>
              <li>Підтримка від команди та адміністрації.</li>
              <li>Постійний розвиток та нові можливості.</li>
            </ul>

            <h3>Як зв’язатися?</h3>
            <p>
              📩 Пишіть у Telegram:{" "}
              <a href="https://t.me/drako_schule">@drako_schule</a>
            </p>

            <p>З теплом чекаємо на вас! 🫶</p>
          </div>
          {/* <div className="w-fit rounded-full bg-greenLight px-6 py-3.5 text-base font-bold text-greenDark">
            About platform
          </div> */}
        </motion.div>
        <CareerPost />
      </div>
    </section>
  );
};

export default CareerDecription;
