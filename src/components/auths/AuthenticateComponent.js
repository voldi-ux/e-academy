/** @format */

import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext/useAuth";

export default function AuthenticateComponent({ children }) {
  const auth = useAuth();
  if (!auth.authenticated) {
    return <Navigate to={"/auth/login"} />;
  }

  return <>{children}</>;
}
