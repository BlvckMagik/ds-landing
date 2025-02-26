import { apiInstance } from "@/src/entities/gateway";
import Chat from "@/src/widgets/Chat";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{
    userId: string;
  }>;
}

export default async function ChatPage({ params }: PageProps) {
  const { userId } = await params;

  const response = await apiInstance.get(`/chat/${userId}`);
  const userCookies = await cookies();
  const role = userCookies.get("role");

  if (role?.value !== "admin") {
    redirect("/404");
  }

  return (
    <>
      <Chat chatHistory={response.data} />
    </>
  );
}
