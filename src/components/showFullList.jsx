import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { updateTodoItem, removeTodoItem } from "../actions/todosActions";

export const ShowTodoList = () => {
 const dispatch = useDispatch();
 const fullList = useSelector((store) => store.todos);
 const handleCheckboxChange = (todoId, isCompleted) => {
  dispatch(updateTodoItem(todoId, !isCompleted));
 };
 const deleteTodo = (todoId) => {
  dispatch(removeTodoItem(todoId));
 };

 useEffect(() => {
  console.log(fullList);
 }, [fullList]);

 return (
  <Box sx={{ padding: 2, textAlign: "left" }}>
   {fullList.todos.length > 0 && (
    <Paper sx={{ padding: 2 }} style={{ minWidth: "200px" }}>
     {fullList.todos.map((todo, index) => {
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
          onChange={() => handleCheckboxChange(todo.id, todo.completed)}
         />
        </div>
        <div className={todo.completed ? "Todo-completed" : ""}>
         {todo.text}
        </div>
        <div>
         <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
       </div>
      );
     })}
    </Paper>
   )}
  </Box>
 );
};
