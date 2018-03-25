import {
	LOGIN,
	USER_LOGOUT,
	FAILED_LOGIN,
	SUCCESS_LOGIN,
} from './types';

import firebase from 'firebase';

const successLogin = (user, dispatch) => {
	createOnLogoutListener(dispatch);
	return { type: SUCCESS_LOGIN, user };
};
const failedLogin = ({message})	=> ({ type: FAILED_LOGIN, message });

export const login = (email, password) => {
	return dispatch => {
		dispatch({
			type: LOGIN
		});
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(user => dispatch(successLogin(user, dispatch)))
			.catch((response) => dispatch(failedLogin(response)))

	};
};
export const logout = () => {
	return dispatch => {
		firebase
			.auth()
			.signOut()
			.then(() => dispatch({ type: USER_LOGOUT }))
	};
};
const createOnLogoutListener = (dispatch) => {
	firebase.auth().onAuthStateChanged(user => {
		if (!user) {
			dispatch({ type: USER_LOGOUT });
		}
	});
}