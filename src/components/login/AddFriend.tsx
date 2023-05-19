import User from "@/types/user";
import getUser from "@/utils/client/getUser";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "@/state/userContext";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { on } from "events";

const AddFriendContainer = ({
  title,
  msg,
  newFriend,
  onClick,
  buttonText,
}: {
  title?: string;
  msg?: string;
  newFriend?: User;
  onClick?: any;
  buttonText?: string;
}) => {
  return (
    <div className="add-friend">
      <div className="add-friend__container">
        <h2 className="add-friend__title">{title}</h2>
        {newFriend && (
          <div className="add-friend__image-container">
            <Image
              src={newFriend.photoUrl}
              alt="user profile picture"
              width={200}
              height={200}
            />
          </div>
        )}
        {newFriend && (
          <span className="add-friend__name">{newFriend?.name}</span>
        )}
        {msg && <p className="add-friend__msg">{msg}</p>}
      </div>
      {buttonText && (
        <div className="add-friend__button-container">
          <button
            className="add-friend__button"
            onClick={() => {
              onClick();
            }}
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
};

const AddFriend = ({ uid }: { uid: string }) => {
  const [clipboard, setClipboard] = useState(false);
  const { user, addFriend }: any = useContext(UserContext);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const [newFriend, setNieuwFriend] = useState<User | "notFound" | undefined>(
    undefined
  );

  const checkUser = async () => {
    const friend = await getUser(uid);
    if (!friend) {
      setNieuwFriend("notFound");
    }
    if (friend) {
      setNieuwFriend(friend as User);
    }
  };

  useEffect(() => {
    if (uid) {
      checkUser();
    }
  }, [uid]);

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  };

  const copyToClipboard = () => {
    const currentHref = window.location.href;
    navigator.clipboard.writeText(currentHref);
    setClipboard(true);
  };

  const navToHome = () => {
    window.location.href = "/";
  };

  let msg = undefined;
  let buttonText = undefined;
  let title = undefined;
  let onClick = () => {
    return;
  };

  if (!user.uid) {
    title = "Vriend toevoegen";
    msg = "Log eerst in. Daarna kun je vrienden toevoegen.";
    buttonText = "Log in";
    onClick = signIn;
  } else if (newFriend === undefined) {
    msg = "Loading...";
  } else if (newFriend === "notFound") {
    title = "Helaas...";
    msg = "We hebben deze gebruiker niet kunnen vinden.";
    buttonText = "Terug";
    onClick = navToHome;
  } else if (newFriend.uid === user.uid) {
    title = "Vrienden toevoegen";
    msg =
      "Deel deze link met je vrienden, dan kunnen ze je toevoegen als vriend!";
    buttonText = "Kopieer naar klembord";
    onClick = copyToClipboard;
  } else if (user.friends.includes(newFriend.uid)) {
    title = "Vriend toevoegen";
    msg = "Deze gebruiker is al je vriend.";
    buttonText = "Terug";
  } else {
    title = "Vriend toevoegen";
    msg =
      "Voeg deze vriend toe. Dan kun je zien naar welke films hij/zij wil gaan.";
    buttonText = "Voeg toe";
    onClick = addFriend(uid);
  }

  if (clipboard) {
    buttonText = "Gekopieerd!";
  }

  if (newFriend === undefined || newFriend === "notFound")
    return (
      <AddFriendContainer
        title={title}
        msg={msg}
        onClick={onClick}
        buttonText={buttonText}
      />
    );

  return (
    <AddFriendContainer
      title={title}
      msg={msg}
      newFriend={newFriend}
      onClick={onClick}
      buttonText={buttonText}
    />
  );
};

export default AddFriend;
