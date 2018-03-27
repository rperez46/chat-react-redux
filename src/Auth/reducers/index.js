import { combineReducers } from 'redux';

import UserReducer			from './UserReducer';
import LoginReducer			from './LoginReducer';
import RegisterReducer		from './RegisterReducer';
import VerificationReducer	from './VerificationReducer';

export default combineReducers({
	User:			UserReducer,
	Login:			LoginReducer,
	Register:		RegisterReducer,
	Verification:	VerificationReducer
});





