import { apiInstance } from "@/src/entities/gateway";
import ChatsList from "@/src/widgets/ChatsList";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Chats() {
  const response = await apiInstance.get("/chat/get-unique-chats");
  const userCookies = await cookies();
  const role = userCookies.get("role");

  if (role?.value !== "admin") {
    redirect("/404");
  }
  return (
    <>
      <ChatsList chatsData={response.data} />
    </>
  );
}
