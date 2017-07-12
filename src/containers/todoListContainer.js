import {connect} from 'react-redux';
import {addTodoItem,toggleItemStatus} from '../actions/actions';
import TodoList from '../components/todoList';

let getVisibleTodosList =(todos,visibilityFilter) => {
	switch(visibilityFilter){
		case 'INCOMPLETE':
			return todos.filter((todo)=>(!todo.completed));
		case 'COMPLETED':
			return todos.filter((todo)=>(todo.completed));
		case 'ALL':
		default:
			return todos;

	}
};

const mapStateToProps = (store) => {
	return{
		todos : getVisibleTodosList(store.todos,store.visibilityFilter)
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		toogleTodoStatus: (todo) => {
			dispatch(toggleItemStatus(todo))
		}
	}
}

let TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoListContainer