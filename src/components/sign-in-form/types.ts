import type { SignInRequest } from "@/models/auth-models";

export type SignInFormProps = {
  mutate: (data: SignInRequest) => void;
  isLoading: boolean;
};
