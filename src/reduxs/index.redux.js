import { combineReducers } from 'redux';
import { me } from './me.redux';
import { tag } from './tag.redux';

export default combineReducers({me,tag});
