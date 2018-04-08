import {UPDATE_USER, LOAD_USER} from '../actions/types';
const INITIAL_STATE = {
	alias:			'',
	email:			'',
	description:	'',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UPDATE_USER:
			return {...state, alias: action.alias, description: action.description, email: action.email};
		case LOAD_USER:
			return {...state, alias: action.alias, description: action.description, email: action.email};
		default:
			return state;
	}
}