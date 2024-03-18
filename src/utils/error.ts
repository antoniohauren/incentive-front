import type { AxiosError } from "axios";

const errorMessages: Record<string, string> = {
  password: "Senha inválida",
  default: "Algo deu errado...",
  USERNAME_IN_USE: "Usuário em uso...",
  EMAIL_IN_USE: "Email em uso...",
};

export function getErrorMessage(
  error: AxiosError<Record<string, string> | { message: string }>,
) {
  const msg = error.response?.data.message;

  if (msg) {
    return errorMessages[msg];
  }

  const key = Object.keys(error.response?.data || {}).pop() || "default";

  return errorMessages[key];
}
