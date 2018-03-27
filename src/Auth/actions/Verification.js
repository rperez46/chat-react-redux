import {
	VERIFICATION_MAIL_SENT,
	VERIFICATION_MAIL_FAILED
} from './types';

import firebase from 'firebase';

export const sendActivationMail = () => {
	return dispatch => {
		firebase
			.auth()
			.currentUser
			.sendEmailVerification()
			.then(() => dispatch({type: VERIFICATION_MAIL_SENT }))
			.catch(() => dispatch({type: VERIFICATION_MAIL_FAILED }));
	};

};