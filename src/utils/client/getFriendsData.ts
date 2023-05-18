import User from "@/types/user";
import getUser from "@/utils/client/getUser";

export default async function getFriendsData(friends: string[]) {
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
}
