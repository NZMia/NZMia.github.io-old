import axios from 'axios';

const initalState = {
    name: '',
    authUser: ''
}

export const actionType = {
    
    ERROR_MSG: 'ERROR_MSG',
    ADD_SUCCESS: 'ADD_SUCCESS'
}

export const actions = {
    get_errorMsg: function(msg) {
        return { type:actionType.ERROR_MSG, msg:msg}
    },

    get_tag: function(obj) {
       
    },

    set_tag: function(obj) {
        const { inputVisible, ...data } = obj;
        console.log(data);
        return { type:actionType.ADD_SUCCESS, payload: data}
    }
}

export function tag(state = initalState, action) {
    switch(action.type) {
        case actionType.ERROR_MSG:
            return {
                ...state,
                msg: action.msg
            };
       case actionType.ADD_SUCCESS:
            return {
                ...state,
                ...action.payload
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

    // return dispatch => {
    //     axios.get('me'+ _id).then(res => {

    //         if (res.status === 200 && res.data.code === 0) {
    //             dispatch(actions.get_user(res.data.data));
    //         }else {
            
    //             this.history.push('/checkin');
    //             dispatch(actions.get_errorMsg(res.data.msg));
    //         }
    //     })
    // }

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