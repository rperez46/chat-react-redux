import {
	REGISTER_USER,
	FAILED_REGISTER,
	SUCCESS_REGISTER
} from './types';
import firebase from 'firebase';
import { toast } from 'react-toastify';

const failed	= ({message}) => ({ type: FAILED_REGISTER, message });
const success	= user => {
	toast.success("A confirmation email has been sent to your email");
	return { type: SUCCESS_REGISTER, user };
};

export const RegisterUser = (email, password) => {
	return dispatch => {
		dispatch({ type: REGISTER_USER });
		firebase.auth()
			.createUserAndRetrieveDataWithEmailAndPassword( email, password )
			.then(user => dispatch(success(user)))
			.catch(error => dispatch(failed(error)));
	};
};

