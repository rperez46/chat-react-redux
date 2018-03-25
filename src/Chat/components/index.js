import React, {Component}	from 'react';
import {connect}	from 'react-redux';
import {Redirect}	from 'react-router';
import {Grid}		from 'semantic-ui-react';
import Messages		from './Messages';
import ListOfUsers	from './ListOfUsers';

class Chat extends Component {
	redirectOnLogout() {
		if (!this.props.isAuthenticated) {
			return <Redirect to="/" />;
		}
	}
	render() {
		return (
			<Grid columns={2} centered>
				<Grid.Column>
					{this.redirectOnLogout()}
					<ListOfUsers />
				</Grid.Column>
				<Grid.Column>
					<Messages />
				</Grid.Column>
			</Grid>
		);
	}
}

export default connect(state => ({
	isAuthenticated: state.Login.isAuthenticated
}))(Chat);