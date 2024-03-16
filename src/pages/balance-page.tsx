import { useApiGetBalanceList } from "@/api/hooks/api-get-balance-list";
import { BalanceListLayout } from "@/layouts/balance/balance-list-layout";
import ProtectedPage from "./protected";

export default function BalancesPage() {
  const { data } = useApiGetBalanceList();

  return (
    <ProtectedPage>
      <BalanceListLayout items={data || []} />
    </ProtectedPage>
  );
}
