import { useApiSignUpHook } from "@/api/hooks/api-sign-up-hook";
import { SignUpLayout } from "@/layouts/sign-up";
import type { SignUpResponse } from "@/models/auth-models";
import { setToken } from "@/utils/token";
import { useNavigate } from "react-router-dom";

export function SignUpPage() {
  const navigate = useNavigate();

  function onSuccess(response: SignUpResponse) {
    setToken(response.data.token);

    navigate("/");
  }

  const { mutate } = useApiSignUpHook(onSuccess);

  return <SignUpLayout mutate={mutate} />;
}
