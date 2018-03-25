import { combineReducers } from 'redux';

import UserReducer		from './UserReducer';
import LoginReducer		from './LoginReducer';
import RegisterReducer	from './RegisterReducer';

export default combineReducers({
	User:		UserReducer,
	Login:		LoginReducer,
	Register:	RegisterReducer
});





