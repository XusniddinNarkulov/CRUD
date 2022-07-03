import { nanoid } from "nanoid";
import { ADD, LIST, REMOVE, UPDATE } from "./actions";

export const initialState = {
   list: [
      { id: nanoid(), task: "lorem1" },
      { id: nanoid(), task: "lorem2" },
   ],
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
         return {
            ...state,
            list: state.list.map((val) => {
               if (val.id === payload.id) {
                  val.task = payload.text;
               }
            }),
         };
      default:
         return state;
   }
};
