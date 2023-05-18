import User from "@/types/user";
import createUser from "@/utils/client/createUser";
import getUser from "@/utils/client/getUser";
import { createContext, useReducer, useContext } from "react";
import userReducer, { initialState } from "./userReducer";

const UserContext = createContext({
  ...initialState,
  setUser: async (authUser: any) => {},
  removeUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const setUser = async (authUser: any) => {
    let userData = await getUser(authUser.uid);

    if (!userData) {
      userData = await createUser(authUser);
    }

    dispatch({
      type: "SET_USER",
      payload: {
        user: userData,
      },
    });
  };

  const removeUser = () => {
    dispatch({
      type: "SET_USER",
      payload: {
        user: initialState.user,
      },
    });
  };

  const value = {
    user: state.user,
    setUser,
    removeUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within UserContext");
  }

  return context;
};

export default useUser;
