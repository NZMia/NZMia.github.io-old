import axios from 'axios';
import { getRedirectPath } from "../utils/redirect";

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const ERROR_MSG = "ERROR_MSG";
const LOAD_DATA = "LOAD_DATA";

const initState = {
	redirectTo:'',
	isAuth: false,
	msg: " ",
	email: " ",
	firstName: " ",
	lastName: " ",
	type: " "
};

export function user_reducer(state=initState , action) {

	switch (action.type) {
		case REGISTER_SUCCESS:
			return {
				...state,
				msg: '',
				redirectTo: getRedirectPath(action.payload),
				isAuth: true,
				...action.payload
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				msg: '',
				redirectTo: getRedirectPath(action.payload),
				isAuth: true,
				...action.payload
			};
		case LOAD_DATA:
			return {
				...state,
				...action.payload
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

export function loginSuccess(data) {
	return { type: LOGIN_SUCCESS, payload: data }
}

export function registerSuccess(data) {
	return { type: REGISTER_SUCCESS, payload: data }
}

export function login_action({ email, pwd, type }) {

	if(!email || !pwd || !type) {
		return errorMsg("Please fill in fields")
	}

	return dispatch => {

		axios.post('/user/login', { email, pwd, type }).then(res => {

			if(res.status === 200 && res.data.code === 0) {

				dispatch(loginSuccess({email, pwd, type}));
			}else {

				dispatch(errorMsg(res.data.msg));
			}
		}).catch(err => {
			console.log("error:"+ err );
		})
	}
}

export function register_action({ email, pwd, rePwd, type, firstName, lastName }) {

	if (!email || !pwd || !type || !firstName || !lastName) {
		return errorMsg("Please fill in ALL fields");
	}

	if (pwd !== rePwd) {
		return errorMsg("Password not match up");
	}

	return dispatch => {

		axios.post('/user/register', { email, pwd, type, firstName, lastName }).then(res => {

			if (res.status === 200 && res.data.code === 0) {
				dispatch(registerSuccess({ email, pwd, type, firstName, lastName }));
			} else {
				dispatch(errorMsg(res.data.msg))
			}
		})
	}
}
