import type {
  BalanceRequest,
  CreateBalanceResponse,
} from "@/models/balance-models";
import api from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useApiBalanceUpdate(
  id?: string,
  onSuccess?: (data: CreateBalanceResponse) => void,
) {
  const qc = useQueryClient();
  const endpoint = `/balance/${id}`;

  function mutationFn(data: BalanceRequest) {
    return api.patch<CreateBalanceResponse>(endpoint, data);
  }

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      qc.invalidateQueries({
        queryKey: [`balance-${id}`],
      });
      return onSuccess?.(data.data);
    },
  });
}
