import axios from "axios";
import { nanoid } from "nanoid";

export const LIST = "LIST";
export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const UPDATE = "UPDATE";

export const listAction = () => {
   return (dispatch, getState) => {
      axios.get("http://localhost:3002/tasks").then((resp) => {
         console.log(resp);

         dispatch({
            type: LIST,
            payload: resp.data,
         });
      });
   };
};
export const addTaskAction = (task) => (dispatch, getState) => {
   axios.post("http://localhost:3002/tasks", { task }, {}).then((res) => {
      console.log(res);
      dispatch({
         type: ADD,
         payload: res.data,
      });
   });
};

export const removeTaskAction = (id) => (dispatch) => {
   axios.delete(`http://localhost:3002/tasks/${id}`).then((res) => {
      console.log(res);
      dispatch(listAction());
   });
   // return {
   //    type: REMOVE,
   //    payload: { id: id },
   // };
};

export const updateAction = (id, text) => (dispatch) => {
   axios
      .patch(`http://localhost:3002/tasks/${id}`, { task: text }, {})
      .then((res) => {
         console.log(res);
         dispatch(listAction());
      });

   // return {
   //    type: UPDATE,
   //    payload: { id: id, text: text },
   // };
};
