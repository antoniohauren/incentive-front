import type {
  CreatePaymentResponse,
  PaymentRequest,
} from "@/models/payment-models";
import api from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

export function useApiPaymentUpdate(
  id?: string,
  onSuccess?: (data: CreatePaymentResponse) => void,
) {
  const endpoint = `/payment/${id}`;

  function mutationFn(data: PaymentRequest) {
    return api.patch<CreatePaymentResponse>(endpoint, data);
  }

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      return onSuccess?.(data.data);
    },
  });
}
