import { useAppDispatch, useAppSelector } from "@app/hooks";
import Dropdown from "@components/ui/dropdown/Dropdown";
import { selectUsername } from "@features/auth/selectors";
import { logout } from "@features/auth/slice";
import React from "react";

export default function UserInfoDropdown() {
  const dispatch = useAppDispatch();
  const username = useAppSelector(selectUsername);

  const handleLogout = React.useCallback(() => {
    dispatch(logout());
  }, []);

  return (
    <Dropdown>
      <Dropdown.Trigger className="space-x-2">
        <p className="text-text-primary dark:text-text-primary-dark">
          {username}
        </p>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.MenuItem>
          <p onClick={handleLogout} role="button">
            Logout
          </p>
        </Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
}
