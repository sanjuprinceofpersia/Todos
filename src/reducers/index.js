import todoListManager from './todoListManager';
import setVisibilityFilter from './visibilityFilter';

const initial_state = {
	todos : [],
	visibilityFilter: "ALL"
}


function todoApp(state=initial_state, action) {
	return{
		todos: todoListManager(state.todos,action),
		visibilityFilter: setVisibilityFilter(state.visibilityFilter,action)
	}
}

export default todoApp