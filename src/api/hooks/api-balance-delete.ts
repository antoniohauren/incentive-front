import api from "@/utils/api";
import { getErrorMessage } from "@/utils/error";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";

export function useApiBalanceDelete(
  onSuccess?: () => void,
  onError?: (message: string) => void,
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
    onError: (
      error: AxiosError<Record<string, string> | { message: string }>,
    ) => {
      const message = getErrorMessage(error);

      return onError?.(message);
    },
  });
}
