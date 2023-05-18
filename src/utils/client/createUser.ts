import { getDoc, setDoc } from "firebase/firestore";
import User from "../../types/user";
import { doc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export default async function createUser(authUser: any) {
  const docRef = doc(db, "users", authUser.uid);

  const newUserData = {
    uid: authUser.uid,
    name: authUser.displayName,
    friends: [authUser.uid],
    friendRequests: [],
    watchlist: [],
    skiplist: [],
    photoUrl: authUser.photoURL,
  };

  await setDoc(docRef, newUserData);
  return newUserData;
}
