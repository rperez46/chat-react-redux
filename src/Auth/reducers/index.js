import {LOGIN, SUCCESS_LOGIN, UPDATE_USERNAME, UPDATE_PASSWORD} from '../actions/types'
const INITIAL_STATE = {
	username: '',
	password: '',
	loading: false
};

export const AuthReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UPDATE_USERNAME:
			return {...state, username: action.text};
		case UPDATE_PASSWORD:
			return {...state, password: action.text};
		case LOGIN:
			return {...state, loading: true};
		case SUCCESS_LOGIN:
			return {...state, loading: false, username: '', password: ''}
		default:
			return state;
	}
};

export default AuthReducer;
