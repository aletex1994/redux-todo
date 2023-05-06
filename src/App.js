import logo from "./logo.svg";
import "./App.css";
import { AddTodo } from "./components/addTodo";
import { ShowTodoList } from "./components/showFullList";

export const App = () => {
 return (
  <div className="App">
   <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
     Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
     className="App-link"
     href="https://react-redux.js.org/"
     target="_blank"
     rel="noopener noreferrer"
    >
     Todo List - Redux
    </a>
   </header>
   <AddTodo />
   <ShowTodoList />
  </div>
 );
};
