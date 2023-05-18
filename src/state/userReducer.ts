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
  friends: [],
};

const userReducer = (state: any, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_USER": {
      return {
        ...state,
        user: payload.user,
        friends: payload.friends,
      };
    }
    case "TOGGLE_MOVIE": {
      const user = state.user;
      console.log("TOGGLE_MOVIE", user[payload.list].includes(payload.movie));
      if (user[payload.list].includes(payload.movie)) {
        const list = user[payload.list].filter(
          (movie: any) => movie !== payload.movie
        );
        user[payload.list] = list;
      } else {
        user[payload.list].push(payload.movie);
      }

      return {
        ...state,
        user: user,
      };
    }

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
