import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import FriendsList from "./FriendsList";
import LogIn from "./login";
import WelcomeMsg from "./WelcomeMsg";

const AccountInfo = () => {
  return (
    <div className="account-info">
      <div className="account-info__container">
        <WelcomeMsg />
        <LogIn />
        {/* <FriendsList /> */}
      </div>
    </div>
  );
};

export default AccountInfo;
