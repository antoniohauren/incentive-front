import type { BalanceResponse } from "@/models/balance-models";

export type BalanceTableProps = {
  items: BalanceResponse[];
  onDelete: (id: string) => void;
};
