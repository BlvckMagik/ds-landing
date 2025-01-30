"use client";

import axios from "axios";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

import FormBannerMobile from "@/public/career/teather-apply-pic-mob.webp";
import {
  Button,
  Description,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
} from "@headlessui/react";
import FormBanner from "@/public/career/teather-apply-pic.webp";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  subjectsList,
  ukrainianPhoneRegex,
} from "@/src/entities/constants/applyForm";
import FileInputButton from "@/src/components/FileInputButton";

const TeacherApplyForm: React.FC = () => {
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const formRef = useRef<HTMLFormElement>(null);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");

    const formData = new FormData(e.currentTarget);
    const formProps = Object.fromEntries(formData);
    const phone = formProps.number as string;

    if (!ukrainianPhoneRegex.test(phone)) {
      setPhoneError(
        "Будь ласка, введіть коректний номер телефону у форматі +380 XX XXX XX XX",
      );
      setFormStatus("idle");
      return;
    }

    setPhoneError(null);

    const message = `
      <b>Новий відгук на вакансію:</b>
  - Ім'я: ${formProps.name}
  - Телефон: ${formProps.number}
  - Предмет: ${formProps.subject}
  - Додаткова інформація: ${formProps.description || "не вказано"}
    `;

    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_ID}/sendMessage`,
        {
          chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
          // chat_id: "336998130",
          text: message,
          parse_mode: "HTML",
        },
      );

      let response2 = null;
      if (selectedFile) {
        const documentFormData = new FormData();
        documentFormData.append(
          "chat_id",
          process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || "",
        );
        documentFormData.append("document", selectedFile);

        response2 = await axios.post(
          `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_ID}/sendDocument`,
          documentFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );
      }

      if (
        response.status === 200 &&
        (response2?.status === 200 || response2 === null)
      ) {
        setFormStatus("success");
        formRef.current?.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
      setFormStatus("error");
    }
  };

  return (
    <section id="applyForm" className="p-12 lg:p-24 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <Image
          width={933}
          className="hidden w-[43vw] lg:block"
          height={601}
          src={FormBanner}
          alt="main banner"
        />
        <Image
          width={335}
          className="mb-6 block lg:hidden"
          height={280}
          src={FormBannerMobile}
          alt="main banner mobile"
        />
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
          className="flex w-fit grow flex-col items-center justify-center gap-6 lg:items-center"
        >
          <form ref={formRef} id="applyForm" onSubmit={submitForm}>
            <Fieldset
              form="applyForm"
              className="space-y-6 rounded-xl bg-gray-100 p-6 sm:p-10 dark:bg-white/5"
            >
              {formStatus !== "success" ? (
                <>
                  <Legend className="text-base/7 font-semibold dark:text-white">
                    Подавай заявку на роботу викладачем
                  </Legend>
                  <Field>
                    <Label className="text-sm/6 font-medium dark:text-white">
                      Ваше ім&apos;я
                      <span className="text-red-900 dark:text-red-900">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      className="mt-3 block w-full rounded-lg border-none px-3 py-1.5 text-sm/6 focus:outline-none dark:bg-white/5 dark:text-white"
                      required
                    />
                  </Field>
                  <Field>
                    <Label className="text-sm/6 font-medium dark:text-white">
                      Ваш номер телефону
                      <span className="text-red-900 dark:text-red-900">*</span>
                    </Label>
                    <Input
                      id="number"
                      name="number"
                      type="tel"
                      placeholder="380 XX XXX XX XX"
                      autoComplete="tel"
                      className={`mt-3 block w-full rounded-lg border-none px-3 py-1.5 text-sm/6 focus:outline-none dark:bg-white/5 dark:text-white ${
                        phoneError ? "border-pink-500 text-pink-600" : ""
                      }`}
                      required
                    />
                    {phoneError && (
                      <p className="mt-2 max-w-96 text-sm text-pink-600">
                        {phoneError}
                      </p>
                    )}
                  </Field>
                  <Field>
                    <Label className="text-sm/6 font-medium dark:text-white">
                      Предмет
                      <span className="text-red-900 dark:text-red-900">*</span>
                    </Label>
                    <div className="relative">
                      <Select
                        id="subject"
                        name="subject"
                        className="mt-3 block w-full appearance-none rounded-lg border-none px-3 py-1.5 text-sm/6 focus:outline-none dark:bg-white/5 dark:text-white"
                        required
                      >
                        {subjectsList.map((subject) => (
                          <option key={subject} className="dark:text-black">
                            {subject}
                          </option>
                        ))}
                      </Select>
                      <ChevronDownIcon
                        className="group pointer-events-none absolute right-2.5 top-2.5 size-4 fill-white/60"
                        aria-hidden="true"
                      />
                    </div>
                  </Field>
                  <Field>
                    <Label className="text-sm/6 font-medium dark:text-white">
                      Додаткова інформація
                    </Label>
                    <Description className="max-w-96 text-sm/6 dark:text-white/50">
                      Напишіть коли Вам було б зручно займатись, Ваш рівень та
                      кількість разів занять в тиждень
                    </Description>
                    <Textarea
                      id="description"
                      name="description"
                      className="mt-3 block w-full resize-none rounded-lg border-none px-3 py-1.5 text-sm/6 focus:outline-none dark:bg-white/5 dark:text-white"
                      rows={3}
                    />
                  </Field>
                  <Field>
                    <FileInputButton onFileSelect={setSelectedFile} />
                  </Field>
                  <Button
                    type="submit"
                    className="mx-auto block items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white"
                  >
                    {formStatus === "sending" ? (
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          className="inline h-8 w-8 animate-spin fill-gray-600 text-gray-200 dark:fill-gray-300 dark:text-gray-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      "Записатись"
                    )}
                  </Button>
                  {formStatus === "error" && (
                    <p className="mt-4 text-center text-red-500">
                      Сталася помилка. Спробуйте ще раз.
                    </p>
                  )}
                </>
              ) : (
                <div className="flex max-w-96 flex-col items-center gap-2 text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-20"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <p>
                    Заявка успішно надіслана. Наш менеджер зв&apos;яжеться з
                    Вами найближчим часом
                  </p>
                </div>
              )}
            </Fieldset>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default TeacherApplyForm;
