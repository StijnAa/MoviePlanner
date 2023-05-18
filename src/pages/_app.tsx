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
import getFriendsData from "@/utils/client/getFriendsData";
import getOrCreateUser from "@/utils/client/getOrCreateUser";
import addMovieToWatchlistFirebase from "@/utils/client/toggleMovieInFirebase";
import toggleMovieInFirebase from "@/utils/client/toggleMovieInFirebase";

export default function App({ Component, pageProps }: AppProps) {
  initFirebase();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  const [state, dispatch] = useReducer(userReducer, initialState);

  const setUser = async (user: UserInfo) => {
    const userData = await getOrCreateUser(user);
    const friendsData = await getFriendsData(userData.friends);

    dispatch({
      type: "SET_USER",
      payload: {
        user: userData,
        friends: friendsData,
      },
    });
  };

  const removeUser = () => {
    dispatch({
      type: "SET_USER",
      payload: {
        user: initialState.user,
        friends: initialState.friends,
      },
    });
  };

  const toggleMovie = async (
    list: "watchlist" | "skiplist",
    movieId: number
  ) => {
    toggleMovieInFirebase(state.user.uid, list, movieId);
    dispatch({
      type: "TOGGLE_MOVIE",
      payload: {
        movie: movieId,
        list: list,
      },
    });
  };

  const value = {
    ...state,
    setUser,
    removeUser,
    toggleMovie,
  };

  useEffect(() => {
    if (user) {
      setUser(user);
    } else {
      removeUser();
    }
  }, [user]);
  console.log(state.user);
  return (
    <UserContext.Provider value={value}>
      <Component {...pageProps} />
      <Analytics />
    </UserContext.Provider>
  );
}
