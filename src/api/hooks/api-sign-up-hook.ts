import type { SignUpRequest, SignUpResponse } from "@/models/auth-models";
import { publicApi } from "@/utils/api";
import { getErrorMessage } from "@/utils/error";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";

export function useApiSignUpHook(
  onSuccess?: (data: SignUpResponse) => void,
  onError?: (message: string) => void,
) {
  const endpoint = "/auth/sign-up";

  function mutationFn(data: SignUpRequest) {
    return publicApi.post<SignUpResponse>(endpoint, data);
  }

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      return onSuccess?.(data.data);
    },
    onError: (
      error: AxiosError<Record<string, string> | { message: string }>,
    ) => {
      const message = getErrorMessage(error);

      return onError?.(message);
    },
  });
}
