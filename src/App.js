import { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import AddTask from "./components/AddTask";
import List from "./components/List";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import { Title } from "./components/Title";
import { getUsersAction } from "./redux/actions";

function App(props) {
   const { getUsersAction } = props;

   useEffect(() => {
      getUsersAction();
   }, []);

   return (
      <div>
         <NavBar />
         <SignUp />
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
      </div>
   );
}

export default connect((s) => s, { getUsersAction })(App);
