import {
	LOGIN,
	FAILED_LOGIN,
	SUCCESS_LOGIN,
} from './types';

import firebase from 'firebase';

// Auth...
const successLogin = user		=> ({ type: SUCCESS_LOGIN });
const failedLogin = ({message})	=> ({ type: FAILED_LOGIN, message });

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
