import React, {Component}	from 'react';
import {connect}			from 'react-redux';
import {Redirect}			from 'react-router';
import {Link}				from 'react-router-dom';
import {
	Icon,
	Grid,
	Input,
	Header,
	Button,
	Segment
} from 'semantic-ui-react';

import {forgotPassword, forgotEmailChange} from '../actions';

class ForgotPassword extends Component {
	renderRedirect() {
		if (this.props.mailWasSent)
			return <Redirect to="/" />;
	}
	resetPassword() {
		this.props.forgotPassword( this.props.email );
	}
	renderError() {
		const {error} = this.props;
		if (error) {
			return (
				<Grid.Row>
					<Grid.Column>
						<Segment inverted color='red' tertiary>
							{error}
						</Segment>
					</Grid.Column>
				</Grid.Row>
			);
		};
	}
	render() {
		return (
			<Grid className="gridStyle" columns={2} centered>
				<Grid.Row>
					<Grid.Column>
						{this.renderRedirect()}
						<Header as="h1" textAlign="center">
							<Icon.Group>
								<Icon name="television" />
								<Icon name="star" color="yellow" corner loading />
							</Icon.Group>
							Forgot password.
						</Header>
						<Input fluid
							id			= "email"
							value		= {this.props.email}
							onChange	= {e => this.props.forgotEmailChange(e.target.value)}
							placeholder	= "Email"
						/>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					{this.renderError()}
				</Grid.Row>
				<Grid.Row>
					<Button
						primary
						loading={this.props.loading}
						onClick={this.resetPassword.bind(this)}
					>
						Reset password
					</Button>
				</Grid.Row>
			</Grid>
		);
	}
}

export default connect(state => ({
	email:			state.Auth.Forgot.email,
	error:			state.Auth.Forgot.error,
	mailWasSent:	state.Auth.Forgot.mailWasSent,
}), {forgotPassword, forgotEmailChange})(ForgotPassword);
