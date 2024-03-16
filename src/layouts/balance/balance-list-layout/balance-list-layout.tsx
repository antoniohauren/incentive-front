import { BalanceTable } from "@/components/balance-table";
import { ButtonLink } from "@/components/button-link";
import { BaseLayout } from "@/layouts/base-layout";
import type { BalanceListLayoutProps } from ".";

export function BalanceListLayout({ items }: BalanceListLayoutProps) {
  const hasItems = items.length > 0;

  return (
    <BaseLayout
      title="Saldos"
      button={
        hasItems ? (
          <ButtonLink variant="contained" color="primary" to="novo">
            Criar
          </ButtonLink>
        ) : null
      }
    >
      <BalanceTable items={items} />
    </BaseLayout>
  );
}
