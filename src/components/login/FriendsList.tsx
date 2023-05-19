import React, { useRef } from "react";
import FriendsItem from "./FriendsItem";
import { useContext } from "react";
import { UserContext } from "@/state/userContext";
import User from "@/types/user";
import Link from "next/link";
import { useEffect } from "react";

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
      <h3>Deel deze link met je vrienden</h3>
      <div className="log-in">
        <button
          className="log-in__button"
          onClick={() => {
            copyLink();
          }}
        >
          {clipboard ? "Gekopieerd!" : "Link kopiëren"}
        </button>{" "}
      </div>

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
