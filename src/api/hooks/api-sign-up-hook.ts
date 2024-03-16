import type { SignUpRequest, SignUpResponse } from "@/models/auth-models";
import { publicApi } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

export function useApiSignUpHook(onSuccess?: (data: SignUpResponse) => void) {
  const endpoint = "/auth/sign-up";

  function mutationFn(data: SignUpRequest) {
    return publicApi.post<SignUpResponse>(endpoint, data);
  }

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      return onSuccess?.(data.data);
    },
  });
}
