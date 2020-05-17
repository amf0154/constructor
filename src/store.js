import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/config';
export default createStore(rootReducer,applyMiddleware(thunk));