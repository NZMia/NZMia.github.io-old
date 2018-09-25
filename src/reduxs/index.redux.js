
import { combineReducers } from 'redux';
import { user_reducer } from "./user.redux";
import { Auth } from "./auth.redux";

export default combineReducers({user_reducer})

