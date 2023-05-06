import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { updateTodoList } from "../actions/todosActions";

export const ShowTodoList = () => {
 const dispatch = useDispatch();
 const fullList = useSelector((store) => store.todos);
 const handleCheckboxChange = (todoId, isCompleted) => {
  dispatch(updateTodoList(todoId, !isCompleted));
 };

 useEffect(() => {
  console.log(fullList);
 }, [fullList]);

 return (
  <Box sx={{ padding: 2, textAlign: "left" }}>
   {fullList.todos.length > 0 && (
    <Paper sx={{ padding: 2 }}>
     {fullList.todos.map((todo) => {
      return (
       <div key={todo.id}>
        <h4>
         <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleCheckboxChange(todo.id, todo.completed)}
         />
         {todo.text}
        </h4>
       </div>
      );
     })}
    </Paper>
   )}
  </Box>
 );
};
