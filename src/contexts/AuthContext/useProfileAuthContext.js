import { useContext } from "react";
import { AuthProfileContext } from "./AuthProfileContext";


export function useProfileAuthcontext() { 
    return useContext(AuthProfileContext)
}