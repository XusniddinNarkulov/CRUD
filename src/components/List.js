import React, { useState } from "react";
import { connect } from "react-redux";
import {
   removeTaskAction,
   addTaskAction,
   updateAction,
} from "../redux/actions";

const List = (props) => {
   const { list, removeTaskAction } = props;

   const [edit, setEdit] = useState();

   const editFunc = () => {
      setEdit(true);
   };

   return (
      <ul id="task_list">
         {list.map((item) => {
            const { task, id } = item;
            return (
               <li key={id}>
                  <form
                     action=""
                     onSubmit={(e) => {
                        e.preventDefault();
                        updateAction(id, edit);
                        console.log(edit);
                     }}
                     style={{ width: "100%" }}
                  >
                     <input type="checkbox" />
                     {/* {edit ? (
                     <span className="input" contentEditable>
                        {task}
                     </span>
                  ) : (
                     <span
                        className="input"
                        onClick={(e) => {
                           console.log(e);
                           editFunc;
                        }}
                     >
                        {task}
                     </span>
                  )} */}
                     {/* <span
                        className="input"
                        onClick={(e) => {
                           console.log(e);
                           e.target.setAttribute("contentEditable", "");
                        }}
                        onChange={(e) => {
                           console.log(e);
                           setEdit(e.target.innerHTML);
                        }}
                     >
                        {task}
                     </span> */}
                     <input
                        type="text"
                        // disabled
                        className="input"
                        style={{
                           width: "80%",
                        }}
                        defaultValue={task}
                        onClick={(e) => {
                           console.log(e);
                           // e.target.setAttribute("contentEditable", "");
                        }}
                        onChange={(e) => {
                           setEdit(e.target.value);
                        }}
                     />

                     {/* <button
                        type="button"
                        className="edit_task_button "
                        onClick={(e) => {
                           console.log(e);
                           e.target.previousElementSibling.setAttribute(
                              "contentEditable",
                              ""
                           );
                        }}
                     >
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                     </button> */}
                     <button
                        type="button"
                        className="delete"
                        onClick={() => {
                           removeTaskAction(id);
                        }}
                     >
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                     </button>
                  </form>
               </li>
            );
         })}
      </ul>
   );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = { removeTaskAction, addTaskAction };

export default connect(mapStateToProps, mapDispatchToProps)(List);
