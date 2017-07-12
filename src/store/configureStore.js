import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import todoAppReducers from '../reducers/index';

const configureStore=()=>(createStore(todoAppReducers,applyMiddleware(thunk)));

export default configureStore;