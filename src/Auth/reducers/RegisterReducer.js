import {
	UPDATE_EMAIL,
	UPDATE_PASSWORD,
	UPDATE_USERNAME,
	UPDATE_REPASSWORD
} from '../actions/types';


const INITIAL_STATE = {
	email:		'',
	username:	'',
	password:	'',
	rePassword:	'',
	passwordIsRePassword: true
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UPDATE_EMAIL:
			return { ...state, email: action.text };
		case UPDATE_USERNAME:
			return { ...state, username: action.text };
		case UPDATE_PASSWORD:
			return { ...state, password: action.text, passwordIsRePassword: state.rePassword === action.text };
		case UPDATE_REPASSWORD:
			return { ...state, rePassword: action.text, passwordIsRePassword: state.password === action.text };

		default:
			return state;
	}
};

