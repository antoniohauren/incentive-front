import { useApiGetBalanceList } from "@/api/hooks/api-get-balance-list";
import { useApiPaymentCreate } from "@/api/hooks/api-payment-create";
import { PaymentUpsertLayout } from "@/layouts/payment/payment-upsert-layout";
import type { SelectOption } from "@/utils/types";
import { useNavigate } from "react-router-dom";
import ProtectedPage from "./protected";

export default function PaymentsCreatePage() {
  const navigate = useNavigate();

  function onSuccess() {
    navigate("/pagamentos");
  }

  const { mutate } = useApiPaymentCreate(onSuccess);
  const { data } = useApiGetBalanceList();

  const balances: SelectOption[] =
    data?.map(({ name, id }) => {
      return {
        label: name,
        value: id,
      };
    }) || [];

  return (
    <ProtectedPage>
      <PaymentUpsertLayout mutate={mutate} balances={balances} />
    </ProtectedPage>
  );
}
