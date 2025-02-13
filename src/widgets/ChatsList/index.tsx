/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { apiInstance } from "@/src/entities/gateway";
import Link from "next/link";

interface ChatData {
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  username: string;
  updatedAt: string;
}

const ChatsList = () => {
  const router = useRouter();
  const [chatsData, setChatsData] = useState<ChatData[]>([]);

  useEffect(() => {
    const checkAuth = () => {
      if (window.localStorage.getItem("role") !== "admin") {
        router.push("/404");
        return;
      }
    };

    const getChats = async () => {
      try {
        const response = await apiInstance.get("/chat/get-unique-chats");
        setChatsData(response.data);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    checkAuth();
    getChats();
  }, [router]);

  return (
    <section
      id="faq"
      className="min-h-[calc(100vh-83px-262px)] p-12 text-gray-900 lg:p-24 dark:bg-gray-900 dark:bg-opacity-95"
    >
      <h1 className="mb-16 text-center font-DelaGothicOne text-6xl font-bold text-gray-900">
        Chats
      </h1>
      <div className="relative grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
        {chatsData
          .sort(
            (a, b) =>
              new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
          )
          .map((chat) => (
            <Link
              href={`/admin/chats/${chat.userId}`}
              key={chat._id}
              className="flex flex-col items-center justify-center gap-2 rounded-xl bg-gray-100 p-14 dark:bg-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <div>
                {chat.firstName} {chat.lastName}
              </div>
              <a
                href={`https://t.me/${chat.username}`}
                target="_blank"
                className="text-blue-500"
              >
                {chat.username}
              </a>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default ChatsList;
