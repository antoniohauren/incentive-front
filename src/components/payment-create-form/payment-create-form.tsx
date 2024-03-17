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

export function PaymentCreateForm({
  mutate,
  balances,
  defaultValues,
  isUpdate,
}: PaymentCreateFormProps) {
  const [balanceId, setBalanceId] = React.useState<string>("");

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
          defaultValue={defaultValues?.balanceId}
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
        <Button variant="outlined" color="primary">
          Cancelar
        </Button>

        <Button type="submit" variant="contained" color="primary">
          Salvar
        </Button>
      </Stack>
    </Box>
  );
}
