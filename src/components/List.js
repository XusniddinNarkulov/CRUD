import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
   removeTaskAction,
   addTaskAction,
   updateAction,
   listAction,
} from "../redux/actions";

const List = (props) => {
   // console.log(props);
   const { removeTaskAction, listAction, updateAction } = props;
   const { list } = props.reducers;

   const [edit, setEdit] = useState();

   useEffect(() => {
      listAction();
   }, [listAction]);

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

                     <input
                        type="text"
                        className="input"
                        style={{
                           width: "80%",
                        }}
                        defaultValue={task}
                        onChange={(e) => {
                           setEdit(e.target.value);
                        }}
                     />
                  </form>

                  <button
                     className="delete"
                     onClick={() => {
                        removeTaskAction(id);
                     }}
                  >
                     <i className="fa fa-trash-o" aria-hidden="true"></i>
                  </button>
               </li>
            );
         })}
      </ul>
   );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
   removeTaskAction,
   addTaskAction,
   listAction,
   updateAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
