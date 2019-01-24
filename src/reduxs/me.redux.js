import axios from 'axios';

const initalState = {
    email: '',
    firstName: '',
    lastName: '',
    type: '',
    isActive: '',
    avatar: '',
    msg: '',
    redirectTo:'',
    hasAuth: false,
    hasCookies: false

};

export const actiontType = {

    ERROR_MSG: 'ERROR_MSG',
    AUTH_SUCCESS: 'AUTH_SUCCESS',
    COOKIES_SUCCESS: 'COOKIES_SUCCESS',
    LOGOUT: 'LOGOUT'
};

export const actions = {

    get_errorMsg : function (msg) {
        return { type: actiontType.ERROR_MSG, msg: msg };
    },

    get_user: function (obj) {
        return { type: actiontType.COOKIES_SUCCESS, payload: obj };
    },

    set_user: function (obj) {
        const { pwd, ...data } = obj;
        return { type: actiontType.AUTH_SUCCESS, payload: data };
    }
};

export function me(state = initalState, action) {
    switch (action.type) {
        case actiontType.ERROR_MSG:
            return {
                ...state,
                hasAuth: false,
                msg: action.msg
            };

        case actiontType.AUTH_SUCCESS:
            return {
                ...state,
                hasAuth: true,
                hasCookies: true,
                ...action.payload
            };

        case actiontType.COOKIES_SUCCESS:
            return {
                ...state,
                hasCookies: true,
                ...action.payload
            };

        case actiontType.LOGOUT:
            return {
                ...initalState,
            };

        default:
            return state;
    }
}

export function set_register (obj) {

    if(!obj.email || !obj.firstName || !obj.type) {
        return actions.get_errorMsg('Please fill in required fields');
    }

    if(obj.pwd != obj.rePwd) {
        return actions.get_errorMsg('Password not match!')
    }

    return dispatch => {
        axios.post('/me/register', obj).then(res => {

            if(res.status === 200 && res.data.code === 0 ) {
                dispatch(actions.set_user(res.data.data));
                this.history.push('/admin');
            }else {

                dispatch(actions.get_errorMsg(res.data.msg));
            }
        })
    }
}

export function set_login (obj) {

    if (!obj.email || !obj.pwd || !obj.type) {
        return actions.get_errorMsg('Please fill in required fields');
    }

    return dispatch => {
        axios.post('/me/login', obj).then(res => {

            if(res.status === 200 && res.data.code === 0 ) {

                dispatch(actions.set_user(res.data.data));
                this.history.push('/admin');
            }else {

                dispatch(actions.get_errorMsg(res.data.msg));
            }
        })
    }
}

export function set_logout() {
    return { type: actiontType.LOGOUT}
}

export function get_me(id) {

    const _id  = id ? '/' + id: '';

    return dispatch => {
        axios.get('me'+ _id).then(res => {

            if (res.status === 200 && res.data.code === 0) {
                dispatch(actions.get_user(res.data.data));
            }else {
                this.history.push('/checkin');
                dispatch(actions.get_errorMsg(res.data.msg));
            }
        })
    }
}

