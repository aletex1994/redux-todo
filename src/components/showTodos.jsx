import React from "react";
import { connect } from "react-redux";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { incompletedTodos, fullTodosList } from "../selectors";
import { updateTodoItem } from "../actions/todosActions";

class ShowTodos extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   incompletedItemsNumber: 0,
   todosListLength: 0,
  };
 }
 componentDidMount() {
  this.setState({
   incompletedItemsNumber: this.props.incompleted.length,
   todosListLength: this.props.todos.todos.length,
  });
 }

 handleCheckboxChange = (todoId, isCompleted) => {
  this.props.updateTodoItem(todoId, !isCompleted);
 };

 render() {
  const incompletedTodos = this.state.incompletedItemsNumber;
  const todosListLength = this.state.todosListLength;
  return (
   <Box>
    <p style={{ fontSize: "9px" }}>
     To do {incompletedTodos} of {todosListLength}
    </p>
    <br />
    <Paper sx={{ padding: 2 }} style={{ minWidth: "200px" }}>
     {this.props.incompleted.length === 0 && <div>No todos yet</div>}
     {this.props.incompleted.map((todo, index) => {
      return (
       <div
        key={todo.id}
        style={{
         display: "flex",
         flexDirection: "row",
         alignItems: "center",
         justifyContent: "space-between",
         gap: "16px",
         padding: "4px",
         backgroundColor: index % 2 === 0 ? "white" : "lightgrey",
        }}
       >
        <div>
         <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => this.handleCheckboxChange(todo.id, todo.completed)}
         />
        </div>
        <div className={todo.completed ? "Todo-completed" : ""}>
         {todo.text}
        </div>
       </div>
      );
     })}
    </Paper>
   </Box>
  );
 }
}

const mapStateToProps = (state) => {
 return {
  incompleted: incompletedTodos(state),
  todos: fullTodosList(state),
 };
};
const mapDispatchToProps = {
 updateTodoItem,
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowTodos);
