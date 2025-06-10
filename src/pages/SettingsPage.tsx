import ThemeForm from "@features/settings/components/ThemeForm";
import UserInfo from "@features/settings/components/UserInfo";

export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark">
        Settings
      </h1>
      <UserInfo />
      <ThemeForm />
    </div>
  );
}
