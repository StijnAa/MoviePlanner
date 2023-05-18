export default interface User {
  uid: string;
  friends: string[];
  watchlist: number[];
  friendRequests: number[];
  photoUrl: string;
  skiplist: number[];
  name: string;
}
