import firebase from 'firebase';
import {LOAD_CHAT_ROOMS, CONNECT_TO_CHAT, UPDATE_MESSAGES} from './types';

export const LoadChatRooms = () => {
	return dispatch => {
		firebase
			.database()
			.ref('chatRooms')
			.once('value')
			.then(snapshot => dispatch({ type: LOAD_CHAT_ROOMS, elements: snapshot.val() }));
	};
};

export const subscribeToChat = chatName => {
	return dispatch => {
		const chatRef = firebase
			.database()
			.ref('chat/' + chatName);
		dispatch({ type: CONNECT_TO_CHAT, chatRef });

		chatRef.on('value', snapshot => {
			dispatch({ type: UPDATE_MESSAGES, messages: snapshot.val() });
		});
	};
};

export const sendMessage = (chatRef, message) => {
	return dispatch => {
		//chatRef.transaction
	};
};