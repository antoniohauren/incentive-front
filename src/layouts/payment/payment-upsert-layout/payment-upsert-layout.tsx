import { PaymentCreateForm } from "@/components/payment-create-form";
import { BaseLayout } from "@/layouts/base-layout";
import type { PaymentUpsertLayoutProps } from ".";

export function PaymentUpsertLayout({
  title,
  mutate,
  balances,
  defaultValues,
  isUpdate,
}: PaymentUpsertLayoutProps) {
  return (
    <BaseLayout title={title}>
      <PaymentCreateForm
        mutate={mutate}
        balances={balances}
        isUpdate={isUpdate}
        defaultValues={defaultValues}
      />
    </BaseLayout>
  );
}
