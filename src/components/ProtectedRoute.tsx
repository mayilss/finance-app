import { useCheckAuth } from "@features/auth/useCheckAuth";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children?: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = useCheckAuth();

  if (isAuthenticated) return children;
  return <Navigate to="/login" replace />;
}
