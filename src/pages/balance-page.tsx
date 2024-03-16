import { userApiBalanceDelete } from "@/api/hooks/api-balance-delete";
import { useApiGetBalanceList } from "@/api/hooks/api-get-balance-list";
import { BalanceListLayout } from "@/layouts/balance/balance-list-layout";
import ProtectedPage from "./protected";

export default function BalancesPage() {
  const { data } = useApiGetBalanceList();
  const { mutate } = userApiBalanceDelete(console.log, console.log);

  return (
    <ProtectedPage>
      <BalanceListLayout items={data || []} onDelete={mutate} />
    </ProtectedPage>
  );
}
