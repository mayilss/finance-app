import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import { useForm } from "react-hook-form";
import type { LoginFormValues } from "../types";
import { useLogin } from "../useLogin";

export default function LoginForm() {
  const login = useLogin();
  const form = useForm<LoginFormValues>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await login(data);
    } catch (error) {
      form.setError("password", { message: error as string });
    }
  };
  return (
    <form
      className="mt-8 space-y-4 max-w-lg"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <Input
        control={form.control}
        name="username"
        label="Username"
        placeholder="Enter your username"
        autoFocus
        data-cy="username"
      />
      <Input
        control={form.control}
        name="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        autoComplete="current-password"
        data-cy="password"
      />
      <Button className="w-full" data-cy="login-button">
        Login
      </Button>
    </form>
  );
}
