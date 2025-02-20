/* eslint-disable @typescript-eslint/ban-ts-comment */
"use server";

import { apiInstance } from "@/src/entities/gateway";

export async function submitStudentFormAction(formData: FormData) {
  const formProps = Object.fromEntries(formData);

  const response = await apiInstance.post("/telegram/send-message", {
    ...formProps,
    type: "student",
  });

  return { status: response.status };
}

export async function submitTeacherFormAction(formData: FormData) {
  try {
    formData.append("type", "teacher");

    const response = await apiInstance.post(
      "/telegram/send-message",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return { status: response.status };
  } catch (error) {
    throw error;
  }
}
