import axios from 'axios';
import { getAdminRedirectPath } from "../utils/redirect";

const LOAD_ALL = "LOAD_ALL";
const LOAD_ONE = "LOAD_ONE";

const initList = {
	userList: [],
	currentUser:[]
};

export function admin_reducer(state=initList , action) {

	switch (action.type) {
		case LOAD_ALL:
			return {
				...state,
				userList: action.payload
			};
		case LOAD_ONE:
			return {
				...state,
				currentUser: action.payload
			};
		default:
			return state
	}
}

export function loading_all(data) {
	return { type: LOAD_ALL, payload: data }
}

export function loading_one(data) {
	return { type: LOAD_ONE, payload: data }
}

export function load_all_action() {

	return  (dispatch) => {

		axios.get('/user/list').then(res => {
			if(res.status === 200 && res.data.code === 0) {
				dispatch(loading_all(res.data.data));
			}
		});
	}
}

