import React, {Component}	from 'react';
import {connect}	from 'react-redux';
import {Redirect, Route}	from 'react-router';
import {Grid}		from 'semantic-ui-react';
import Messages		from './Messages';
import ChatRooms	from './ChatRooms';
import ListOfUsers	from './ListOfUsers';

class Chat extends Component {
	redirectOnLogout() {
		if (!this.props.isAuthenticated) {
			return <Redirect to="/" />;
		}
	}
	render() {
		return (
			<Grid centered>
				<Grid.Column width={6}>
					{this.redirectOnLogout()}
					<Route exact path="/home" component={ChatRooms} />
					<Route exact path="/home/:chatRoom" component={ListOfUsers} />
				</Grid.Column>
				<Grid.Column width={10}>
					<Route exact path="/home/:chatRoom" component={Messages} />
				</Grid.Column>
			</Grid>
		);
	}
}

export default connect(state => ({
	isAuthenticated: state.Auth.Login.isAuthenticated
}))(Chat);