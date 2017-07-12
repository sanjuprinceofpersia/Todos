import React from 'react';
import './todoList.css';

const TodoList = ({todos,toogleTodoStatus}) => {
	let getClassName = (todo) => (todo.completed ? "todo_completed":"todo_inprogress");
	let temp=(todo)=>{toogleTodoStatus(todo)};
	return (
		<div className="todolist_container">
			<ul>
				{todos.map((todo)=>(<li key={todo.id} className={getClassName(todo)} onClick={(e)=>temp(todo)}>{todo.text}</li>))}
			</ul>
		</div>
	);
};

export default TodoList;