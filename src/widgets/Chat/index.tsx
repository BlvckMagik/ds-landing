/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

import { apiInstance } from "@/src/entities/gateway";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface ChatMessage {
  _id: string;
  botResponse: string;
  userMessage: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  userId: number;
  username: string;
  __v: number;
}

const Chat = () => {
  const router = useRouter();
  const params = useParams();
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = () => {
      if (window.localStorage.getItem("role") !== "admin") {
        router.push("/404");
        return;
      }
    };

    const getChatHistory = async () => {
      try {
        const response = await apiInstance.get(`/chat/${params.userId}`);
        setChatHistory(response.data);
      } catch (error) {
        console.error("Error fetching chat history:", error);
        setError("Помилка завантаження історії чату");
      }
    };

    checkAuth();
    if (params.userId) {
      getChatHistory();
    }
  }, [params.userId, router]);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <section className="h-full p-12 text-gray-900 lg:p-24 dark:bg-gray-900 dark:bg-opacity-95">
      <h1 className="mb-16 text-center font-DelaGothicOne text-6xl font-bold text-gray-900">
        Chat
      </h1>
      <div className="relative mx-auto flex max-w-2xl flex-col-reverse gap-6">
        <Link
          href="/admin/chats"
          className="absolute left-0 top-[-50px] flex items-center gap-2"
        >
          <ArrowLeftIcon className="size-6" />
          <span>Назад</span>
        </Link>
        {chatHistory.map((message) => (
          <div key={message._id} className="flex flex-col gap-2">
            <p className="rounded-lg bg-blue-100 p-2 p-4 text-right dark:bg-blue-900 dark:text-white">
              {message.userMessage}
            </p>
            <p className="rounded-lg bg-green-100 p-2 p-4 text-left dark:bg-green-900 dark:text-white">
              {message.botResponse}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chat;
