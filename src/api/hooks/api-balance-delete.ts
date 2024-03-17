import api from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useApiBalanceDelete(
  onSuccess?: () => void,
  onError?: () => void,
) {
  const qc = useQueryClient();
  const endpoint = "/balance";

  function mutationFn(id: string) {
    return api.delete(`${endpoint}/${id}`);
  }

  return useMutation({
    mutationFn,
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["balance-list"],
      });
      onSuccess?.();
    },
    onError,
  });
}
