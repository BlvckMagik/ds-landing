import { apiInstance } from "@/src/entities/gateway";
import Chat from "@/src/widgets/Chat";
import Footer from "@/src/widgets/Footer";
import Header from "@/src/widgets/Header";
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
      <Header />
      <Chat chatHistory={response.data} />
      <Footer />
    </>
  );
}
