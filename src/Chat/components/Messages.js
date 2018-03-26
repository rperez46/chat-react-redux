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
	subscribeToChat(chatRoom) {
		const room = this.props.rooms.find(x => x.url === chatRoom);
		if (room)
			this.props.subscribeToChat( room.url );
	}
	unsubscribeToChat() {
		if (this.props.chatRef) {
			this.props.unsubscribeToChat( this.props.chatRef );
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
	render() {
		return (
			<Grid columns={2}>
				{this.props.messages.map(this.renderMessage.bind(this))}
			</Grid>
		);
	}
}

export default connect(state => ({
	user:		state.Auth.User,
	rooms:		state.Chat.Rooms,
	chatRef:	state.Chat.Chat.chatRef,
	messages:	state.Chat.Chat.messages
}), {subscribeToChat, unsubscribeToChat})(Messages);