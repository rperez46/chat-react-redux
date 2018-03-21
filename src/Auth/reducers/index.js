import {
	LOGIN,
	UPDATE_EMAIL,
	FAILED_LOGIN,
	SUCCESS_LOGIN,
	UPDATE_PASSWORD
} from '../actions/types'

const INITIAL_STATE = {
	email: '',
	password: '',
	loading: false,
	error: ''
};

export const AuthReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UPDATE_EMAIL:
			return {...state, email: action.text};
		case UPDATE_PASSWORD:
			return {...state, password: action.text};
		case LOGIN:
			return {...state, loading: true, error:''};
		case SUCCESS_LOGIN:
			return {...state, loading: false, email: '', password: ''}
		case FAILED_LOGIN:
			return {...state, loading: false, password: '', error: action.message}
		default:
			return state;
	}
};

export default AuthReducer;
