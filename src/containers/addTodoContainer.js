import {connect} from 'react-redux';
import {addTodoItem} from '../actions/actions';
import AddTodo from '../components/addTodo';

const mapDispatchToProps = (dispatch) => {
	return {
		addTodoItemCallback: (text) => {
			dispatch(addTodoItem(text))
		}
	}
}

let AddTodoContainer = connect(null, mapDispatchToProps)(AddTodo)

export default AddTodoContainer