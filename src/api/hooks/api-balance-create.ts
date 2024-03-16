import type {
  BalanceRequest,
  CreateBalanceResponse,
} from "@/models/balance-models";
import api from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

export function useApiBalanceCreate(
  onSuccess?: (data: CreateBalanceResponse) => void,
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
  });
}
