import React, {Component}	from 'react';
import {connect}			from 'react-redux';
import {
	Input,
	Button,
	Segment
} from 'semantic-ui-react';
import {updateChatInput, sendMessage} from '../actions';
import {withTheme} from '../../ThemeContext';

class Capture extends Component {
	getUserAlias() { return this.props.user.alias ? this.props.user.alias : this.props.user.email; }

	sendMessage() {
		const {input, chatRef, user} = this.props;
		if (chatRef && input) {
			this.props.sendMessage( chatRef, input, this.getUserAlias(), user.id );
		}
	}
	keyDown(e) {
		if (e.keyCode === 13)
			return this.sendMessage();
	}
	render() {
		const {buttonStyle} = this.props;
		return (
			<Segment>
				<Input
					value		= {this.props.input}
					onChange	= {e => this.props.updateChatInput(e.target.value)}
					onKeyDown	= {this.keyDown.bind(this)}
					placeholder	= "Write something..."
				/>
				<Button stlye={buttonStyle} onClick={this.sendMessage.bind(this)}>
					Enviar
				</Button>
			</Segment>
		);
	}
}

export default connect(state => ({
	user:		state.User,
	input:		state.Chat.Chat.input,
	chatRef:	state.Chat.Chat.chatRef
}), {updateChatInput, sendMessage})(withTheme(Capture)); 