import { useApiSignInHook } from "@/api/hooks/api-sign-in-hook";
import { Toast } from "@/components/toast";
import { SignInLayout } from "@/layouts/sign-in";
import type { SignInResponse } from "@/models/auth-models";
import { setToken } from "@/utils/token";
import React from "react";
import { useNavigate } from "react-router-dom";

export function SignInPage() {
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  function onSuccess(response: SignInResponse) {
    setToken(response.data.token);

    navigate("/");
  }

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const { mutate } = useApiSignInHook(onSuccess, handleOpen);

  return (
    <>
      <Toast
        handleClose={handleClose}
        open={open}
        message="Credenciais inválidas"
        variant="error"
      />

      <SignInLayout mutate={mutate} />
    </>
  );
}
