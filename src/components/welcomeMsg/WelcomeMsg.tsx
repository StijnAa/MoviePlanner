import { UserContext } from "@/state/userContext";
import { useContext } from "react";
import SingleUser from "../singleUser/SingleUser";

const WelcomeMsg = () => {
  const { user }: any = useContext(UserContext);

  return (
    <div className="welcome-msg">
      <h2 className="welcome-msg__title">
        {user.uid ? "Welkom terug!" : "Welkom,"}
      </h2>
      {user.uid ? (
        <SingleUser user={user} />
      ) : (
        <p className="welcome-msg__paragraph">
          Log in om te zien naar welke film je vrienden willen gaan.
        </p>
      )}
    </div>
  );
};

export default WelcomeMsg;
