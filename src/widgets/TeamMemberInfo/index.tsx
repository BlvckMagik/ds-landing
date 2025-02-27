"use client";

import { teamMembers } from "@/src/entities/constants/team";
import Image from "next/image";
import {
  BuildingLibraryIcon,
  LanguageIcon,
  BriefcaseIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import useMediaQuery from "@/src/entities/hooks/useIsMobile";

const TeamMemberInfo: React.FC<{ teamMemberId: string }> = ({
  teamMemberId,
}) => {
  const matches = useMediaQuery(960);

  const teamMember = teamMembers.find(
    (member) => member.id === parseInt(teamMemberId),
  );

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const zoom = useTransform(scrollYProgress, [0.6, 1], [1, 0]);

  if (!teamMember) {
    return <div>Team member not found</div>;
  }

  return (
    <section className="min-h-[calc(100vh-83px-262px)] bg-gray-50 p-8 md:p-14 lg:p-24 2xl:px-[12vw] dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:justify-start lg:gap-32">
        <motion.div
          ref={containerRef}
          className="flex h-full w-full max-w-[100%] items-center justify-center"
          style={{ scale: matches ? zoom : 1 }}
        >
          <Image
            src={teamMember.image}
            alt={teamMember.name}
            width={teamMember.image.width}
            height={teamMember.image.height}
            className="block aspect-square max-w-[100%] rounded-full object-cover md:max-w-[60%] lg:h-full lg:w-full lg:max-w-none"
          />
        </motion.div>

        <div className="flex flex-col gap-6">
          <h1 className="w-full text-center font-DelaGothicOne text-6xl font-bold text-gray-900 lg:text-left">
            {teamMember.name}
          </h1>
          <div className="mx-auto w-fit rounded-full border border-indigo-500 px-4 py-2 text-gray-900 lg:mx-0">
            {teamMember.role}
          </div>
          {/* <p className="text-gray-900">{teamMember.description}</p> */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <BuildingLibraryIcon className="size-5 min-w-5 text-gray-900" />
              <p className="text-gray-900">{`${teamMember.degree}, ${teamMember.specialty}`}</p>
            </div>
            {teamMember.subjects.length > 0 &&
              teamMember.subjects.map((subject) => (
                <div key={subject.name} className="flex items-center gap-4">
                  <LanguageIcon className="size-5 min-w-5 text-gray-900" />
                  <p className="text-gray-900">{`${subject.name}, ${subject.level}`}</p>
                </div>
              ))}
            <div className="flex items-center gap-4">
              <BriefcaseIcon className="size-5 min-w-5 text-gray-900" />
              <p className="text-gray-900">{`Викладає ${teamMember.totalExperience}`}</p>
            </div>
            <div className="flex items-center gap-4">
              <UserCircleIcon className="size-5 min-w-5 text-gray-900" />
              <p className="text-gray-900">{teamMember.additionalInfo}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberInfo;
