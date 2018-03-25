import {
	UPDATE_EMAIL,
	UPDATE_USERNAME,
	UPDATE_REPASSWORD,
	UPDATE_REGISTER_PASSWORD,

	REGISTER_USER,
 	FAILED_REGISTER,
	SUCCESS_REGISTER
} from '../actions/types';


const INITIAL_STATE = {
	error:		'',
	email:		'',
	loading:	false,
	username:	'',
	password:	'',
	rePassword:	'',
	successRegister: false,
	passwordIsRePassword: true
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UPDATE_EMAIL:
			return { ...state, email: action.text, error: '' };
		case UPDATE_USERNAME:
			return { ...state, username: action.text };
		case UPDATE_REGISTER_PASSWORD:
			return { ...state, password: action.text, passwordIsRePassword: state.rePassword === action.text };
		case UPDATE_REPASSWORD:
			return { ...state, rePassword: action.text, passwordIsRePassword: state.password === action.text };

		case REGISTER_USER:
			return { ...state, loading: true, error: '' };
		case FAILED_REGISTER:
			return { ...INITIAL_STATE, error: action.message };
		case SUCCESS_REGISTER:
			return { ...INITIAL_STATE, successRegister: true };
		default:
			return state;
	}
};

