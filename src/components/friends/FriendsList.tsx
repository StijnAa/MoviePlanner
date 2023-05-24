import React, { useRef } from "react";
import FriendsItem from "./FriendsItem";
import { useContext } from "react";
import { UserContext } from "@/state/userContext";
import User from "@/types/user";
import Button from "../button/Button";

const FriendsList = () => {
  const { user, friends }: any = useContext(UserContext);
  const [clipboard, setClipboard] = React.useState(false);

  const copyToClipboard = () => {
    const copyText =
      "Hey, Zin om een keer mee te gaan naar de film? Met deze link kun je zien naar welke films ik wil gaan:";
    const currentHref = window.location.href + "/add/" + user.uid;
    const text = copyText + " " + currentHref;
    navigator.clipboard.writeText(text);
    setClipboard(true);
  };

  return (
    <div className="friends-list">
      <h3>Deel je profiel met je vrienden</h3>

      <Button
        text={clipboard ? "Gekopieerd!" : "Link kopiëren"}
        onClick={copyToClipboard}
      />

      {friends.length > 0 && (
        <>
          <h2 className="friends-list__title">Vrienden</h2>
          <ul className="friends-list__list">
            {friends.map((friend: User, i: number) => {
              return <FriendsItem {...friend} key={i} />;
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default FriendsList;
