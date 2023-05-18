import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export default async function getUser(uid: string) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  }
  return undefined;
}
