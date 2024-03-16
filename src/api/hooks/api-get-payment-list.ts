import type { PaymentListResponse } from "@/models/payment-models";
import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export function useApiGetPaymentList() {
  const endpoint = "/payment";

  function queryFn() {
    return api.get<PaymentListResponse>(endpoint);
  }

  return useQuery({
    queryKey: ["payment-list"],
    queryFn,
    select: ({ data }) => {
      return data.data;
    },
  });
}
