/** @format */

import { useReducer } from "react";
import { AuthProfileContext } from "./AuthProfileContext";
import { authProfilreducer, profile_init_state } from "./AuthProfileReducer";

export default function AuthProfileProvider({ children }) {
  const [state, dispatch] = useReducer(authProfilreducer, profile_init_state);

  return (
    <AuthProfileContext.Provider
      value={{
        ...state,
        dispatch
      }}
    >
      {children}
    </AuthProfileContext.Provider>
  );
}
