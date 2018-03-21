import {
	LOGIN,
	UPDATE_EMAIL,
	FAILED_LOGIN,
	SUCCESS_LOGIN,
	UPDATE_PASSWORD
} from './types';

import firebase from 'firebase';

const successLogin = (user) => {
	return {
		type: SUCCESS_LOGIN
	};
};
const failedLogin = ({message}) => {
	return {
		type: FAILED_LOGIN,
		message
	};
};

export const login = (email, password) => {
	return dispatch => {
		dispatch({
			type: LOGIN
		});
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(user => dispatch(successLogin(user)))
			.catch((response) => dispatch(failedLogin(response)))

	};
};

export const updateEmail = (text) => {
	return {
		type: UPDATE_EMAIL,
		text
	};
};

export const updatePassword = (text) => {
	return {
		type: UPDATE_PASSWORD,
		text
	};
};
