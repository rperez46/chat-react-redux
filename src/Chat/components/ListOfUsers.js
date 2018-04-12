import React, {Component}	from 'react';
import {connect}		from 'react-redux';
import {Grid, Segment} from 'semantic-ui-react';

import {loadUsers} from '../actions'
import {withTheme} from '../../ThemeContext';


class ListOfUsers extends Component {
	componentDidMount() {
		const {chatName, loadUsers} = this.props;
		if (chatName) {
			loadUsers(chatName);
		}
	}
	componentDidUpdate(prevProps) {
		if (prevProps.chatName !== this.props.chatName) {
			this.props.loadUsers(this.props.chatName);
		}
	}
	renderUser(user, index) {
		const {tag} = this.props;
		return (
			<Segment style={tag} key={`user-${index}`}>
				{user.email}
			</Segment>
		);
	}
	renderUsers(users) {
		const result = [];
		for (const key in users) {
			result.push(this.renderUser(users[key], key));
		}
		return result;
	}
	render() {
		const {users} = this.props;
		return (
			<Grid columns={1}>
				<Grid.Row>
					<Grid.Column>
						Usuarios en la sala:
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						{this.renderUsers(users)}
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default connect(state => ({
	users:		state.Chat.Chat.onlineUsers,
	chatName:	state.Chat.Chat.chatName
}),{loadUsers})(withTheme(ListOfUsers));