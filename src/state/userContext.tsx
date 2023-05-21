import { createContext } from "react";
import { initialState } from "./userReducer";

export const UserContext = createContext({
  ...initialState,
});
