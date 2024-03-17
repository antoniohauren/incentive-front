import type {
  BalanceRequest,
  CreateBalanceResponse,
} from "@/models/balance-models";
import api from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

export function useApiBalanceUpdate(
  id?: string,
  onSuccess?: (data: CreateBalanceResponse) => void,
) {
  const endpoint = `/balance/${id}`;

  function mutationFn(data: BalanceRequest) {
    return api.patch<CreateBalanceResponse>(endpoint, data);
  }

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      return onSuccess?.(data.data);
    },
  });
}
