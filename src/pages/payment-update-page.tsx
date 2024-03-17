import { useApiGetBalanceList } from "@/api/hooks/api-get-balance-list";
import { useApiPaymentUpdate } from "@/api/hooks/api-payment-update";
import { PaymentUpsertLayout } from "@/layouts/payment/payment-upsert-layout";
import type { SelectOption } from "@/utils/types";
import { useNavigate, useParams } from "react-router-dom";
import ProtectedPage from "./protected";

export default function PaymentsUpdatePage() {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  function onSuccess() {
    navigate("/pagamentos");
  }

  const { mutate } = useApiPaymentUpdate(id, onSuccess);

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
