

import axios from 'axios';
import { getRedirectPath } from "../utils/redirect";

const AUTH_SUCCESS = "AUTH_SUCCESS";
const ERROR_MSG = "ERROR_MSG";

const USERS = "USERS";
const USER_CURRENT = "USER_CURRENT";
const USER_SELECTED = "USER_SELECTED";
const UPDATE = "UPDATE";

const initState = {
	redirectTo:'',
	isAuth: false,
	msg: " ",
	email: " ",
	firstName: " ",
	lastName: " ",
	type: " ",
	isActive: true,
	userList: [],
	currentUser:[],
	selectedUser:[]
};

export function user_reducer(state=initState , action) {

	switch (action.type) {
		case AUTH_SUCCESS:
			return {
				...state,
				msg: '',
				redirectTo: getRedirectPath(action.payload),
				isAuth: true,
				...action.payload
			};
		case USER_CURRENT:
			return {
				...state,
				isAuth: true,
				currentUser: action.payload
			};
		case USER_SELECTED:
			return {
				...state,
				redirectTo: action.url,
				selectedUser: action.payload
			};
		case USERS:
			return {
				...state,
				userList: action.payload
			};
		case ERROR_MSG:
			return {
				...state,
				isAuth: false,
				msg: action.msg
			};
		default:
			return state
	}
}

export function errorMsg(msg) {
	return { msg, type: ERROR_MSG };
}

export function authSuccess(obj) {
	const{pwd, ...data} = obj;
	return { type: AUTH_SUCCESS, payload: data }
}

export function user(data) {
	return { type: USERS, payload: data }
}

export function user_current(data) {
	return { type: USER_CURRENT, payload: data }
}

export function user_selected(data, url) {
	const path = url || false;
	return { type: USER_SELECTED, payload: data, url:path }
}

// Actions
export function login_action({ email, pwd, type }) {

	if(!email || !pwd || !type) {
		return errorMsg("Please fill in fields")
	}

	return dispatch => {

		axios.post('/user/login', { email, pwd, type }).then(res => {

			if(res.status === 200 && res.data.code === 0) {

				dispatch(authSuccess({email, pwd, type}));
			}else {

				dispatch(errorMsg(res.data.msg));
			}
		}).catch(err => {
			console.log("error:"+ err );
		})
	}
}

export function register_action({ email, pwd, rePwd, type, firstName,lastName }) {

	if (!email || !pwd || !type || !firstName || !lastName) {
		return errorMsg("Please fill in ALL fields");
	}

	if (pwd !== rePwd) {
		return errorMsg("Password not match up");
	}

	return dispatch => {

		axios.post('/user/register', { email, pwd, type, firstName, lastName }).then(res => {

			if (res.status === 200 && res.data.code === 0) {
				dispatch(authSuccess({ email, pwd, type, firstName, lastName }));
			} else {
				dispatch(errorMsg(res.data.msg))
			}
		})
	}
}

export function users_action() {

	return  (dispatch) => {

		axios.get('/user/list').then(res => {
			if(res.status === 200 && res.data.code === 0) {
				dispatch(user(res.data.data));
			}
		});
	}
}

export function user_current_action() {

	const publicList = ['/login','/admin'];
	const pathname = this.location.pathname;

	if (publicList.indexOf(pathname)>-1) {
		return null
	}

	return dispatch => {

		axios.get('/user/info').then(res=>{

			if (res.status === 200) {

				if( res.data.code === 0 ) {

					this.history.push('/admin');
					dispatch(user_current(res.data.data));
				}else {
					this.history.push('/login')
				}
			}
		})
	}

}

// export function update_action(data) {
//
// 	return dispatch => {
//
// 		axios.post('/user/update?id='+data._id, data).then(res => {
//
// 			if (res.status === 200 && res.data.code === 0) {
// 				dispatch(user_selected(res.data.data));
// 			}else {
// 				dispatch(errorMsg(res.data.msg))
// 			}
// 		})
// 	}
//
// }

export function update_action(data) {

	return dispatch => {

		axios.post('/user/update?id='+data._id, data).then(res => {

			if (res.status === 200 && res.data.code === 0) {
				dispatch(authSuccess(res.data.data));
			}else {
				dispatch(errorMsg(res.data.msg))
			}
		})
	}

}