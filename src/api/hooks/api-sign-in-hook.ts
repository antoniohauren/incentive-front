import type { SignInRequest, SignInResponse } from "@/models/auth-models";
import { publicApi } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

export function useApiSignInHook(onSuccess?: (data: SignInResponse) => void) {
  const endpoint = "/auth/sign-in";

  function mutationFn(data: SignInRequest) {
    return publicApi.post<SignInResponse>(endpoint, data);
  }

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      return onSuccess?.(data.data);
    },
  });
}
