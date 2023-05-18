import React from "react";
import FriendsItem from "./FriendsItem";
import { useContext } from "react";
import { UserContext } from "@/state/userContext";
import User from "@/types/user";

const FriendsList = () => {
  const { friends }: any = useContext(UserContext);

  if (friends.length == 0) {
    return null;
  }

  return (
    <div className="friends-list">
      <h2 className="friends-list__title">Friends</h2>
      <ul className="friends-list__list">
        {friends.map((friend: User, i: number) => {
          return <FriendsItem {...friend} key={i} />;
        })}
      </ul>
    </div>
  );
};

export default FriendsList;
