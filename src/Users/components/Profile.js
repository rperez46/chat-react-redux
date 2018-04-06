import React, {Component}	from 'react';
import {connect}			from 'react-redux';
import {Grid, Input} from 'semantic-ui-react';

class Profile extends Component {
	render () {
		const {user} = this.props;
		return (
			<Grid className="gridStyle" columns={2} centered>
				<Grid.Row>
					<Grid.Column>
						Mi correo: 
						<Input value={user.email} disabled fluid />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}
export default connect(state => ({
	user: state.Auth.User
}))(Profile);