// import fetch from 'isomorphic-fetch'

class todoAPI{
	static getTodoList = () =>{
		return fetch('http://localhost:3000/todoList.json').then(response=>(response.json())).catch(error=>(error));
	};
};

export default todoAPI;