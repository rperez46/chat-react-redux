import {UPDATE_USER, LOAD_USER, CREATE_USER_DATA} from './types';
import firebase		from 'firebase';
import { toast }	from 'react-toastify';

export const loadUserData = () => {
	return dispatch => {
		const currentUser = firebase.auth().currentUser;
		if (currentUser) {
			firebase
				.database()
				.ref('users/' + currentUser.uid)
				.once('value')
				.then(snapshot => {
					if (snapshot.val() === null) {
						return dispatch(createUserInfo());
					}
					dispatch({type: LOAD_USER, ...snapshot.val(), id: currentUser.uid});
				});
		}
	};
}; 

export const createUserInfo = () => {
	const {uid, email} = firebase.auth().currentUser;
	firebase
		.database()
		.ref('users/' + uid)
		.set({email});

	return {type: CREATE_USER_DATA, email, id: uid};
}
export const updateUser = (alias, description) => {
	const {uid, email} = firebase.auth().currentUser;
	firebase
		.database()
		.ref('users/' + uid)
		.set({ alias, description, email});

	toast.success("Changes saved.");
	return {type: UPDATE_USER, alias, description, email, id: uid};
};