import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";
import type { BalanceCreateFormProps } from ".";
import { ButtonLink } from "../button-link";

export function BalanceCreateForm({
  mutate,
  defaultValues,
  isUpdate,
  isLoading,
}: BalanceCreateFormProps) {
  const descriptionRef = React.useRef<HTMLInputElement>(null);
  const nameRef = React.useRef<HTMLInputElement>(null);
  const startMoneyRef = React.useRef<HTMLInputElement>(null);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    const description = descriptionRef.current?.value;
    const name = nameRef.current?.value;
    const startMoney = Number(startMoneyRef.current?.value);

    if (!description || !name || !startMoney) {
      return console.log("Required Fields!");
    }

    mutate({
      description,
      name,
      startMoney,
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
        defaultValue={defaultValues?.name}
      />

      <TextField
        inputRef={descriptionRef}
        style={{ width: "100%" }}
        type="text"
        label="Descrição"
        variant="outlined"
        required
        defaultValue={defaultValues?.description}
      />

      <TextField
        inputRef={startMoneyRef}
        style={{ width: "100%" }}
        type="number"
        label="Valor"
        variant="outlined"
        required
        defaultValue={defaultValues?.startMoney}
        disabled={isUpdate}
      />

      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        marginTop={"auto"}
      >
        <ButtonLink
          to="/saldos"
          variant="outlined"
          color="primary"
          disabled={isLoading}
        >
          Cancelar
        </ButtonLink>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading}
        >
          Salvar
        </Button>
      </Stack>
    </Box>
  );
}
