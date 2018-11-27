import { combineReducers } from 'redux';
import { user_reducer } from "./user.redux";
import { me } from './me.redux';

export default combineReducers({user_reducer, me})
