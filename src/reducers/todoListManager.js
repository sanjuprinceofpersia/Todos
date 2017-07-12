const todoListManager = (todos,action)=>{
	switch(action.type){
		case 'ADD_ITEM':
			return [
				...todos,
				{
					id: action.id,
					text: action.text,
					completed: action.completed
				}
			]
		case 'TOGGLE_ITEM_STATUS':
			return todos.map((todo)=>{
				if(action.id===todo.id){
					return Object.assign({},todo,{
						completed:action.completed
					})
				}
				else{
					return todo;
				}
			})
		case 'LOAD_TODO_LIST_SUCCESS':
			return [...todos,...action.todos];
		default:
			return todos;
	}
};

export default todoListManager;