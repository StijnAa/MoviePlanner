export const initialState = {
  user: {
    uid: undefined,
    friends: [],
    watchlist: [],
    friendRequests: [],
    photoUrl: undefined,
    skiplist: [],
    name: undefined,
  },
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_USER":
      console.log("SET_USER", payload);

      return {
        ...state,
        user: payload.user,
      };
    // case "ADD_TO_WATCHLIST":
    //   console.log("ADD_TO_WATCHLIST", payload);

    //   return {
    //     ...state,
    //     products: payload.products,
    //   };
    // case "REMOVE_FROM_WATCHLIST":
    //   console.log("REMOVE_FROM_WATCHLIST", payload);

    //   return {
    //     ...state,
    //     products: payload.products,
    //   };
    default:
      throw new Error(`No case for type ${type} found.`);
  }
};

export default userReducer;
