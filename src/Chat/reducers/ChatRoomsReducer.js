
import {
	LOAD_CHAT_ROOMS,
} from '../actions/types';


const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
	switch (action.type)  {
		case LOAD_CHAT_ROOMS:
			return [...action.elements];
		default:
			return state;
	}
};