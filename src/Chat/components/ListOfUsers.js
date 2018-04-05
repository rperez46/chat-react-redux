import React, {Component}	from 'react';
import {connect}		from 'react-redux';
import {Link}			from 'react-router-dom';
import {Button, Grid, Segment} from 'semantic-ui-react';

import {loadUsers} from '../actions'


class ListOfUsers extends Component {
	componentDidMount() {
		const {chatName, loadUsers} = this.props;
		if (chatName) {
			loadUsers(chatName);
		}
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.chatName !== this.props.chatName) {
			this.props.loadUsers(nextProps.chatName);
		}
	}
	renderUser(user, index) {
		return (
			<Segment key={`user-${index}`}>
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
		const {users, chatName} = this.props;

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
}),{loadUsers})(ListOfUsers);