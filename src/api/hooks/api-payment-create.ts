import type {
  CreatePaymentResponse,
  PaymentRequest,
} from "@/models/payment-models";
import api from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

export function useApiPaymentCreate(
  onSuccess?: (data: CreatePaymentResponse) => void,
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
  });
}
