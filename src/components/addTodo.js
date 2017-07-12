import React from 'react';
import './addTodo.css'

const AddTodo = ({addTodoItemCallback}) => {
	let input= null;
	let submitForm = (event) => {
		event.preventDefault();
		if (!input.value.trim()) {
          return
        }
        addTodoItemCallback(input.value);
        input.value=null;
	}
	return (
		<div className="add_todo_container">
			<form className="add_todo_form input-group" onSubmit={submitForm}>
				<input type="text" className="add_todo_text form-control" ref={(node)=>{input=node}}></input>
				<span className="input-group-btn">
					<button type="submit" className="add_todo_submit btn btn-primary">Add</button>
				</span>
			</form>
		</div>
	);
};

export default AddTodo;