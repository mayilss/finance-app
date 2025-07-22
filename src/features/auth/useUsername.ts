import { useAppSelector } from "@app/hooks";
import { selectUsername } from "@features/auth/selectors";

export const useUsername = () => useAppSelector(selectUsername);
