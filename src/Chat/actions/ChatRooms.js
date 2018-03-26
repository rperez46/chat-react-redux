import firebase from 'firebase';
import {
	MESSAGE_SENT,
	LOAD_CHAT_ROOMS,
	CONNECT_TO_CHAT,
	UPDATE_MESSAGES,
	DISCONNECTED_FROM_CHAT
	} from './types';

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
			const messages = snapshot.val() ? snapshot.val() : [];
			dispatch({ type: UPDATE_MESSAGES, messages });
		});
	};
};
export const unsubscribeToChat = chatRef => {
	chatRef.off();
	return { type: DISCONNECTED_FROM_CHAT };
}

export const sendMessage = (chatRef, message, email) => {
	return dispatch => {
		chatRef.push({ message, from: email });
		dispatch({ type: MESSAGE_SENT });
	};
};