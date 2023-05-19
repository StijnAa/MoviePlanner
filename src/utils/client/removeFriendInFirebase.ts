import { getDoc, updateDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export default async function removeFriendInFirebase(
  userUid: string,
  friendUid: string
) {
  const docRef = doc(db, "users", userUid);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    return false;
  }
  const userData = docSnap.data();

  if (userData.friends.includes(friendUid)) {
    const tempList = userData.friends.filter(
      (friend: any) => friend !== friendUid
    );
    userData.friends = tempList;
  } else {
    return false;
  }

  await updateDoc(docRef, userData);

  return true;
}
