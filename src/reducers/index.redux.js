
import { combineReducers } from 'redux';
import { Counter } from "./counter.redux";
import { Auth } from "./auth.redux";

export default combineReducers({Counter,Auth})

