import { combineReducers } from 'redux';
import { user_reducer } from "./user.redux";
import { admin_reducer } from "./admin.redux";

export default combineReducers({user_reducer,admin_reducer})
