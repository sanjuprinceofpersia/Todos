import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {getTodoList} from './actions/actions';
import './index.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

let store = configureStore();

store.dispatch(getTodoList());

ReactDOM.render(
	<Root store={store}/>,
  	document.getElementById('root')
);
