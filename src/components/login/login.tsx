import { RefObject, use, useEffect, useRef } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initFirebase from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

const LogIn = () => {
  const app = initFirebase();
  console.log(app);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  };

  return (
    <div className="log-in">
      {user && (
        <button className="log-in__button" onClick={() => auth.signOut()}>
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
