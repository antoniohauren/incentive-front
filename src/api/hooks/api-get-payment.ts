import type { GetPaymentResponse } from "@/models/payment-models";
import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export function useApiGetPayment(id?: string) {
  const endpoint = `/payment/${id}`;

  function queryFn() {
    return api.get<GetPaymentResponse>(endpoint);
  }

  return useQuery({
    queryKey: [`payment-${id}`],
    queryFn,
    select: ({ data }) => {
      return data.data;
    },
  });
}
