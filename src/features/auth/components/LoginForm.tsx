import { useAppDispatch } from "@app/hooks";
import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { LoginFormValues } from "../types";
import { loginAsync } from "../slice";

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const form = useForm<LoginFormValues>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await dispatch(loginAsync(data)).unwrap();
      navigate("/");
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
