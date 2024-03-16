import { BalanceCreateForm } from "@/components/balance-create-form";
import { BaseLayout } from "@/layouts/base-layout";
import type { BalanceUpsertLayoutProps } from ".";

export function BalanceUpsertLayout({ mutate }: BalanceUpsertLayoutProps) {
  return (
    <BaseLayout title="Criar saldo">
      <BalanceCreateForm mutate={mutate} />
    </BaseLayout>
  );
}
