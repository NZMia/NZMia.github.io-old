import axios from 'axios';
import { AuthState } from './const.redux';

const initState = {
    isAuth:false,
    user:'Mia',
    age:20
};

export function Auth(state=initState,action){

    switch(action.type){

        case AuthState.login:
            return {...state, isAuth:true};

        case AuthState.logout:
            return {...state, isAuth:false};

        case AuthState.userData:
            return {...state, user:action.payload.user,age:action.payload.age};

        default:
            return state
    }
}
// action
export function userData(data){
    return {type: AuthState.userData, payload:data}
}

export function login(){
    return {type: AuthState.login}
}

export function logout(){
    return {type: AuthState.logout}
}

export function getUserData(){

    return  dispatch=>{

        axios.get('/myAuth').then(res=>{

            console.log(res);
            if (res.status===200) {
                dispatch(userData(res.data))
            }
        })
    }
}
