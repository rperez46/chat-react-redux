import React, {Component}	from 'react';
import {connect}			from 'react-redux';
import {subscribeToChat, unsubscribeToChat}	from '../actions';
import {
	Grid,
	Segment,
} from 'semantic-ui-react';

class Messages extends Component {
	componentDidMount() {
		this.subscribeToChat(this.props.match.params.chatRoom);
	}
	componentWillUnmount() {
		this.unsubscribeToChat();
	}
	componentWillReceiveProps(nextProps) {
		const oldChatRoom = this.props.match.params.chatRoom;
		const newChatRoom = nextProps.match.params.chatRoom;
		if (oldChatRoom !== newChatRoom) {
			this.unsubscribeToChat(this.props.chatRef);
			this.subscribeToChat(newChatRoom);
		}
	}
	componentDidUpdate() {
		const grid = document.getElementById('messageGrid');
		grid.scrollTop = grid.scrollHeight;
	}
	subscribeToChat(chatRoom) {
		const room = this.props.rooms.find(x => x.url === chatRoom);
		if (room)
			this.props.subscribeToChat( room.url, this.props.user.email );
	}
	unsubscribeToChat() {
		if (this.props.chatRef) {
			this.props.unsubscribeToChat(
				this.props.chatRef,
				this.props.usersRef,
				this.props.chatName,
				this.props.sessionKey
			);
		}
	}
	renderMessage(message, index) {
		let messageSettings = { align: 'left', color: 'blue' };
		if (message.from === this.props.user.email) {
			messageSettings = { align: 'right', color: 'green' };
		}

		return (
			<Grid.Row key={'chatMessage' + index}>
				<Grid.Column floated={messageSettings.align}>
					<Segment color={messageSettings.color}>
						<b>{message.from}</b> <hr/>
						{message.message}
					</Segment>
				</Grid.Column>
			</Grid.Row>
		);
	}
	renderMessages() {
		const messages = {...this.props.messages};
		const result = [];
		for (const key in messages) {
			result.push(this.renderMessage(messages[key], key));
		}
		return result;
	}
	render() {
		return (
			<Grid id="messageGrid" className="messageGrid" columns={2}>
				{this.renderMessages()}
			</Grid>
		);
	}
}

export default connect(state => ({
	user:		state.Auth.User,
	rooms:		state.Chat.Rooms,
	chatRef:	state.Chat.Chat.chatRef,
	usersRef:	state.Chat.Chat.usersRef,
	chatName:	state.Chat.Chat.chatName,
	messages:	state.Chat.Chat.messages,
	sessionKey:	state.Chat.Chat.sessionKey
}), {subscribeToChat, unsubscribeToChat})(Messages);