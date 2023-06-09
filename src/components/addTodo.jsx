import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../actions/todosActions";

export const AddTodo = () => {
 const [text, setText] = useState("");
 const dispatch = useDispatch();

 const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(addTodoItem(text));
  setText("");
 };

 return (
  <div>
   <form onSubmit={handleSubmit}>
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    <button type="submit">Add Todo</button>
   </form>
  </div>
 );
};
