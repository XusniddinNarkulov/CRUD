import { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AddTask from "./components/AddTask";
import List from "./components/List";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { Title } from "./components/Title";
import ToDoListContainer from "./components/ToDoListContainer";
import { getUsersAction, listAction } from "./redux/actions";

function App(props) {
   const { getUsersAction, reducers } = props;
   // console.log(props);

   useEffect(() => {
      getUsersAction();
   }, []);

   return (
      <div>
         <NavBar />

         <Routes>
            <Route path="/" element={<ToDoListContainer />} />
            <Route
               path="/signup"
               element={reducers.currentUser ? <Navigate to="/" /> : <SignUp />}
            />
            <Route
               path="/signin"
               element={reducers.currentUser ? <Navigate to="/" /> : <SignIn />}
            />
         </Routes>
      </div>
   );
}

export default connect((s) => s, { getUsersAction, listAction })(App);
