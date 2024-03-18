import { useApiBalanceDelete } from "@/api/hooks/api-balance-delete";
import { useApiGetBalanceList } from "@/api/hooks/api-get-balance-list";
import { Toast } from "@/components/toast";
import { BalanceListLayout } from "@/layouts/balance/balance-list-layout";
import React from "react";
import ProtectedPage from "./protected";

export default function BalancesPage() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const { data } = useApiGetBalanceList();
  const { mutate } = useApiBalanceDelete(console.log, handleOpen);

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

      <BalanceListLayout items={data || []} onDelete={mutate} />
    </ProtectedPage>
  );
}
