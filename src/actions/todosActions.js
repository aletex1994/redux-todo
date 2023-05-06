export const addTodoItem = (text) => ({
 type: "ADD_TODO",
 payload: {
  id: new Date().getTime(),
  text,
  completed: false,
  date: new Date().getTime(),
 },
});

export const removeTodoItem = (id) => ({
 type: "REMOVE_TODO",
 payload: id,
});

export const updateTodoItem = (id, completed) => ({
 type: "UPDATE_TODO",
 payload: {
  id,
  completed,
 },
});
