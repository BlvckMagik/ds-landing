"use client";

import { teamMembers } from "@/src/entities/constants/team";
import Image from "next/image";
const TeamMemberInfo: React.FC<{ teamMemberId: string }> = ({
  teamMemberId,
}) => {
  const teamMember = teamMembers.find(
    (member) => member.id === parseInt(teamMemberId),
  );

  if (!teamMember) {
    return <div>Team member not found</div>;
  }

  return (
    <section className="min-h-[calc(100vh-83px-262px)] bg-gray-50 p-8 md:p-14 lg:p-24 dark:bg-gray-900">
      <div className="flex justify-start gap-32">
        <Image
          src={teamMember.image}
          alt={teamMember.name}
          width={teamMember.image.width}
          height={teamMember.image.height}
          className="max-w-[40%] rounded-full"
        />
        <div className="flex flex-col gap-6">
          <h1 className="w-full text-left font-DelaGothicOne text-6xl font-bold text-gray-900">
            {teamMember.name}
          </h1>
          <div className="w-fit rounded-full border border-indigo-500 px-4 py-2 text-gray-900">
            {teamMember.role}
          </div>
          <p className="text-gray-900">{teamMember.description}</p>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberInfo;
