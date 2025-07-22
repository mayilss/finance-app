import Dropdown from "@components/ui/dropdown/Dropdown";
import { useLogout } from "@features/auth/useLogout";
import { useUsername } from "@features/auth/useUsername";

export default function UserInfoDropdown() {
  const username = useUsername();
  const logout = useLogout();

  return (
    <Dropdown>
      <Dropdown.Trigger className="space-x-2">
        <p className="text-text-primary dark:text-text-primary-dark">
          {username}
        </p>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.MenuItem>
          <p onClick={logout} role="button">
            Logout
          </p>
        </Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
}
