import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";
import type { SignUpFormProps } from ".";
import { ButtonLink } from "../button-link";

export function SignUpForm({ mutate, isLoading }: SignUpFormProps) {
  const usernameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const nameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;

    if (!username || !password || !email || !name) {
      return console.log("Required fields!");
    }

    mutate({
      username,
      password,
      email,
      name,
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
        inputRef={nameRef}
        style={{ width: "100%" }}
        type="text"
        label="Nome"
        variant="outlined"
        required
      />

      <TextField
        inputRef={emailRef}
        style={{ width: "100%" }}
        type="email"
        label="Email"
        variant="outlined"
        required
      />

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
          to="/auth/entrar"
          variant="outlined"
          color="primary"
          disabled={isLoading}
        >
          Entrar
        </ButtonLink>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading}
        >
          Cadastrar
        </Button>
      </Stack>
    </Box>
  );
}
