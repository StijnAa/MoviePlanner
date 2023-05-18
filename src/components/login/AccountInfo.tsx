import FriendsList from "./FriendsList";
import LogIn from "./login";
import WelcomeMsg from "./WelcomeMsg";

const AccountInfo = () => {
  return (
    <div className="account-info">
      <div className="account-info__container">
        <WelcomeMsg />
        <FriendsList />
        <LogIn />
      </div>
    </div>
  );
};

export default AccountInfo;
