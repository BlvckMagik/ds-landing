/* eslint-disable @typescript-eslint/ban-ts-comment */
"use server";

import { apiInstance } from "@/src/entities/gateway";
import { IFormData } from "@/src/entities/types/forms";

export async function submitStudentFormAction(
  formData: FormData,
): Promise<{ status: number }> {
  const formProps = Object.fromEntries(formData) as Partial<IFormData>;

  const response = await apiInstance.post("/telegram/send-message", {
    ...formProps,
    type: "student",
  });

  return { status: response.status };
}

export async function submitTeacherFormAction(
  formData: FormData,
): Promise<{ status: number }> {
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
