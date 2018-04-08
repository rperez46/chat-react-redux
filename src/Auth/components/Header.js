import React, {Component}	from 'react';
import {connect}	from 'react-redux';
import { Link } from 'react-router-dom'
import {Menu, Icon, Dropdown} from 'semantic-ui-react';
import {logout}		from '../actions';
import {Redirect}	from 'react-router';
import {routsThanDontRequiereAuth} from '../../Config/routesConfig';

class Header extends Component {
	render() {
		const {user} = this.props;
		if (!this.props.isAuthenticated) {
			if (routsThanDontRequiereAuth.indexOf(this.props.location.pathname) !== -1)
				return false;
			return <Redirect to="/" />;
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
							<Dropdown.Item>
								<Link to="/users/my-profile" style={{ color: '#222' }}>
									<Icon name="user"/>
									Profile
								</Link>
							</Dropdown.Item>
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