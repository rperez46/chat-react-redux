import React, {Component}	from 'react';
import {connect}			from 'react-redux';
import {Grid, Input, Button} from 'semantic-ui-react';
import {updateUser} from '../actions';

class Profile extends Component {
	state = { alias: '', description: '', email: '' };

	static getDerivedStateFromProps(nextProps, prevState) {
		if (prevState.user !== nextProps.user)
			return {...nextProps.user};
		return prevState;
	}

	render () {
		const {email, alias, description} = this.state;
		return (
			<Grid className="gridStyle" columns={2} centered>
				<Grid.Row>
					<Grid.Column>
						My email: 
						<Input value={email} disabled fluid />
						Alias(this is going to be used as name in your messages)
						<Input fluid
							value={alias}
							onChange={e => this.setState({alias: e.target.value})}
							placeholder="Alias"
						/>
						About me:
						<Input fluid
							value={description}
							onChange={e => this.setState({description: e.target.value})}
							placeholder="Descripcion"
						/>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Button primary
						onClick={() => updateUser(alias, description)}
					>
						Save changes
					</Button>
				</Grid.Row>
			</Grid>
		);
	}
}
export default connect(state => ({
	user: state.User
}))(Profile);