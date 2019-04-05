import { combineReducers } from 'redux';
import usersReducer from './reducers/usersReducer';

const appReducer = combineReducers({
    users: usersReducer
});
export default appReducer;