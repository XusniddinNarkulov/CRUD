import React, { useState } from "react";
import { connect } from "react-redux";
import { addTaskAction } from "../redux/actions";

const AddTask = (props) => {
   const { addTaskAction } = props;
   const [val, setVal] = useState();

   return (
      <form
         id="add_task"
         onSubmit={(e) => {
            e.preventDefault();
            addTaskAction(val);
         }}
      >
         <input
            type="text"
            id="input_task"
            name="input"
            placeholder="New task"
            value={val}
            onChange={(e) => {
               setVal(e.target.value);
            }}
         />
         <button type="submit" id="add_button">
            <i className="fa fa-plus" aria-hidden="true"></i>
         </button>
      </form>
   );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { addTaskAction };

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
