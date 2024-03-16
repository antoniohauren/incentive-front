import { SignUpForm } from "@/components/sign-up-form";
import { Container, Stack, Typography } from "@mui/material";
import type { SignUpLayoutProps } from ".";

export function SignUpLayout({ mutate }: SignUpLayoutProps) {
  return (
    <Stack height="100vh" paddingTop="5rem">
      <Container>
        <Typography textAlign="center" fontSize="2.4rem">
          Cadastrar
        </Typography>

        <SignUpForm mutate={mutate} />
      </Container>
    </Stack>
  );
}
