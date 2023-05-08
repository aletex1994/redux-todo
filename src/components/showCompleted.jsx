import React from "react";
import { connect } from "react-redux";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { completedTodos, fullTodosList } from "../selectors";

class ShowCompletedTodos extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   completedItemsNumber: 0,
   todosListLength: 0,
  };
 }
 componentDidMount() {
  this.setState({
   completedItemsNumber: this.props.completed.length,
   todosListLength: this.props.todos.todos.length,
  });
 }

 render() {
  const completedTodos = this.state.completedItemsNumber;
  const todosListLength = this.state.todosListLength;
  return (
   <Box>
    <p style={{ fontSize: "9px" }}>
     Completed {completedTodos} of {todosListLength}
    </p>
    <br />
    <Paper sx={{ padding: 2 }} style={{ minWidth: "200px" }}>
     {this.props.completed.map((todo, index) => {
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
        {todo.text}
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
  completed: completedTodos(state),
  todos: fullTodosList(state),
 };
};

export default connect(mapStateToProps)(ShowCompletedTodos);
