import { combineReducers } from 'redux';

import ChatRoomsReducer from './ChatRoomsReducer';
import ChatReducer from './ChatReducer';

export default combineReducers({
	Chat:	ChatReducer,
	Rooms:	ChatRoomsReducer,
});
