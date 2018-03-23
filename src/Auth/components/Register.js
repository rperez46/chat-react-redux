import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
	Icon,
	Grid,
	Input,
	Button,
	Header
} from 'semantic-ui-react';

class Register extends Component {
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
							placeholder	= "Email"
						/>
						<Input fluid
							id			= "password"
							type		= "password"
							placeholder	= "Password"
						/>
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

export default connect(state => {
	return {};
})(Register);
