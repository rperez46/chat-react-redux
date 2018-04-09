import {
	REGISTER_USER,
 	FAILED_REGISTER,
	SUCCESS_REGISTER
} from '../actions/types';


const INITIAL_STATE = {
	error:		'',
	loading:	false,
	successRegister: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
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

