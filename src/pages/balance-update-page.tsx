import { useApiBalanceUpdate } from "@/api/hooks/api-balance-update";
import { useApiGetBalance } from "@/api/hooks/api-get-balance";
import { BalanceUpsertLayout } from "@/layouts/balance/balance-upsert-layout";
import { useNavigate, useParams } from "react-router-dom";
import ProtectedPage from "./protected";

export default function BalanceUpdatePage() {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  function onSuccess() {
    navigate("/saldos");
  }

  const { data, isLoading } = useApiGetBalance(id);
  const { mutate } = useApiBalanceUpdate(id, onSuccess);

  if (isLoading) {
    return null;
  }

  return (
    <ProtectedPage>
      <BalanceUpsertLayout
        title="Editar saldo"
        mutate={mutate}
        isUpdate={true}
        defaultValues={{
          description: data?.description || "",
          name: data?.name || "",
          startMoney: data?.startMoney || 0,
        }}
      />
    </ProtectedPage>
  );
}
