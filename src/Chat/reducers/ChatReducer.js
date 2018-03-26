
import {
	UPDATE_MESSAGES,
	CONNECT_TO_CHAT,
	UPDATE_CHAT_INPUT
} from '../actions/types';


const INITIAL_STATE = {
	input:		'',
	chatRef:	undefined,
	messages:	[]
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type)  {
		case CONNECT_TO_CHAT:
			return {...state, chatRef: action.chatRef};
		case UPDATE_CHAT_INPUT:
			return {...state, input: action.text}
		case UPDATE_MESSAGES:
			return {...state, messages: action.messages}
		default:
			return state;
	}
};