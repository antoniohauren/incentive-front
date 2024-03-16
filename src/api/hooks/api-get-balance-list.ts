import type { BalanceListResponse } from "@/models/balance-models";
import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export function useApiGetBalanceList() {
  const endpoint = "/balance";

  function queryFn() {
    return api.get<BalanceListResponse>(endpoint);
  }

  return useQuery({
    queryKey: ["balance-list"],
    queryFn,
    select: ({ data }) => {
      return data.data;
    },
  });
}
