import { useApiBalanceCreate } from "@/api/hooks/api-balance-create";
import { Toast } from "@/components/toast";
import { BalanceUpsertLayout } from "@/layouts/balance/balance-upsert-layout";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProtectedPage from "./protected";

export default function BalanceCreatePage() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const navigate = useNavigate();

  const { mutate, isPending } = useApiBalanceCreate(onSuccess, handleOpen);

  function onSuccess() {
    navigate("/saldos", {
      state: {
        success: true,
      },
    });
  }

  function handleOpen(msg: string) {
    setMessage(msg);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <ProtectedPage>
      <Toast
        handleClose={handleClose}
        open={open}
        message={message}
        variant="error"
      />

      <BalanceUpsertLayout
        title="Criar saldo"
        mutate={mutate}
        isLoading={isPending}
      />
    </ProtectedPage>
  );
}
