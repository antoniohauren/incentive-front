import { useApiSignInHook } from "@/api/hooks/api-sign-in-hook";
import { SignInLayout } from "@/layouts/sign-in";
import type { SignInResponse } from "@/models/auth-models";
import { setToken } from "@/utils/token";
import { useNavigate } from "react-router-dom";

export function SignInPage() {
  const navigate = useNavigate();

  function onSuccess(response: SignInResponse) {
    setToken(response.data.token);

    navigate("/");
  }

  const { mutate } = useApiSignInHook(onSuccess);

  return <SignInLayout mutate={mutate} />;
}
