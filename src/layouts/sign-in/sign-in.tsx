import { SignInForm } from "@/components/sign-in-form";
import { Container, Stack, Typography } from "@mui/material";
import type { SignInLayoutProps } from ".";

export function SignInLayout({ mutate, isLoading }: SignInLayoutProps) {
  return (
    <Stack height="100vh" paddingTop="5rem">
      <Container>
        <Typography textAlign="center" fontSize="2.4rem">
          Entrar
        </Typography>

        <SignInForm mutate={mutate} isLoading={isLoading} />
      </Container>
    </Stack>
  );
}
