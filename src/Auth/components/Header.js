import React, {Component}	from 'react';
import {connect}	from 'react-redux';
import {Menu, Icon, Dropdown} from 'semantic-ui-react';
import {logout} from '../actions';

class Header extends Component {
	render() {
		const {user} = this.props;
		if (!this.props.isAuthenticated) {
			return false;
		}
		return (
			<Menu inverted>
				<Menu.Item>
					<Icon name="user" />
					{user.email}
				</Menu.Item>
				
				<Menu.Menu position='right'>
					<Dropdown direction="right" item simple text='Menu'>
						<Dropdown.Menu>
							<Dropdown.Item onClick={this.props.logout}>
								<Icon name="log out" />
								Logout
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Menu.Menu>
			</Menu>
		);
	}
}
export default connect(state => ({
	user: state.Auth.User,
	isAuthenticated: state.Auth.Login.isAuthenticated
}), {logout})(Header);