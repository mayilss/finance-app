export interface AuthState {
  user: { username: string } | null;
  error: string | null;
}

export interface LoginFormValues {
  username: string;
  password: string;
}
