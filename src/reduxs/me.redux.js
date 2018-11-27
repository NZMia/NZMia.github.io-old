import axios from 'axios';

const initalState = {
	email: '',
	firstName: '',
	lastName: '',
	type: '',
	isActive: '',
	avatar: '',
	msg: ''
};

export const actiontType = {

	ERROR_MSG: 'ERROR_MSG',
	AUTH_SUCCESS: 'AUTH_SUCCESS'
};

export const actions = {

	get_errorMsg : function (msg) {
		return { type: actiontType.ERROR_MSG, msg: msg };
	},

	get_user: function (obj) {
		console.log(obj);
		const {pwd, ...data} = obj;
		return {type: actiontType.AUTH_SUCCESS, payload: data};
	}
};

export function me(state = initalState, action) {
	switch (action.type) {
		case actiontType.ERROR_MSG:
			return {
				...state,
				isActive: false,
				msg: action.msg
			};

		case actiontType.AUTH_SUCCESS:
			return {
				...state,
				isActive: true,
				msg: '',
				...action.payload

			};
		default:
			return state;

	}
}

export function get_me(id) {
	const _id  = id ? id: '';

	return dispatch => {
		axios.get('me/'+ _id).then(res => {

			if (res.status === 200) {

				if( res.data.code === 0 ) {
					dispatch(actions.get_user(res.data.data));
					this.history.push('/admin');
				} else {

					this.history.push('/login');
				}
			}else {
				dispatch(actions.get_errorMsg(res.data.msg));
			}
		})
	}
}

export function get_register (obj) {
	if(!obj.email || !obj.firstName || !obj.type) {
		return actions.get_errorMsg('Please fill in required fields');
	}

	if(obj.pwd != obj.rePwd) {
		return actions.get_errorMsg('Password not match!')
	}

	return dispatch => {
		axios.post('/me/register', obj).then(res => {
			res.status === 200 && res.data.code === 0 ? dispatch(actions.get_user) : dispatch(actions.get_errorMsg(res.data.msg));
		})
	}
}

export function get_login (obj) {
	if (!obj.email || !obj.pwd || !obj.type) {
		return actions.get_errorMsg('Please fill in required fields');
	}

	return dispatch => {
		axios.post('/me/login', obj).then(res => {
			res.status === 200 && res.data.code === 0 ? dispatch(actions.get_user) : dispatch(actions.get_errorMsg(res.data.msg));
		})
	}
}