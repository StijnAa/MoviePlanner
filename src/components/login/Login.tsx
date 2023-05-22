import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from "../button/Button";

const LogIn = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  const signIn = async () => {
    await signInWithPopup(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
  };

  return (
    <>
      {!user && !loading ? (
        <Button text="Log in" onClick={signIn} />
      ) : (
        <Button text="Log uit" onClick={signOut} />
      )}
    </>
  );
};

export default LogIn;
