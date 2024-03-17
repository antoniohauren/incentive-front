import { useApiGetBalanceList } from "@/api/hooks/api-get-balance-list";
import { useApiGetPayment } from "@/api/hooks/api-get-payment";
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

  const { data: balanceList } = useApiGetBalanceList();
  const { data, isLoading } = useApiGetPayment(id);

  const balances: SelectOption[] =
    balanceList?.map(({ name, id }) => {
      return {
        label: name,
        value: id,
      };
    }) || [];

  if (isLoading) {
    return null;
  }

  return (
    <ProtectedPage>
      <PaymentUpsertLayout
        title="Editar pagamento"
        mutate={mutate}
        balances={balances}
        isUpdate={true}
        defaultValues={{
          balanceId: data?.balanceId || "",
          description: data?.description || "",
          name: data?.name || "",
          value: data?.value || 0,
        }}
      />
    </ProtectedPage>
  );
}
