import { useApiGetBalanceList } from "@/api/hooks/api-get-balance-list";
import { useApiPaymentCreate } from "@/api/hooks/api-payment-create";
import { Toast } from "@/components/toast";
import { PaymentUpsertLayout } from "@/layouts/payment/payment-upsert-layout";
import type { SelectOption } from "@/utils/types";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProtectedPage from "./protected";

export default function PaymentsCreatePage() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const navigate = useNavigate();

  function onSuccess() {
    navigate("/pagamentos");
  }

  const { mutate } = useApiPaymentCreate(onSuccess, handleOpen);
  const { data } = useApiGetBalanceList();

  function handleOpen(msg: string) {
    setMessage(msg);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const balances: SelectOption[] =
    data?.map(({ name, id }) => {
      return {
        label: name,
        value: id,
      };
    }) || [];

  return (
    <ProtectedPage>
      <Toast
        handleClose={handleClose}
        open={open}
        message={message}
        variant="error"
      />

      <PaymentUpsertLayout
        title="Criar pagamento"
        mutate={mutate}
        balances={balances}
      />
    </ProtectedPage>
  );
}
