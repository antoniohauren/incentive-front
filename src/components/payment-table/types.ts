import type { PaymentResponse } from "@/models/payment-models";

export type PaymentTableProps = {
  items: PaymentResponse[];
  onDelete: (id: string) => void;
};
