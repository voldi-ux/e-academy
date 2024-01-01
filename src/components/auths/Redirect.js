/** @format */

import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext/useAuth";

//automatically redirects the user to the home page when they have been authenticated
export default function RedirectComponent({ children }) {
  const auth = useAuth();
  if (auth.authenticated) {
    return <Navigate to={"/"} />;
  }

  return <>{children}</>;
}
