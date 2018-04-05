import React, {Component}	from 'react';
import {connect}	from 'react-redux';
import {Redirect, Route}	from 'react-router';
import {Grid}		from 'semantic-ui-react';
import Messages		from './Messages';
import ChatRooms	from './ChatRooms';
import ListOfUsers	from './ListOfUsers';
import Capture		from './Capture';
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
					<Route path="/home" component={ChatRooms} />
					<Route exact path="/home/:chatRoom" component={ListOfUsers} />
				</Grid.Column>
				<Grid.Column width={10}>
					<Route exact path="/home/:chatRoom" component={Messages} />
					<Route exact path="/home/:chatRoom" component={Capture} />
				</Grid.Column>
			</Grid>
		);
	}
}

export default connect(state => ({
	isAuthenticated: state.Auth.Login.isAuthenticated
}))(Chat);