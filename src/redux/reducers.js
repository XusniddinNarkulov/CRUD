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
         return { ...state, users: [payload, ...state.users] };

      default:
         return state;
   }
};

let arr = [
   { id: 1, text: "hello" },
   { id: 2, text: "salom" },
   { id: 3, text: "salom" },
];

let ar = arr.map((item) => {
   let temp = Object.assign({}, item);
   console.log(temp);
   if (temp.id === 2) {
      temp = { hello: "world" };
   }
   return temp;
});
console.log(ar);
