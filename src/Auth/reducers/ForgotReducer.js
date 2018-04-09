import {
	FORGOT_PASSWORD,
	FORGOT_EMAIL_CHANGE,
	FAILED_RESET_PASSWORD,
	SUCCESS_RESET_PASSWORD
} from '../actions/types';

const INITIAL_STATE = {
	error:			'',
	mailWasSent:	false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FORGOT_EMAIL_CHANGE:
			return {...state, email: action.text};
		case FORGOT_PASSWORD:
			return {...state, error: ''};
		case SUCCESS_RESET_PASSWORD:
			return {...state, mailWasSent: true};
		case FAILED_RESET_PASSWORD:
			return {...state, error: action.message};
		default:
			return state;
	}
};