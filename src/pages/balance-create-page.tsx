import { useApiBalanceCreate } from "@/api/hooks/api-balance-create";
import { BalanceUpsertLayout } from "@/layouts/balance/balance-upsert-layout";
import { useNavigate } from "react-router-dom";
import ProtectedPage from "./protected";

export default function BalanceCreatePage() {
  const navigate = useNavigate();

  function onSuccess() {
    navigate("/saldos");
  }

  const { mutate } = useApiBalanceCreate(onSuccess);

  return (
    <ProtectedPage>
      <BalanceUpsertLayout mutate={mutate} />
    </ProtectedPage>
  );
}
