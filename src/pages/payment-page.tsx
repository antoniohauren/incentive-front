import { useApiGetPaymentList } from "@/api/hooks/api-get-payment-list";
import { useApiPaymentDelete } from "@/api/hooks/api-payment-delete";
import { PaymentListLayout } from "@/layouts/payment/payment-list-layout";
import ProtectedPage from "./protected";

export default function PaymentsPage() {
  const { data } = useApiGetPaymentList();
  const { mutate: onDelete } = useApiPaymentDelete();

  return (
    <ProtectedPage>
      <PaymentListLayout items={data || []} onDelete={onDelete} />
    </ProtectedPage>
  );
}
