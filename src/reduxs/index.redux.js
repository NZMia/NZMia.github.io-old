import { combineReducers } from 'redux';
import { me } from './me.redux';
import { tag } from './tag.redux';
import { blog } from './blog.redux'

export default combineReducers({me,tag,blog});
