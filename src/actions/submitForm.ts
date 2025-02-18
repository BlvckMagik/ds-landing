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
    console.log("Starting teacher form submission");

    for (const [key, value] of formData.entries()) {
      console.log(
        `FormData entry - ${key}:`,
        value instanceof File
          ? `File: ${value.name}, size: ${value.size}`
          : value,
      );
    }

    formData.append("type", "teacher");

    console.log("Sending request to server...");

    const response = await apiInstance.post(
      "/telegram/send-message",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    console.log("Server response:", response.status);
    return { status: response.status };
  } catch (error) {
    console.error("Detailed error in submitTeacherFormAction:", {
      error,
      // @ts-ignore
      errorMessage: error.message,
      // @ts-ignore
      errorStack: error.stack,
    });
    throw error;
  }
}
