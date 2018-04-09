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
	logout,
	RegisterUser,
	sendActivationMail
} from '../actions';

class Register extends Component {
	state = {email: '', password: '', rePassword: ''}
	passwordIsRePassword() { return this.state.password === this.state.rePassword; }

	Register(e) {
		e.preventDefault();
		if (this.passwordIsRePassword()) {
			const {email, password} = this.state;
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
		if (!this.passwordIsRePassword()) {
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
			this.props.sendActivationMail();
			this.props.logout();
			return <Redirect to="/" />;
		}
	}
	render() {
		const {email, password, rePassword} = this.state;
		return (
			<form onSubmit={this.Register.bind(this)}>
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
								value		= {email}
								onChange	= {e => this.setState({email: e.target.value})}
								placeholder	= "Email"
							/>
							<Input fluid
								id			= "password"
								type		= "password"
								value		= {password}
								onChange	= {e => this.setState({password: e.target.value})}
								placeholder	= "Password"
							/>
							<Input fluid
								id			= "rePassword"
								type		= "password"
								value		= {rePassword}
								onChange	= {e => this.setState({rePassword: e.target.value})}
								placeholder	= "Repeat Password"
							/>
							{this.renderRePasswordWarning()}
							{this.renderRedirect()}
							{this.renderError()}
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Button primary
							type="submit"
							loading={this.props.loading}
							onClick={this.Register.bind(this)}
						>
							Create account
						</Button>
					</Grid.Row>
				</Grid>
			</form>
		);
	}
}

export default connect(state => ({
	error:		state.Auth.Register.error,
	loading:	state.Auth.Register.loading,
	successRegister:		state.Auth.Register.successRegister
}), {
	logout,
	RegisterUser,
	sendActivationMail
})(Register);
