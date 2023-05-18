import { getDoc, updateDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export default async function toggleMovieInFirebase(
  uid: string,
  list: "watchlist" | "skiplist",
  movieId: number
) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    return false;
  }
  const userData = docSnap.data();

  if (userData[list].includes(movieId)) {
    const tempList = userData[list].filter((movie: any) => movie !== movieId);
    userData[list] = tempList;
  } else {
    userData[list].push(movieId);
  }

  await updateDoc(docRef, userData);

  return true;
}

// import { setDoc } from "firebase/firestore";

// import { doc } from "firebase/firestore";
// import { db } from "@/firebase/firebase";

// export default async function createUser(authUser: any) {
//   const docRef = doc(db, "users", authUser.uid);

//   const newUserData = {
//     name: authUser.displayName,
//     friends: [authUser.uid],
//     friendRequests: [],
//     watchlist: [],
//     skiplist: [],
//     photoUrl: authUser.photoURL,
//   };

//   await setDoc(docRef, newUserData);
//   return newUserData;
// }
