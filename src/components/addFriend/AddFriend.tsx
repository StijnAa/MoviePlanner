import User from "@/types/user";
import getUser from "@/utils/client/getUser";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "@/state/userContext";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Button from "../button/Button";
import SingleUser from "../singleUser/SingleUser";
import SingleUserLoading from "../singleUser/SingleUserLoading";

const AddFriend = ({ uid }: { uid?: string }) => {
  const [clipboard, setClipboard] = useState(false);
  const { user, addFriend }: any = useContext(UserContext);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const [newFriend, setNieuwFriend] = useState<User | undefined>(undefined);
  const [didSearch, setDidSearch] = useState<boolean>(false);

  const checkUser = async (uid: string) => {
    const friend = await getUser(uid);
    if (friend) {
      setNieuwFriend(friend as User);
    }
    setDidSearch(true);
  };

  useEffect(() => {
    if (uid) {
      checkUser(uid);
    }
  }, [uid]);

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  };

  const copyToClipboard = () => {
    const copyText =
      "Hey, Zin om een keer mee te gaan naar de film? Met deze link kun je zien naar welke films ik wil gaan:";
    const currentHref = window.location.href;
    const text = copyText + " " + currentHref;
    navigator.clipboard.writeText(text);
    setClipboard(true);
  };

  const navToHome = () => {
    window.location.href = "/";
  };

  const addFriendTitle = "Vriend toevoegen";
  const loadingTitle = "Loading...";
  const NotFoundTitle = "Helaas...";

  const logInMsg = "Log eerst in. Daarna kun je vrienden toevoegen.";
  const notFoundMsg = "We hebben deze gebruiker niet kunnen vinden.";
  const addFriendMsg =
    "Voeg deze vriend toe om te zien naar welke films hij/zij wil gaan.";
  const alreadyFriendMsg = "Deze gebruiker is al je vriend.";
  const shareLinkMsg =
    "Deel deze link met je vrienden, dan kunnen ze je toevoegen als vriend!";

  const backButtonText = "Terug";
  const loginButtonText = "Log in";
  const copytToClipButtonText = "Kopieer naar klembord";

  if (user.uid) {
    return (
      <div className="add-friend">
        <h2 className="add-friend__title">{addFriendTitle}</h2>
        {didSearch && !newFriend && (
          <div className="add-friend__container">
            <h3 className="add-friend__title">{NotFoundTitle}</h3>
            <p className="add-friend__msg">{notFoundMsg}</p>
            <Button onClick={navToHome} text={backButtonText} />
          </div>
        )}
        {didSearch && newFriend && (
          <div className="add-friend__container">
            <SingleUser user={newFriend} />
            {user.uid == newFriend.uid ? (
              <>
                <p className="add-friend__msg">{shareLinkMsg}</p>
                <Button
                  onClick={copyToClipboard}
                  text={copytToClipButtonText}
                />
              </>
            ) : user.friends.includes(newFriend.uid) ? (
              <>
                <p className="add-friend__msg">{alreadyFriendMsg}</p>
                <Button onClick={navToHome} text={backButtonText} />
              </>
            ) : (
              <>
                <p className="add-friend__msg">{addFriendMsg}</p>
                <Button
                  onClick={() => addFriend(newFriend.uid)}
                  text={addFriendTitle}
                />
              </>
            )}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="add-friend">
        <h2 className="add-friend__title">{addFriendTitle}</h2>
        <div className="add-friend__container">
          <SingleUserLoading />
          <p className="add-friend__msg">{logInMsg}</p>
          <Button onClick={signIn} text={loginButtonText} />
        </div>
      </div>
    );
  }
};

export default AddFriend;
