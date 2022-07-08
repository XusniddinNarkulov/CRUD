import {
   ADD,
   ADD_USER,
   DELETE_USER,
   LIST,
   REMOVE,
   UPDATE,
   USERS,
} from "./actions";

export const initialState = {
   list: [],
   users: [],
   currentUser: null,
};

export const reducers = (state = initialState, { type, payload }) => {
   switch (type) {
      case LIST:
         return { ...state, list: payload };
      case ADD:
         return { ...state, list: [payload, ...state.list] };
      case REMOVE:
         return {
            ...state,
            list: state.list.filter((val) => {
               return val.id !== payload;
            }),
         };
      case UPDATE:
         return {
            ...state,
            list: state.list.map((item) => {
               let copyItem = Object.assign({}, item);
               if (copyItem.id === payload.id) {
                  return (copyItem = payload);
               }
               return copyItem;
            }),
         };

      case USERS:
         return { ...state, users: payload };
      case ADD_USER:
         return {
            ...state,
            users: [payload, ...state.users],
            currentUser: payload,
         };
      case DELETE_USER:
         return {
            ...state,
            users: state.users.filter((user) => user.id !== payload.id),
            currentUser: false,
         };

      default:
         return state;
   }
};
