export type PaymentRequest = {
  name: string;
  description: string;
  value: number;
  balanceId: string;
};

export type PaymentResponse = {
  id: string;
  name: string;
  description: string;
  value: number;
  balanceId: string;
};

export type PaymentListResponse = {
  success: boolean;
  data: PaymentResponse[];
};

export type GetPaymentResponse = {
  success: boolean;
  data: PaymentResponse;
};

export type CreatePaymentResponse = {
  message: string; // TODO: create messages
  success: boolean;
};
