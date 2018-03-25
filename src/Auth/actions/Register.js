import {
	REGISTER_USER,
	FAILED_REGISTER,
	SUCCESS_REGISTER,
	UPDATE_REGISTER_PASSWORD
} from './types';
import firebase from 'firebase';

const failed	= ({message}) => ({ type: FAILED_REGISTER, message });
const success	= user => ({ type: SUCCESS_REGISTER, user });

export const updateRegisterPassword	= text => ({ type: UPDATE_REGISTER_PASSWORD,	text });
export const RegisterUser = (email, password) => {
	return dispatch => {
		dispatch({ type: REGISTER_USER });
		firebase.auth()
			.createUserAndRetrieveDataWithEmailAndPassword( email, password )
			.then(user => dispatch(success(user)))
			.catch(error => dispatch(failed(error)));
	};
};

