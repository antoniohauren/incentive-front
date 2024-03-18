import type { AxiosError } from "axios";

const errorMessages: Record<string, string> = {
  password: "Senha inválida",
  default: "Algo deu errado.",
  startMoney: "O valor deve ser positivo.",
  value: "O valor deve ser positivo.",

  USERNAME_IN_USE: "Usuário em uso.",
  EMAIL_IN_USE: "Email em uso.",
  INSUFICIENT_BALANCE: "Saldo insuficiente.",
  CANT_DELETE_BALANCE_WITH_PAYMENTS:
    "Você não pode apagar um saldo com pagamentos.",
  FAILED_TO_CREATE_USER: "Erro ao criar usuário",
};

export function getErrorMessage(
  error: AxiosError<Record<string, string> | { message: string }>,
) {
  console.log(error.response?.data);

  const msg = error.response?.data.message;

  if (msg) {
    return errorMessages[msg];
  }

  const key = Object.keys(error.response?.data || {}).pop() || "default";

  return errorMessages[key];
}
