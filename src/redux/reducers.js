import { nanoid } from "nanoid";
import { ADD, LIST, REMOVE, UPDATE } from "./actions";

export const initialState = {
   list: [],
};

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
               return (val.task = payload.text);
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
