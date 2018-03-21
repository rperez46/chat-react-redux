import React, {Component}	from 'react';
import {connect}			from 'react-redux';
import {
	Icon,
	Grid,
	Input,
	Header,
	Button,
	Divider,
	Segment
} from 'semantic-ui-react';

import {updateEmail, updatePassword, login} from '../actions';

class Login extends Component {
	login() {
		this.props.login(
			this.props.email,
			this.props.password
		);
	}
	renderErrors() {
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
		const gridStyle = { marginTop: '50px' };
		return (
			<Grid style={gridStyle} columns={2} centered>
				<Grid.Row>
					<Grid.Column>
						<Header as="h1" textAlign="center">
							<Icon.Group>
								<Icon name="television" />
								<Icon name="star" color="yellow" corner loading />
							</Icon.Group>
							This is just for learning.
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
							onChange	= {e => this.props.updatePassword(e.target.value)}
							placeholder	= "Password"
						/>
					</Grid.Column>
				</Grid.Row>
				{this.renderErrors()}
				<Grid.Row>
					<Button
						primary
						loading={this.props.loading}
						onClick={this.login.bind(this)}
					>
						Iniciar sesión
					</Button>
				</Grid.Row>
			</Grid>
		);
	}
}
const mapStateToProps = state => {
	return {
		email: state.email,
		password: state.password,
		loading: state.loading,
		error: state.error
	};
};
export default connect(mapStateToProps, {updateEmail, updatePassword, login})(Login);
