import { combineReducers } from 'redux';

import LoginReducer			from './LoginReducer';
import ForgotReducer		from './ForgotReducer';
import RegisterReducer		from './RegisterReducer';
import VerificationReducer	from './VerificationReducer';

export default combineReducers({
	Login:			LoginReducer,
	Forgot:			ForgotReducer,
	Register:		RegisterReducer,
	Verification:	VerificationReducer,
});
