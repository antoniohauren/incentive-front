import type { PaymentRequest } from "@/models/payment-models";
import type { SelectOption } from "@/utils/types";

export type PaymentCreateFormProps = {
  mutate: (data: PaymentRequest) => void;
  balances: SelectOption[];
  isUpdate?: boolean;
  defaultValues?: PaymentRequest;
};
