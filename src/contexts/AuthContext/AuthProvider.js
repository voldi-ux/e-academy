/** @format */

import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer, initialState } from "./AuthReducer";

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
    return <AuthContext.Provider value={{
        ...state,
        dispatch
  }}>{children}</AuthContext.Provider>;
}
