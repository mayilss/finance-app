import { useAppSelector } from "@app/hooks";
import { selectIsAuthenticated } from "@features/auth/selectors";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children?: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  if (isAuthenticated) return children;
  return <Navigate to="/login" replace />;
}
