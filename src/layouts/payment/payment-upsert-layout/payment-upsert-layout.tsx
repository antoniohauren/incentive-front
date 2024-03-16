import { PaymentCreateForm } from "@/components/payment-create-form";
import { BaseLayout } from "@/layouts/base-layout";
import type { PaymentUpsertLayoutProps } from ".";

export function PaymentUpsertLayout({
  mutate,
  balances,
}: PaymentUpsertLayoutProps) {
  return (
    <BaseLayout title="Criar pagamento">
      <PaymentCreateForm mutate={mutate} balances={balances} />
    </BaseLayout>
  );
}
