import {LOGIN, SUCCESS_LOGIN, UPDATE_USERNAME, UPDATE_PASSWORD} from './types';

const successLogin = () => {
	return {
		type: SUCCESS_LOGIN
	};
};

export const login = (username, password) => {
	return dispatch => {
		dispatch({
			type: LOGIN
		});
		console.log(username, password);
		setTimeout(() => {
			dispatch( successLogin() );
		}, 1000);
	};
};

export const updateUsername = (text) => {
	return {
		type: UPDATE_USERNAME,
		text
	};
};

export const updatePassword = (text) => {
	return {
		type: UPDATE_PASSWORD,
		text
	};
};
