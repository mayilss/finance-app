import { useAppDispatch } from "@app/hooks";
import { logout } from "@features/auth/slice";
import React from "react";

export const useLogout = () => {
  const dispatch = useAppDispatch();

  return React.useCallback(() => {
    dispatch(logout());
  }, []);
};
