import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "@components/ui/Spinner";

export default function UserInfo() {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <Spinner />;
  }

  if (!user) {
    return (
      <p className="text-text-primary dark:text-text-primary-dark text-2xl text-center">
        No Info
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-bg dark:bg-bg-dark text-text-primary dark:text-text-primary-dark">
      <img src={user.picture} alt={user.name} className="rounded-lg" />
      <h3 className="text-2xl">{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}
