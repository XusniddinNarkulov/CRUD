import { ADD, ADD_USER, LIST, REMOVE, UPDATE, USERS } from "./actions";

export const initialState = {
   list: [],
   users: [],
};

export const reducers = (state = initialState, { type, payload }) => {
   switch (type) {
      case LIST:
         return { ...state, list: payload };
      case ADD:
         return { ...state, list: [payload, ...state.list] };

      case USERS:
         return { ...state, users: payload };
      case ADD_USER:
         return { ...state, users: [payload, ...state.users] };

      default:
         return state;
   }
};
