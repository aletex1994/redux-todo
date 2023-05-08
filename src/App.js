import "./App.css";
import { AddTodo } from "./components/addTodo";
import { TabView } from "./components/tabView";
export const App = () => {
 return (
  <div className="App">
   <header className="App-header">
    <a
     className="App-link"
     href="https://react-redux.js.org/"
     target="_blank"
     rel="noopener noreferrer"
    >
     📓 Todo List - Redux
    </a>
   </header>
   <AddTodo />
   <br />
   <TabView />
  </div>
 );
};
