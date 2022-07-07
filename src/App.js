import { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddTask from "./components/AddTask";
import List from "./components/List";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import { Title } from "./components/Title";
import ToDoListContainer from "./components/ToDoListContainer";
import { getUsersAction } from "./redux/actions";

function App(props) {
   const { getUsersAction } = props;

   useEffect(() => {
      getUsersAction();
   }, []);

   return (
      <div>
         <NavBar />

         <Routes>
            <Route path="/" element={<ToDoListContainer />} />
            <Route path="/signup" element={<SignUp />} />
         </Routes>
      </div>
   );
}

export default connect((s) => s, { getUsersAction })(App);
