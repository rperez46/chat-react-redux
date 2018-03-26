import { combineReducers } from 'redux';

import ChatRoomsReducer from './ChatRoomsReducer';

export default combineReducers({
	Rooms: ChatRoomsReducer
});
