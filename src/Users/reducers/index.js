import {UPDATE_USER, LOAD_USER, CREATE_USER_DATA} from '../actions/types';
import {USER_LOGOUT} from '../../Auth/actions/types';

const INITIAL_STATE = {
	id:				'',
	alias:			'',
	email:			'',
	description:	'',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UPDATE_USER:
			return {...state, alias: action.alias, id: action.id, description: action.description, email: action.email};
		case LOAD_USER:
			return {...state, alias: action.alias, id: action.id, description: action.description, email: action.email};
		case CREATE_USER_DATA:
			return {...state, email: action.email, id: action.id};
		case USER_LOGOUT:
			return {...INITIAL_STATE};
		default:
			return state;
	}
}