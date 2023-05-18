import "../styles/style.scss";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { createContext, useEffect, useReducer } from "react";
import { getAuth, UserInfo } from "firebase/auth";
import initFirebase from "@/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import getUser from "@/utils/client/getUser";
import createUser from "@/utils/client/createUser";
import userReducer, { initialState } from "@/state/userReducer";
import { UserContext } from "@/state/userContext";

const getUserData = async (authUser: UserInfo) => {
  console.log(authUser);
  let userData = await getUser(authUser.uid);
  if (!userData) {
    userData = await createUser(authUser);
  }
  return userData;
};

export default function App({ Component, pageProps }: AppProps) {
  initFirebase();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  const [state, dispatch] = useReducer(userReducer, initialState);

  const setUser = async (userData: any) => {
    console.log("setUser", userData);

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
    ...state,
    setUser,
    removeUser,
  };

  useEffect(() => {
    if (user) {
      getUserData(user).then((userData) => {
        setUser(userData);
      });
    } else {
      removeUser();
    }
  }, [user]);

  return (
    <UserContext.Provider value={value}>
      <Component {...pageProps} />
      <Analytics />
    </UserContext.Provider>
  );
}
