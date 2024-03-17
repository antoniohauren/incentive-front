import { useApiBalanceUpdate } from "@/api/hooks/api-balance-update";
import { BalanceUpsertLayout } from "@/layouts/balance/balance-upsert-layout";
import { useNavigate, useParams } from "react-router-dom";
import ProtectedPage from "./protected";

export default function BalanceUpdatePage() {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  function onSuccess() {
    navigate("/saldos");
  }

  const { mutate } = useApiBalanceUpdate(id, onSuccess);

  return (
    <ProtectedPage>
      <BalanceUpsertLayout mutate={mutate} />
    </ProtectedPage>
  );
}
