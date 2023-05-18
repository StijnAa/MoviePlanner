import User from "@/types/user";
import createUser from "@/utils/client/createUser";
import getUser from "@/utils/client/getUser";
import { createContext, useReducer, useContext } from "react";
import userReducer, { initialState } from "./userReducer";

export const UserContext = createContext({
  ...initialState,
});
