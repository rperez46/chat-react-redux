import React, { Component } from 'react';
import {connect}	from 'react-redux';
import {Redirect}	from 'react-router';
import {
	Icon,
	Grid,
	Input,
	Button,
	Header,
	Segment
} from 'semantic-ui-react';
import {
	updateEmail,
	RegisterUser,
	updateRePassword,
	updateRegisterPassword
} from '../actions';

class Register extends Component {
	Register() {
		if (this.props.passwordIsRePassword) {
			const {email, password} = this.props;
			this.props.RegisterUser( email, password );
		}
	}
	renderSegment(child) {
		return (
			<Grid.Row>
				<Grid.Column>
					<Segment inverted color='red' tertiary>
						{child}
					</Segment>
				</Grid.Column>
			</Grid.Row>
		);
	}
	renderRePasswordWarning() {
		if (!this.props.passwordIsRePassword) {
			return this.renderSegment('The password field must be the same than the repeat password field. ');
		}
	}
	renderError() {
		const {error} = this.props;
		if (error) {
			return this.renderSegment(error);
		}
	}
	renderRedirect() {
		if (this.props.successRegister) {
			return <Redirect to="/" />;
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
							id			= "password"
							type		= "password"
							value		= {this.props.password}
							onChange	= {e => this.props.updateRegisterPassword(e.target.value)}
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
						{this.renderRedirect()}
						{this.renderError()}
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Button
						primary
						onClick={this.Register.bind(this)}
					>
						Create account
					</Button>
				</Grid.Row>
			</Grid>
		);
	}
}

export default connect(state => ({
	error:		state.Auth.Register.error,
	email:		state.Auth.Register.email,
	password:	state.Auth.Register.password,
	rePassword:	state.Auth.Register.rePassword,

	successRegister:		state.Auth.Register.successRegister,
	passwordIsRePassword: 	state.Auth.Register.passwordIsRePassword
}), {updateRegisterPassword, updateEmail, updateRePassword, RegisterUser})(Register);
