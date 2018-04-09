import {
	LOGIN,
	USER_LOGOUT,
	FAILED_LOGIN,
	SUCCESS_LOGIN,
	REQUIRE_EMAIL_VERIFICATION

} from '../actions/types';


const INITIAL_STATE = {
	error:		'',
	loading:	false,

	isAuthenticated: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type)  {
		case LOGIN:
			return {...state, loading: true, error:''};
		case SUCCESS_LOGIN:
			return {...state, loading: false, email: '', password: '', isAuthenticated: true}
		case FAILED_LOGIN:
			return {...state, loading: false, password: '', error: action.message}
		case USER_LOGOUT:
			return {...INITIAL_STATE};
		case REQUIRE_EMAIL_VERIFICATION:
			return {...state, loading: false, password: ''};
		default:
			return state;
	}
};