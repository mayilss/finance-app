import { useAuth0 } from "@auth0/auth0-react";
import Button from "@components/ui/Button";
import React from "react";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = React.useCallback(() => {
    loginWithRedirect();
  }, []);

  return <Button onClick={handleLogin}>Log In</Button>;
}
