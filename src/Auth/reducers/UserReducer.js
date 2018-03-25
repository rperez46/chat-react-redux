import {SUCCESS_LOGIN} from '../actions/types';

const INITIAL_STATE = {
	id:		'',
	name:	'',
	email:	''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SUCCESS_LOGIN:
			return {
				...state,
				id:		action.user.uid,
				name:	action.user.displayName,
				email:	action.user.email
			};
		default:
			return state;
	}
};