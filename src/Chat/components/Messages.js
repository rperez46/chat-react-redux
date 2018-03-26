import React, {Component}	from 'react';
import {connect}			from 'react-redux';
import {subscribeToChat}	from '../actions';
import {
	Grid,
	Segment,
} from 'semantic-ui-react';

class Messages extends Component {
	componentDidMount() {
		const {chatRoom} = this.props.match.params;

		const room = this.props.rooms.find(x => x.url === chatRoom);
		if (room)
			this.props.subscribeToChat( room.url );
	}
	componentWillUnmount() {

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
	messages:	state.Chat.Chat.messages
}), {subscribeToChat})(Messages);