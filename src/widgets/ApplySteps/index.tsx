"use client";

const ApplySteps: React.FC = () => {
  return (
    <section className="p-8 md:p-14 lg:p-24 dark:bg-gray-900 dark:bg-opacity-95">
      <h1 className="mb-8 w-full text-center font-DelaGothicOne text-4xl font-bold text-gray-900 lg:mb-16 lg:text-6xl">
        Як розпочати навчання
      </h1>
      <div className="mt-4 flex h-[900px] items-center justify-center gap-12 lg:mt-0 lg:h-auto lg:flex-col lg:items-start lg:justify-between">
        <div className="flex h-full items-center justify-between gap-12 lg:h-auto lg:w-full lg:flex-col lg:items-start">
          <div className="hidden w-full justify-between gap-16 lg:flex">
            <div className="flex max-w-64 flex-col justify-center gap-2">
              <h2 className="text-left font-DelaGothicOne text-2xl text-gray-900">
                Залишити заявку
              </h2>
              <p className="text-left text-gray-500">
                На нашому сайті або у асистента
              </p>
            </div>
            <div className="flex max-w-64 flex-col justify-center gap-2">
              <h2 className="text-center font-DelaGothicOne text-2xl text-gray-900">
                Тестуємо рівень знань
              </h2>
              <p className="text-center text-gray-500">
                Якщо Ви його не знаєте
              </p>
            </div>
            <div className="flex max-w-64 flex-col justify-center gap-2">
              <h2 className="text-right font-DelaGothicOne text-2xl text-gray-900">
                Починаємо нашу співпрацю! :)
              </h2>
            </div>
          </div>
          <div className="flex h-full flex-col items-center justify-between gap-4 py-10 lg:w-full lg:flex-row lg:px-16 lg:py-0">
            <div className="h-6 w-6 rounded-full bg-orangeDark"></div>
            <div className="w-1 flex-grow bg-orangeDark lg:h-1 lg:w-auto"></div>
            <div className="h-6 w-6 rounded-full bg-orangeDark"></div>
            <div className="w-1 flex-grow bg-orangeDark lg:h-1 lg:w-auto"></div>
            <div className="h-6 w-6 rounded-full bg-orangeDark"></div>
            <div className="w-1 flex-grow bg-orangeDark lg:h-1 lg:w-auto"></div>
            <div className="h-6 w-6 rounded-full bg-orangeDark"></div>
            <div className="w-1 flex-grow bg-orangeDark lg:h-1 lg:w-auto"></div>
            <div className="h-6 w-6 rounded-full bg-orangeDark"></div>
          </div>
          <div className="flex hidden w-full justify-around px-16 lg:flex">
            <div className="flex max-w-64 flex-col justify-center gap-2">
              <h2 className="text-center font-DelaGothicOne text-2xl text-gray-900">
                Ми зв&apos;язуємось з вами
              </h2>
              <p className="text-center text-gray-500">
                Підбираємо групу (якщо знаєте рівень), узгоджуємо час
              </p>
            </div>
            <div className="flex max-w-64 flex-col justify-center gap-2">
              <h2 className="text-center font-DelaGothicOne text-2xl text-gray-900">
                Проходимо пробний урок
              </h2>
              <p className="text-center text-gray-500">
                Задля знайомства з групою та постійним викладачем
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-full flex-col items-center justify-between gap-12 lg:hidden">
          <div className="flex max-w-64 flex-col justify-center gap-2">
            <h2 className="text-left font-DelaGothicOne text-2xl text-gray-900">
              Залишити заявку
            </h2>
            <p className="text-left text-gray-500">
              На нашому сайті або у асистента
            </p>
          </div>
          <div className="flex max-w-64 flex-col justify-center gap-2">
            <h2 className="text-left font-DelaGothicOne text-2xl text-gray-900">
              Ми зв&apos;язуємось з вами
            </h2>
            <p className="text-left text-gray-500">
              Підбираємо групу (якщо знаєте рівень), узгоджуємо час
            </p>
          </div>
          <div className="flex max-w-64 flex-col justify-center gap-2">
            <h2 className="text-left font-DelaGothicOne text-2xl text-gray-900">
              Тестуємо рівень знань
            </h2>
            <p className="text-left text-gray-500">Якщо Ви його не знаєте</p>
          </div>
          <div className="flex max-w-64 flex-col justify-center gap-2">
            <h2 className="text-left font-DelaGothicOne text-2xl text-gray-900">
              Проходимо пробний урок
            </h2>
            <p className="text-left text-gray-500">
              Задля знайомства з групою та постійним викладачем
            </p>
          </div>
          <div className="flex max-w-64 flex-col justify-center gap-2">
            <h2 className="text-left font-DelaGothicOne text-2xl text-gray-900">
              Починаємо нашу співпрацю! :)
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplySteps;
