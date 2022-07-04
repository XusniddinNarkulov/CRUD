import { nanoid } from "nanoid";
import { ADD, LIST, REMOVE, UPDATE } from "./actions";

export const initialState = {
   list: [
      { id: nanoid(), task: "lorem1" },
      { id: nanoid(), task: "lorem2" },
   ],
};

const arr = initialState.list.map((val) => {
   {
      return { ...val, task: "123" };
   }
});
console.log(arr);

export const reducers = (state = initialState, { type, payload }) => {
   switch (type) {
      case ADD:
         return { ...state, list: [payload, ...state.list] };
      case REMOVE:
         return {
            ...state,
            list: state.list.filter((task) => task.id !== payload.id),
         };
      case UPDATE:
         const arr = state.list.map((val) => {
            if (val.id === payload.id) {
               return { ...val, task: payload.text };
            }
         });

         return {
            ...state,
            list: arr,
         };
      default:
         return state;
   }
};
