import api from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

export function useApiBalanceDelete(
  onSuccess?: () => void,
  onError?: () => void,
) {
  const endpoint = "/balance";

  function mutationFn(id: string) {
    return api.delete(`${endpoint}/${id}`);
  }

  return useMutation({
    mutationFn,
    onSuccess,
    onError,
  });
}
