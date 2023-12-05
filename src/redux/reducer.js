const initState = {
  Filters: {
    search: "",
    status: "All",
    Priority: [],
  },
  todoList: [
    /*
    { id: 1, name: "Learn yoga", completed: false, Priority: "hight" },
    { id: 2, name: "Learn Redux", completed: true, Priority: "Medium" },
    { id: 3, name: "Learn React", completed: false, Priority: "Low" },
    */
  ],
};

const rootReducer = (state = initState, action) => {
  /* {
    type:'todoList/addTodo',
    payload:     { id: 5, name: "Learn football", completed: false, Priority: "hight" },
*/
  console.log({ state, action });
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
