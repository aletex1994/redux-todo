// Full list
export const fullTodosList = (state) => state.todos;

// Completed Todos
export const completedTodos = (state) => {
 return state.todos.todos.filter((todo) => todo.completed === true);
};

// Todos
export const incompletedTodos = (state) => {
 return state.todos.todos.filter((todo) => todo.completed === false);
};
