export const addTodoList = (text) => ({
 type: "ADD_TODO",
 payload: {
  id: new Date().getTime(),
  text,
  completed: false,
  date: new Date().getTime(),
 },
});

export const removeTodoList = (id) => ({
 type: "REMOVE_TODO",
 payload: id,
});

export const updateTodoList = (id, completed) => ({
 type: "UPDATE_TODO",
 payload: {
  id,
  completed,
 },
});
