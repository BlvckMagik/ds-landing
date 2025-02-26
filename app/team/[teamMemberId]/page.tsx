import TeamMemberInfo from "@/src/widgets/TeamMemberInfo";

interface PageProps {
  params: Promise<{
    teamMemberId: string;
  }>;
}

export default async function ChatPage({ params }: PageProps) {
  const { teamMemberId } = await params;

  return (
    <>
      <TeamMemberInfo teamMemberId={teamMemberId} />
    </>
  );
}
