import { useApiGetPaymentList } from "@/api/hooks/api-get-payment-list";
import { PaymentListLayout } from "@/layouts/payment/payment-list-layout";
import ProtectedPage from "./protected";

export default function PaymentsPage() {
  const { data } = useApiGetPaymentList();

  return (
    <ProtectedPage>
      <PaymentListLayout items={data || []} />
    </ProtectedPage>
  );
}
