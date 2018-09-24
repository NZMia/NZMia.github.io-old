import axios from 'axios';

// const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const ERROR_MSG = "ERROR_MSG";

const initState = {
	isAuth: false,
	msg: " ",
	email: " ",
	firstName: " ",
	lastName: " ",
	pwd: " ",
	type: " "
};

const header = {
	'Content-Type': 'multipart/form-data',
}
export function user_reducer(state = initState, action) {

	switch (action.type) {
		case REGISTER_SUCCESS:
			return {
				...state,
				msg: '',
				isAuth: true,
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

export function registerSuccess(data) {
	return { type: REGISTER_SUCCESS, payload: data }
}

export function register_action({ email, pwd, rePwd, type, firstName, lastName }) {

	if (!email || !pwd || !type || !firstName || !lastName) {
		return errorMsg("Please fill up ALL fields");
	}

	if (pwd !== rePwd) {
		return errorMsg("Password not match up");
	}

	return dispatch => {
		// method A
		// fetch('/user/register', {
		// 	method: 'POST',
		// 	headers: { 'content-type': 'application/json' },
		// 	body: JSON.stringify({ email: 'abc@testabe.com', password: 'password' })
		// }).then(res => {
		// 	console.log(res.body)
		// })

		//method B
		axios.defaults.headers = { 'Content-Type': 'application/json' }

		axios.post('/user/register', { email, pwd, type, firstName, lastName }).then(res => {
			console.log('----------- user.redux.js --------------')
			console.log(res)
			if (res.status === 200 && res.data.code === 0) {
				dispatch(registerSuccess({ email, pwd, type, firstName, lastName }));
				console.log(JSON.stringify({ email, pwd, type, firstName, lastName }));
				console.log(registerSuccess({ email, pwd, type, firstName, lastName }));

			} else {
				dispatch(errorMsg(res.data.msg))
			}
		})
	}
}
