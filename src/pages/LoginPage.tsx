import Logo from "@components/ui/Logo";
import LoginForm from "@features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center space-y-6 px-3 md:px-8 py-16 bg-bg dark:bg-bg-dark min-h-screen">
      <Logo />
      <LoginForm />
    </div>
  );
}
