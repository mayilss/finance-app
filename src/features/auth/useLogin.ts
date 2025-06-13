import { useAppDispatch } from "@app/hooks";
import { loginAsync } from "./slice";
import type { LoginFormValues } from "./types";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return async (data: LoginFormValues) => {
    await dispatch(loginAsync(data)).unwrap();
    navigate("/");
  };
};
