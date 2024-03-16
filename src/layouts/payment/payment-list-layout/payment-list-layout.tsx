import { ButtonLink } from "@/components/button-link";
import { PaymentTable } from "@/components/payment-table";
import { BaseLayout } from "@/layouts/base-layout";
import type { PaymentListLayoutProps } from ".";

export function PaymentListLayout({ items }: PaymentListLayoutProps) {
  const hasItems = items.length > 0;

  return (
    <BaseLayout
      title="Pagamentos"
      button={
        hasItems ? (
          <ButtonLink to="novo" variant="contained" color="primary">
            Criar
          </ButtonLink>
        ) : null
      }
    >
      <PaymentTable items={items || []} />
    </BaseLayout>
  );
}
