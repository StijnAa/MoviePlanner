import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import LogIn from "./login";
import WelcomeMsg from "./WelcomeMsg";

const AccountInfo = () => {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  return (
    <div className="account-info">
      <div className="account-info__container">
        <WelcomeMsg />
        <LogIn />
        {/* <div className="friends-list">
        <h1 className="friends-list__title">friends</h1>
        <ul className="friends-list__list">
          <li className="friend-item">
            <img
              src="https://via.placeholder.com/150"
              alt="placeholder"
              className="friend-item__image"
            />
            <h1 className="friend-item__name">friend</h1>
            <div className="friend-item__delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="friend-item__delete-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </li>
        </ul> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default AccountInfo;
