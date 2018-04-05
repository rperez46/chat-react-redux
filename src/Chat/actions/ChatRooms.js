import firebase from 'firebase';
import {
	MESSAGE_SENT,
	LOAD_CHAT_ROOMS,
	CONNECT_TO_CHAT,
	UPDATE_MESSAGES,
	UPDATE_ONLINE_USERS,
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

export const subscribeToChat = (chatName, userEmail) => {
	return dispatch => {
		const chatRef = firebase
			.database()
			.ref('chat/' + chatName + '/messages');

		connectToChat(chatName, userEmail, chatRef, dispatch);

		chatRef.on('value', snapshot => {
			const messages = snapshot.val() ? snapshot.val() : [];
			dispatch({ type: UPDATE_MESSAGES, messages });
		});
	};
};
export const unsubscribeToChat = (chatRef, chatName, sessionKey) => {
	chatRef.off();

	if (sessionKey) {
		firebase
			.database()
			.ref('chat/' + chatName + '/users/' + sessionKey)
			.remove();
	}

	return { type: DISCONNECTED_FROM_CHAT };
}

export const sendMessage = (chatRef, message, email, dispatch) => {
	return dispatch => {
		chatRef.push({ message, from: email });
		dispatch({ type: MESSAGE_SENT });
	};
};
export const loadUsers = (chatName) => {
	return dispatch => {
		firebase
			.database()
			.ref('chat/' + chatName + '/users')
			.on('value', snapshot => {
				dispatch({type: UPDATE_ONLINE_USERS, onlineUsers: snapshot.val() });
			});
	};

};
const connectToChat = (chatName, userEmail, chatRef, dispatch) => {
	const onlineUsersRef = firebase
		.database()
		.ref('chat/' + chatName + '/users');

	onlineUsersRef
		.orderByChild('email')
		.equalTo(userEmail)
		.once('value')
		.then((snapshot) => {

			deleteOldSessions(snapshot.val(), onlineUsersRef);

			dispatch({
				type: CONNECT_TO_CHAT,
				chatRef,
				chatName,
				sessionKey: onlineUsersRef.push({ email: userEmail }).key
			});
		});
};
const deleteOldSessions = (users, ref) => {
	if (users) {
		Object.keys(users).map(key => {
			users[key] = null;
			return users[key];
		});
		ref.update( users );
	}
}