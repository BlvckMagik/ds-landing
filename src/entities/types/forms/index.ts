export type FormStatus = "idle" | "sending" | "success" | "error";

export interface IFormError {
  phoneError: string | null;
  errorText: string | null;
}

export interface IFormData {
  name: string;
  phone: string;
  subject?: string;
  message?: string;
  type: "student" | "teacher";
  cv?: File;
}
