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
  filters: {
    watch: true,
    skip: false,
    rest: true,
  },
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
    case "ADD_FRIEND": {
      const user = state.user;

      if (!user.friends.includes(payload.uid)) {
        user.friends.push(payload.uid);
      }

      return {
        ...state,
        user: user,
      };
    }
    case "REMOVE_FRIEND": {
      const user = state.user;

      if (user.friends.includes(payload.uid)) {
        const list = user.friends.filter(
          (friendUid: any) => friendUid !== payload.uid
        );
        user.friends = list;
      }

      return {
        ...state,
        user: user,
      };
    }
    case "UPDATE_FILTERS": {
      let newFilters = state.filters;

      newFilters[payload.filter] = payload.value;

      return {
        ...state,
        filters: newFilters,
      };
    }

    default:
      throw new Error(`No case for type ${type} found.`);
  }
};

export default userReducer;
