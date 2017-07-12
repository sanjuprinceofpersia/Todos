import React from 'react';
import './card.css';
import AddTodo from '../containers/addTodoContainer';
import TodoListContainer from '../containers/todoListContainer';
import FooterContainer from '../containers/footerContainer';

const Card = () => (
	<div className="card_container">
		<div className="card">
			<AddTodo />
			<TodoListContainer />
			<FooterContainer />
		</div>
	</div>
);

export default Card;