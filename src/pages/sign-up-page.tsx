import { useApiSignUpHook } from "@/api/hooks/api-sign-up-hook";
import { Toast } from "@/components/toast";
import { SignUpLayout } from "@/layouts/sign-up";
import type { SignUpResponse } from "@/models/auth-models";
import { setToken } from "@/utils/token";
import React from "react";
import { useNavigate } from "react-router-dom";

export function SignUpPage() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const navigate = useNavigate();

  const { mutate, isPending } = useApiSignUpHook(onSuccess, handleOpen);

  function onSuccess(response: SignUpResponse) {
    setToken(response.data.token);

    navigate("/");
  }

  function handleOpen(msg: string) {
    setMessage(msg);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Toast
        handleClose={handleClose}
        open={open}
        message={message}
        variant="error"
      />

      <SignUpLayout mutate={mutate} isLoading={isPending} />
    </>
  );
}
