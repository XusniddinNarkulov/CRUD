import { nanoid } from "nanoid";

export const LIST = "LIST";
export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const UPDATE = "UPDATE";

export const listAction = (list) => {
   return {
      type: LIST,
      payload: list,
   };
};

export const addTaskAction = (task) => {
   return {
      type: ADD,
      payload: { id: nanoid(), task },
   };
};

export const removeTaskAction = (id) => {
   return {
      type: REMOVE,
      payload: { id: id },
   };
};

export const updateAction = (id, text) => {
   return {
      type: UPDATE,
      payload: { id: id, text: text },
   };
};
