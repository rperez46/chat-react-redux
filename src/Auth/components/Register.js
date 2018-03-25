import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
	Icon,
	Grid,
	Input,
	Button,
	Header,
	Segment
} from 'semantic-ui-react';
import {updateEmail, updatePassword, updateUsername, updateRePassword} from '../actions';

class Register extends Component {
	renderRePasswordWarning() {
		const {passwordIsRePassword} = this.props;
		if (!passwordIsRePassword) {
			return (
				<Grid.Row>
					<Grid.Column>
						<Segment inverted color='red' tertiary>
							The password field must be the same than the repeat password field. 
						</Segment>
					</Grid.Column>
				</Grid.Row>
			);
		}
	}
	render() {
		return (
			<Grid className="gridStyle" columns={2} centered>
				<Grid.Row>
					<Grid.Column>
						<Header as="h1" textAlign="center">
							<Icon.Group>
								<Icon name="television" />
								<Icon name="star" color="yellow" corner loading />
							</Icon.Group>
							Register
						</Header>
						<Input fluid
							id			= "email"
							value		= {this.props.email}
							onChange	= {e => this.props.updateEmail(e.target.value)}
							placeholder	= "Email"
						/>
						<Input fluid
							id			= "username"
							value		= {this.props.username}
							onChange	= {e => this.props.updateUsername(e.target.value)}
							placeholder	= "Usernmae"
						/>
						<Input fluid
							id			= "password"
							type		= "password"
							value		= {this.props.password}
							onChange	= {e => this.props.updatePassword(e.target.value)}
							placeholder	= "Password"
						/>
						<Input fluid
							id			= "rePassword"
							type		= "password"
							value		= {this.props.rePassword}
							onChange	= {e => this.props.updateRePassword(e.target.value)}
							placeholder	= "Repeat Password"
						/>
						{this.renderRePasswordWarning()}
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Button
						primary
					>
						Create account
					</Button>
				</Grid.Row>
			</Grid>
		);
	}
}

export default connect(state => ({
	email:		state.Register.email,
	username:	state.Register.username,
	password:	state.Register.password,
	rePassword:	state.Register.rePassword,
	passwordIsRePassword: state.Register.passwordIsRePassword
}), {updatePassword, updateEmail, updateUsername, updateRePassword})(Register);
