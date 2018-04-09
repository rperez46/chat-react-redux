import React, {Component}	from 'react';
import {connect}			from 'react-redux';
import {Redirect}			from 'react-router';
import {
	Icon,
	Grid,
	Input,
	Header,
	Button,
	Segment
} from 'semantic-ui-react';

import {forgotPassword} from '../actions';
import { toast } from 'react-toastify';

class ForgotPassword extends Component {
	state = {email: ''}
	renderRedirect() {
		if (this.props.mailWasSent) {
			toast.success('we will send you an email to restore your password.');
			return <Redirect to="/" />;
		}
	}
	resetPassword() {
		this.props.forgotPassword( this.state.email );
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
							value		= {this.state.email}
							onChange	= {e => this.setState({email: e.target.value})}
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
	error:			state.Auth.Forgot.error,
	mailWasSent:	state.Auth.Forgot.mailWasSent
}), {forgotPassword})(ForgotPassword);
