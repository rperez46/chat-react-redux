import React, {Component}	from 'react';
import {connect}	from 'react-redux';
import {Button} from 'semantic-ui-react';
import {logout} from '../actions';

class Header extends Component {
	render() {
		const {user} = this.props;
		if (!this.props.isAuthenticated) {
			return false;
		}
		return (
			<div>
				{user.email}
				<Button onClick={this.props.logout}>
					Logout
				</Button>
			</div>
		);
	}
}
export default connect(state => ({
	user: state.User,
	isAuthenticated: state.Login.isAuthenticated
}), {logout})(Header);