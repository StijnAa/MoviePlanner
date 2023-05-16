import Image from "next/image";
import React from "react";
import FriendsItem from "./FriendsItem";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDatabase } from "firebase/database";

const database = getDatabase(firebaseApp);

const FriendsList = () => {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const [snapshots, loadingDatabase, error] = useList(ref(database, "list"));

  return (
    <div className="friends-list">
      <h2 className="friends-list__title">Friends</h2>
      <ul className="friends-list__list">
        <FriendsItem />
      </ul>
    </div>
  );
};

export default FriendsList;
