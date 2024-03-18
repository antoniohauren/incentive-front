import type {
  CreatePaymentResponse,
  PaymentRequest,
} from "@/models/payment-models";
import api from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useApiPaymentUpdate(
  id?: string,
  onSuccess?: (data: CreatePaymentResponse) => void,
) {
  const qc = useQueryClient();
  const endpoint = `/payment/${id}`;

  function mutationFn(data: PaymentRequest) {
    return api.patch<CreatePaymentResponse>(endpoint, data);
  }

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      qc.invalidateQueries({
        queryKey: [`payment-${id}`],
      });
      return onSuccess?.(data.data);
    },
  });
}
