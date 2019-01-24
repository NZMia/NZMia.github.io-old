import axios from 'axios';

const initalState = {
    name: '',
    isActive: '',
    tagList: []
}

export const actionType = {
    ERROR_MSG: 'ERROR_MSG',
    SUCCESS: 'SUCCESS',
    GET_LIST: 'GET_LIST',
}

export const actions = {
    get_errorMsg: function(msg) {
        return { type:actionType.ERROR_MSG, msg:msg}
    },

    set_tag: function(obj) {
        const { inputVisible, ...data } = obj;
        return { type:actionType.SUCCESS, payload: data}
    },

    get_list: function(data) {
        return { type:actionType.GET_LIST, payload: data}
    }
}

export function tag(state = initalState, action) {
    switch(action.type) {
        case actionType.ERROR_MSG:
            return {
                ...state,
                msg: action.msg
            };
        case actionType.SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case actionType.GET_LIST:
            return {
                ...state,
                tagList: action.payload
            };
        default:
            return state;
    }
}

export function add_tag (obj) {

    const _name = obj.name ? '/' + obj.name: '';

    if (!_name) {
        return actions.get_errorMsg('Please fill in the required filed')
    }

    return dispatch => {
        axios.post('/tag' + _name, obj).then(res => {

            if (res.status === 200 && res.data.code === 0) {

                dispatch(actions.set_tag(res.data.data));
            }else {

                dispatch(actions.get_errorMsg(res.data.msg));
            }
        })
    }
}

export function update_tag (obj) {
    const _removedId = obj._id;
    return dispatch => {
        axios.post('/tag/update/' + _removedId, obj).then(res => {
            if (res.status === 200 && res.data.code === 0) {

                dispatch(actions.set_tag(res.data.data));
            }else {

                dispatch(actions.get_errorMsg(res.data.msg));
            }
        })
    }
}

export function get_tags () {

    return dispatch => {
        axios.get('/tag/list').then(res => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(actions.get_list(res.data.data));
            }else {
                dispatch(actions.get_errorMsg(res.data.msg));
            }
        })
    }
}
