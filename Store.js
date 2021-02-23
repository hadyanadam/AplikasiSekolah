import { createStore, combineReducers } from 'redux';
import LoginReducer from './reducers/LoginReducer'

const rootReducer = combineReducers({
  login: LoginReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;