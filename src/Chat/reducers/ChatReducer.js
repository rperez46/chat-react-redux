
import {
	MESSAGE_SENT,
	UPDATE_MESSAGES,
	CONNECT_TO_CHAT,
	UPDATE_CHAT_INPUT,
	UPDATE_ONLINE_USERS,
	DISCONNECTED_FROM_CHAT
} from '../actions/types';


const INITIAL_STATE = {
	input:		'',
	chatRef:	undefined,
	chatName:	'',
	messages:	[],
	onlineUsers: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type)  {
		case CONNECT_TO_CHAT:
			return {...state, chatRef: action.chatRef, sessionKey: action.sessionKey, chatName: action.chatName};
		case DISCONNECTED_FROM_CHAT:
			return {...INITIAL_STATE};
		case UPDATE_CHAT_INPUT:
			return {...state, input: action.text};
		case UPDATE_MESSAGES:
			return {...state, messages: action.messages};
		case MESSAGE_SENT:
			return {...state, input: ''};
		case UPDATE_ONLINE_USERS:
			return {...state, onlineUsers: action.onlineUsers}
		default:
			return state;
	}
};