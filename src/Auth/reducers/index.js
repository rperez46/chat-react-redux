import { combineReducers } from 'redux';

import UserReducer			from './UserReducer';
import LoginReducer			from './LoginReducer';
import ForgotReducer		from './ForgotReducer';
import RegisterReducer		from './RegisterReducer';
import VerificationReducer	from './VerificationReducer';

export default combineReducers({
	User:			UserReducer,
	Login:			LoginReducer,
	Forgot:			ForgotReducer,
	Register:		RegisterReducer,
	Verification:	VerificationReducer,
});
