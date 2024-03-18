import type {
  BalanceRequest,
  CreateBalanceResponse,
} from "@/models/balance-models";
import api from "@/utils/api";
import { getErrorMessage } from "@/utils/error";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";

export function useApiBalanceCreate(
  onSuccess?: (data: CreateBalanceResponse) => void,
  onError?: (message: string) => void,
) {
  const endpoint = "/balance/create";

  function mutationFn(data: BalanceRequest) {
    return api.post<CreateBalanceResponse>(endpoint, data);
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
