import todoAPI from '../api/todoAPI';

let todoItemId = 0;

export const addTodoItem = (text) => (
	{
		type: "ADD_ITEM",
		id: todoItemId++,
		text,
		completed:false
	}
);

export const toggleItemStatus = (todo) => (
	{
		type: "TOGGLE_ITEM_STATUS",
		id: todo.id,
		text: todo.text,
		completed: !todo.completed
	}
);

export const setVisibilityFilter = (visibilityFilter) => (
	{
		type: "SET_VISIBILITY_FILTER",
		visibilityFilter
	}
);

export const loadTodoList = (todos) =>(
	{
		type:'LOAD_TODO_LIST_SUCCESS',
		todos
	}	
)


export const getTodoList = () =>{
	return (dispatch)=>{
		return todoAPI.getTodoList().then(response=>dispatch(loadTodoList(response.todos)))
	}
}