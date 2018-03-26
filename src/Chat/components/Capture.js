import React, {Component}	from 'react';
import {connect}			from 'react-redux';
import {
	Input,
	Button,
	Segment
} from 'semantic-ui-react';
import {updateChatInput, sendMessage} from '../actions';

class Capture extends Component {
	sendMessage() {
		const {input, chatRef} = this.props;
		if (chatRef && input) {
			this.props.sendMessage( chatRef, input );
		}
	}
	render() {
		return (
			<Segment>
				<Input
					value		= {this.props.input}
					onChange	= {this.props.updateChatInput}
					placeholder	= "Write something..."
				/>
				<Button onClick={this.sendMessage.bind(this)}>
					Enviar
				</Button>
			</Segment>
		);
	}
}

export default connect(state => ({
	input:		state.Chat.input,
	chatRef:	state.Chat.chatRef
}), {updateChatInput, sendMessage})(Capture); 