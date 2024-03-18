import type { SignUpRequest } from "@/models/auth-models";

export type SignUpFormProps = {
  mutate: (data: SignUpRequest) => void;
  isLoading: boolean;
};
