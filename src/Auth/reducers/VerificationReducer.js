import {
	FAILED_LOGIN,
	SUCCESS_LOGIN,

	VERIFICATION_MAIL_SENT,
	VERIFICATION_MAIL_FAILED,
	REQUIRE_EMAIL_VERIFICATION,
	TRY_SENT_EMAIL_VERIFICATION
} from '../actions/types';


const INITIAL_STATE = {
	loading: false,
	isEmailSent: false,
	requireEmailVerification: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type)  {
		case REQUIRE_EMAIL_VERIFICATION:
			return {...state, requireEmailVerification: true};
		case TRY_SENT_EMAIL_VERIFICATION:
			return {...state, loading: true};
		case VERIFICATION_MAIL_SENT:
			return {...state, loading: false, isEmailSent: true, requireEmailVerification: false};
		case VERIFICATION_MAIL_FAILED:
			return {...state, loading: false};
		case FAILED_LOGIN:
		case SUCCESS_LOGIN:
			return {...INITIAL_STATE};
		default:
			return state;
	}
};