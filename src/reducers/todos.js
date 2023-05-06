const initialState = { todos: [] };

export const todoReducer = (state = initialState, action) => {
 switch (action.type) {
  case "ADD_TODO":
   return {
    ...state,
    todos: [...state.todos, action.payload],
   };
  case "REMOVE_TODO":
   return {
    ...state,
    todos: state.todos.filter((todo) => todo.id !== action.payload),
   };
  case "UPDATE_TODO":
   return {
    ...state,
    todos: state.todos.map((todo) => {
     if (todo.id === action.payload.id) {
      return {
       ...todo,
       completed: action.payload.completed,
      };
     }
     return todo;
    }),
   };
  default:
   return state;
 }
};
