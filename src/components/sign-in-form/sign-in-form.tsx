import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";
import type { SignInFormProps } from ".";
import { ButtonLink } from "../button-link";

export function SignInForm({ mutate, isLoading }: SignInFormProps) {
  const usernameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username || !password) {
      return console.log("Required fields!");
    }

    mutate({
      username,
      password,
    });
  }

  return (
    <Box
      component={"form"}
      style={{
        flexGrow: 1,
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
      }}
      onSubmit={onSubmit}
    >
      <TextField
        inputRef={usernameRef}
        style={{ width: "100%" }}
        type="text"
        label="Usuário"
        variant="outlined"
        required
      />

      <TextField
        inputRef={passwordRef}
        style={{ width: "100%" }}
        type="password"
        label="Senha"
        variant="outlined"
        required
      />

      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        marginTop={"auto"}
      >
        <ButtonLink
          to="/auth/cadastrar"
          variant="outlined"
          color="primary"
          disabled={isLoading}
        >
          Cadastrar
        </ButtonLink>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading}
        >
          Entrar
        </Button>
      </Stack>
    </Box>
  );
}
