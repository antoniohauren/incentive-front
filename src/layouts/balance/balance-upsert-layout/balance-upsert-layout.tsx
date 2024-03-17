import { BalanceCreateForm } from "@/components/balance-create-form";
import { BaseLayout } from "@/layouts/base-layout";
import type { BalanceUpsertLayoutProps } from ".";

export function BalanceUpsertLayout({
  title,
  mutate,
  defaultValues,
  isUpdate,
}: BalanceUpsertLayoutProps) {
  return (
    <BaseLayout title={title}>
      <BalanceCreateForm
        mutate={mutate}
        isUpdate={isUpdate}
        defaultValues={defaultValues}
      />
    </BaseLayout>
  );
}
