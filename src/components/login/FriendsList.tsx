import Image from "next/image";
import React, { useEffect, useState } from "react";
import FriendsItem from "./FriendsItem";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "@/firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import User from "@/types/user";
import getUser from "@/utils/client/getUser";
import createUser from "@/utils/client/createUser";

const getFriedsData = async (friends: string[]) => {
  const friendsData: User[] = [];
  for (const friend of friends) {
    const userData = await getUser(friend);
    if (userData) {
      friendsData.push(userData as User);
    } else {
      console.log("No such document!");
    }
  }
  return friendsData;
};

const checkUser = async (authUser: any) => {
  const userData = await getUser(authUser.uid);

  if (userData) {
    return userData;
  } else {
    return createUser(authUser);
  }
};

const FriendsList = () => {
  const auth = getAuth();
  const [authUser, loadingUser] = useAuthState(auth);
  const [friends, setFriends] = useState<Array<User>>([]);

  useEffect(() => {
    if (authUser) {
      (async () => {
        const userData = await checkUser(authUser);
        const friendsData = await getFriedsData(userData.friends);
        setFriends(friendsData);
      })();
    } else {
      setFriends([]);
    }
  }, [authUser]);

  if (friends.length == 0) {
    return null;
  }

  return (
    <div className="friends-list">
      <h2 className="friends-list__title">Friends</h2>
      <ul className="friends-list__list">
        {friends.map((data, i) => {
          return <FriendsItem {...data} key={i} />;
        })}
      </ul>
    </div>
  );
};

export default FriendsList;
