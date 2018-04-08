import {UPDATE_USER, LOAD_USER} from './types';
import firebase		from 'firebase';
import { toast }	from 'react-toastify';

export const loadUserData = () => {
	return dispatch => {
		const {uid} = firebase.auth().currentUser;
		firebase
			.database()
			.ref('users/' + uid)
			.once('value')
			.then(snapshot => {
				console.log(snapshot.val())
				dispatch({type: LOAD_USER, ...snapshot.val() });
			});
	};
}; 
export const updateUser = (alias, description) => {
	const {uid, email} = firebase.auth().currentUser;
	firebase
		.database()
		.ref('users/' + uid)
		.set({ alias, description, email});

	toast.success("Changes saved.");
	return {type: UPDATE_USER, alias, description};
};