import firebase from 'firebase';
import {LOAD_CHAT_ROOMS} from './types';

export const LoadChatRooms = () => {
	return dispatch => {
		firebase
			.database()
			.ref('chatRooms')
			.once('value')
			.then(snapshot => dispatch({ type: LOAD_CHAT_ROOMS, elements: snapshot.val() }));
	};
};
