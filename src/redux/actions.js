import axios from "axios";

export const LIST = "LIST";
export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const UPDATE = "UPDATE";

export const USERS = "USERS";
export const ADD_USER = "ADD_USER";

//tasks

export const listAction = () => {
   return (dispatch, getState) => {
      axios.get("http://localhost:3002/tasks").then((resp) => {
         // console.log(resp);

         dispatch({
            type: LIST,
            payload: resp.data,
         });
      });
   };
};
export const addTaskAction = (task) => (dispatch, getState) => {
   axios.post("http://localhost:3002/tasks", { task }, {}).then((res) => {
      // console.log(res);
      dispatch({
         type: ADD,
         payload: res.data,
      });
   });
};

export const removeTaskAction = (id) => (dispatch) => {
   axios.delete(`http://localhost:3002/tasks/${id}`).then((res) => {
      // console.log(res);
      dispatch(listAction());
   });
};

export const updateAction = (id, text) => (dispatch) => {
   axios
      .patch(`http://localhost:3002/tasks/${id}`, { task: text }, {})
      .then((res) => {
         // console.log(res);
         dispatch(listAction());
      });
};

//users

export const getUsersAction = () => (dispatch) => {
   axios.get("http://localhost:3002/users").then((res) => {
      // console.log(res);
      dispatch({
         type: USERS,
         payload: res.data,
      });
   });
};

export const postUserAction = (obj) => (dispatch) => {
   axios.post("http://localhost:3002/users", obj, {}).then((res) => {
      // console.log(res);
      dispatch({
         type: ADD_USER,
         payload: res.data,
      });
   });
};

export const deleteUserAction = (id) => (dispatch) => {
   axios.delete(`http://localhost:3002/users/${id}`).then((res) => {
      dispatch(getUsersAction());
   });
};
