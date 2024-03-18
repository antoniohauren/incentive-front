import type {
  CreatePaymentResponse,
  PaymentRequest,
} from "@/models/payment-models";
import api from "@/utils/api";
import { getErrorMessage } from "@/utils/error";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";

export function useApiPaymentCreate(
  onSuccess?: (data: CreatePaymentResponse) => void,
  onError?: (message: string) => void,
) {
  const endpoint = "/payment/create";

  function mutationFn(data: PaymentRequest) {
    return api.post<CreatePaymentResponse>(endpoint, data);
  }

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      return onSuccess?.(data.data);
    },
    onError: (
      error: AxiosError<Record<string, string> | { message: string }>,
    ) => {
      const message = getErrorMessage(error);

      return onError?.(message);
    },
  });
}
