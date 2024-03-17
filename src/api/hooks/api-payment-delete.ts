import api from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

export function useApiPaymentDelete(
  onSuccess?: () => void,
  onError?: () => void,
) {
  const endpoint = "/payment";

  function mutationFn(id: string) {
    return api.delete(`${endpoint}/${id}`);
  }

  return useMutation({
    mutationFn,
    onSuccess,
    onError,
  });
}
