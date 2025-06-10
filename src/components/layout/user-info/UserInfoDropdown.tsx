import { useAuth0 } from "@auth0/auth0-react";
import Dropdown from "@components/ui/dropdown/Dropdown";
import Spinner from "@components/ui/Spinner";
import React from "react";
import { NavLink } from "react-router-dom";

export default function UserInfoDropdown() {
  const { user, logout, isLoading } = useAuth0();

  const handleLogout = React.useCallback(() => {
    logout({
      logoutParams: { returnTo: window.location.origin + "/login" },
    });
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-end">
        <Spinner size={20} />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <Dropdown>
      <Dropdown.Trigger className="space-x-2">
        <p className="text-text-primary dark:text-text-primary-dark">
          {user.nickname}
        </p>
        <img
          src={user.picture}
          alt={user.name}
          className="max-h-10 rounded-lg"
        />
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.MenuItem>
          <NavLink className="w-full text-end" to="/settings">
            Settings
          </NavLink>
        </Dropdown.MenuItem>
        <Dropdown.MenuItem>
          <p onClick={handleLogout} role="button">
            Logout
          </p>
        </Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
}
