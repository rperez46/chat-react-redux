import {
	FORGOT_PASSWORD,
	FORGOT_EMAIL_CHANGE,
	FAILED_RESET_PASSWORD,
	SUCCESS_RESET_PASSWORD
} from './types';

import firebase from 'firebase';

export const forgotEmailChange = (text) => ({ type: FORGOT_EMAIL_CHANGE, text });
export const forgotPassword = (email) => {
	return dispatch => {
		dispatch({ type: FORGOT_PASSWORD });
		firebase
			.auth()
			.sendPasswordResetEmail(email)
			.then(() => dispatch({ type: SUCCESS_RESET_PASSWORD }))
			.catch(({message}) => dispatch({ type: FAILED_RESET_PASSWORD, message }));
	};
};