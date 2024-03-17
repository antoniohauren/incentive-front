export type BalanceRequest = {
  name: string;
  description: string;
  startMoney: number;
};

export type BalanceResponse = {
  id: string;
  name: string;
  description: string;
  startMoney: number;
  currentMoney: number;
};

export type BalanceListResponse = {
  success: boolean;
  data: BalanceResponse[];
};

export type GetBalanceResponse = {
  success: boolean;
  data: BalanceResponse;
};

export type CreateBalanceResponse = {
  message: string; // TODO: create messages
  success: boolean;
};
