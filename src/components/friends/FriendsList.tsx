import React, { useRef } from "react";
import FriendsItem from "./FriendsItem";
import { useContext } from "react";
import { UserContext } from "@/state/userContext";
import User from "@/types/user";
import Button from "../button/Button";

const FriendsList = () => {
  const { user, friends }: any = useContext(UserContext);
  const [clipboard, setClipboard] = React.useState(false);

  const copyLink = () => {
    const url = window.location.href + "/add/" + user.uid;
    navigator.clipboard.writeText(url);
    setClipboard(true);
  };

  return (
    <div className="friends-list">
      <h3>Deel deze je profiel met je vrienden</h3>

      <Button
        text={clipboard ? "Gekopieerd!" : "Link kopiëren"}
        onClick={copyLink}
      />

      {friends.length > 0 && (
        <>
          <h2 className="friends-list__title">Friends</h2>
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
