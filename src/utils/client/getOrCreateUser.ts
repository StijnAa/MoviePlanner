import { UserInfo } from "firebase/auth";
import { userInfo } from "os";
import createUser from "./createUser";
import getUser from "./getUser";

export default async function getOrCreateUser(authUser: UserInfo) {
  let userData = await getUser(authUser.uid);
  if (!userData) {
    userData = await createUser(authUser);
  }
  return userData;
}
