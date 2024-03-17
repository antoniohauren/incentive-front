import type { GetBalanceResponse } from "@/models/balance-models";
import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export function useApiGetBalance(id?: string) {
  const endpoint = `/balance/${id}`;

  function queryFn() {
    return api.get<GetBalanceResponse>(endpoint);
  }

  return useQuery({
    queryKey: [`balance-${id}`],
    queryFn,
    select: ({ data }) => {
      return data.data;
    },
  });
}
