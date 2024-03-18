import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import type { PaymentCreateFormProps } from ".";
import { ButtonLink } from "../button-link";

export function PaymentCreateForm({
  mutate,
  balances,
  defaultValues,
  isUpdate,
  isLoading,
}: PaymentCreateFormProps) {
  const [balanceId, setBalanceId] = React.useState<string>(
    defaultValues?.balanceId || ""
  );

  const descriptionRef = React.useRef<HTMLInputElement>(null);
  const nameRef = React.useRef<HTMLInputElement>(null);
  const valueRef = React.useRef<HTMLInputElement>(null);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    const description = descriptionRef.current?.value;
    const name = nameRef.current?.value;
    const value = Number(valueRef.current?.value);

    if (!balanceId || !description || !name || !value) {
      return console.log("Required Fields!");
    }

    mutate({
      balanceId,
      description,
      name,
      value,
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
        inputRef={valueRef}
        style={{ width: "100%" }}
        type="number"
        label="Valor"
        variant="outlined"
        required
        defaultValue={defaultValues?.value}
        disabled={isUpdate}
      />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Selecione o saldo a utilizar
        </InputLabel>

        <Select
          labelId="demo-simple-select-label"
          style={{ width: "100%" }}
          label={"Selecione o saldo a utilizar"}
          onChange={(id) => setBalanceId(id.target.value)}
          value={balanceId}
          required
          disabled={isUpdate}
        >
          {balances.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        marginTop={"auto"}
      >
        <ButtonLink
          to="/pagamentos"
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
