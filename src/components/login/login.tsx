import { RefObject, use, useEffect, useRef } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initFirebase from "../../firebase/firebase";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import useUser from "@/state/userContext";
import User from "@/types/user";

const LogIn = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  };
  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="log-in">
      {user && (
        <button className="log-in__button" onClick={() => signOut()}>
          Sign out
        </button>
      )}
      {!user && !loading && (
        <button className="log-in__button" onClick={() => signIn()}>
          Sign In
        </button>
      )}
      {loading && <div className="log-in__button">Loading...</div>}
    </div>
  );
};

export default LogIn;
