import { Gun } from './const.redux';

export function Counter (state=10, action) {
	switch(action.type){
		case Gun.add:
			return state+1;

		case Gun.remove:
			return state-1;

		default:
			return state
	}
}

export function addGun(){
	return {type: Gun.add}
}

export function removeGun() {
	return {type: Gun.remove}
}

export function addGunAsync() {
	return dispatch=>{
		setTimeout(()=>{
			dispatch(addGun())
		}, 2000)
	}
}
