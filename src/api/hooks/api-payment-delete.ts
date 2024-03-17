import api from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useApiPaymentDelete(
  onSuccess?: () => void,
  onError?: () => void,
) {
  const qc = useQueryClient();
  const endpoint = "/payment";

  function mutationFn(id: string) {
    return api.delete(`${endpoint}/${id}`);
  }

  return useMutation({
    mutationFn,
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["payment-list"],
      });
      onSuccess?.();
    },
    onError,
  });
}
