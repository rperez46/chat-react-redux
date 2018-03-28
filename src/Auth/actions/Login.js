import {
	LOGIN,
	USER_LOGOUT,
	FAILED_LOGIN,
	SUCCESS_LOGIN,
	REQUIRE_EMAIL_VERIFICATION
} from './types';

import firebase from 'firebase';

const successLogin = (user, dispatch) => {
	if (user.emailVerified) {
		createOnLogoutListener(dispatch);
		return { type: SUCCESS_LOGIN, user };
	}
	return { type: REQUIRE_EMAIL_VERIFICATION };
};
const failedLogin = ({message})	=> ({ type: FAILED_LOGIN, message });
const createOnLogoutListener = (dispatch) => {
	firebase.auth().onAuthStateChanged(user => {
		if (!user) {
			dispatch({ type: USER_LOGOUT });
		}
	});
}
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
