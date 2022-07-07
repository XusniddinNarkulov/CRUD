import React from "react";
import { connect } from "react-redux";
import { Title } from "./Title";
import AddTask from "./AddTask";
import List from "./List";

export const ToDoListContainer = (props) => {
   return (
      <div className="container flex lists">
         <div className="one_list">
            <Title />
            <AddTask />

            <div>
               <List />

               {/* <h2 id="completed_title">Completed</h2>
      <ul id="completed_list"></ul> */}
            </div>
         </div>
      </div>
   );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer);
