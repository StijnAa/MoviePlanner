import { getAuth } from "firebase/auth";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";

const WelcomeMsg = () => {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const loggedIn = (
    <>
      <h2>Welkom terug,</h2>
      {user?.photoURL && (
        <div className="welkom-msg__image-container">
          <Image
            src={user?.photoURL}
            alt="user profile picture"
            width={200}
            height={200}
          />
        </div>
      )}
      <p>{user?.displayName}</p>
    </>
  );

  const loggedOut = (
    <>
      <h2>Welkom,</h2>
      <p>Log in om te zien naar welke film je vrienden willen gaan.</p>
    </>
  );
  const loadingMsg = "Loading...";
  return (
    <div className="welkom-msg">
      <p className="welkom-msg__text">
        {user ? loggedIn : loading ? loadingMsg : loggedOut}
      </p>
    </div>
  );
};

export default WelcomeMsg;
