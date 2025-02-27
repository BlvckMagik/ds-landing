/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useState } from "react";

import { Carousel, IconButton } from "@material-tailwind/react";
import { teamMembers } from "@/src/entities/constants/team";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Team: React.FC = () => {
  const [teamMemberIndex, setTeamMemberIndex] = useState(0);
  return (
    <section
      id="team"
      className="bg-gray-50 p-12 lg:p-24 2xl:px-[12vw] dark:bg-gray-900"
    >
      <motion.div className="flex flex-col items-center justify-between lg:flex-row">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.2,
                staggerChildren: 0.1, // Час між анімацією кожної літери
              },
            },
          }}
          viewport={{ once: true, amount: 0.5 }}
          initial="hidden"
          whileInView="visible"
          className="flex w-fit grow flex-col items-center justify-center gap-6 lg:items-start"
        >
          <div className="w-fit rounded-full bg-greenLight px-6 py-3.5 text-base font-bold text-greenDark">
            Про команду
          </div>
          <div className="w-fit text-center font-DelaGothicOne text-6xl font-bold text-gray-900 lg:w-10/12 lg:text-left">
            {teamMembers[teamMemberIndex].name}
          </div>
          <div className="w-4/5 text-center text-lg text-grayDark lg:text-left">
            {teamMembers[teamMemberIndex].description}
          </div>
          <div className="flex w-4/5 flex-wrap gap-2 text-center text-lg text-grayDark lg:text-left">
            {teamMembers[teamMemberIndex].subjects?.map((subject) => (
              <span
                key={subject.name}
                className="rounded-full bg-greenDark px-4 py-2 text-sm text-white"
              >
                {subject.name}
              </span>
            ))}
            {teamMembers[teamMemberIndex].studyFormats?.map((format) => (
              <span
                key={format}
                className="rounded-full bg-greenLight px-4 py-2 text-sm text-greenDark"
              >
                {format}
              </span>
            ))}
          </div>
          <Link
            href={`/team/${teamMembers[teamMemberIndex].id}`}
            className="w-fit rounded-full bg-orangeDark px-12 py-3.5 text-base font-bold text-white"
          >
            Додатково
          </Link>
        </motion.div>
        {/* @ts-ignore */}
        <Carousel
          id="carousel"
          loop
          className="mt-6 w-3/4 max-w-[640px] rounded-xl lg:mt-0"
          prevArrow={({ handlePrev }) =>
            teamMemberIndex !== 0 && (
              // @ts-ignore
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={() => {
                  handlePrev();
                  setTeamMemberIndex(teamMemberIndex - 1);
                }}
                className="!absolute left-4 top-2/4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </IconButton>
            )
          }
          nextArrow={({ handleNext }) =>
            teamMemberIndex !== teamMembers.length - 1 && (
              // @ts-ignore

              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={() => {
                  handleNext();
                  setTeamMemberIndex(teamMemberIndex + 1);
                }}
                className="!absolute !right-4 top-2/4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </IconButton>
            )
          }
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => {
                    setActiveIndex(i);
                    setTeamMemberIndex(i);
                  }}
                />
              ))}
            </div>
          )}
        >
          {teamMembers.map((member, i) => (
            <Image
              key={i}
              width={640}
              className="aspect-square object-cover"
              height={640}
              src={member.image}
              alt="main banner"
            />
          ))}
        </Carousel>
      </motion.div>
    </section>
  );
};

export default Team;
