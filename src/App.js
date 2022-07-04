import "./App.css";
import AddTask from "./components/AddTask";
import List from "./components/List";
import { Title } from "./components/Title";

function App() {
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
}

export default App;
