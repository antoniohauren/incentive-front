export type SignInRequest = {
  username: string;
  password: string;
};

export type SignInResponse = {
  success: boolean;
  data: {
    token: string;
  };
};

export type SignUpRequest = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export type SignUpResponse = SignInResponse;
