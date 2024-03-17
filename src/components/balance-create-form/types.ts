import type { BalanceRequest } from "@/models/balance-models";

export type BalanceCreateFormProps = {
  mutate: (data: BalanceRequest) => void;
  isUpdate?: boolean;
  defaultValues?: BalanceRequest;
};
