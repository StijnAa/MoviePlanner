import { UserContext } from "@/state/userContext";
import Image from "next/image";
import { useContext } from "react";

const WelcomeMsg = () => {
  const { user } = useContext(UserContext);

  const welcomeBackText = (
    <>
      <h2>Welkom terug,</h2>
      {user.photoUrl && (
        <div className="welkom-msg__image-container">
          <Image
            src={user.photoUrl}
            alt="user profile picture"
            width={200}
            height={200}
          />
        </div>
      )}
      <p>{user.name}</p>
    </>
  );

  const welcomeText = (
    <>
      <h2>Welkom,</h2>
      <p>Log in om te zien naar welke film je vrienden willen gaan.</p>
    </>
  );
  console.log(user);
  return (
    <div className="welkom-msg">
      <div className="welkom-msg__text">
        {user.name ? welcomeBackText : welcomeText}
      </div>
    </div>
  );
};

export default WelcomeMsg;
