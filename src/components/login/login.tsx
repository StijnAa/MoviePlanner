import { RefObject, use, useEffect, useRef } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initFirebase from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

const AccountInfo = () => {
  const app = initFirebase();
  console.log(app);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (user) {
    return (
      <div className="">
        <div className="sign-in">
          welkom {user.displayName}
          <button
            className="sign-in__button"
            onClick={() => {
              auth.signOut();
            }}
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  };

  return (
    <div className="">
      <div className="sign-in">
        <button className="sign-in__button" onClick={signIn}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default AccountInfo;
