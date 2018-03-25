import React, {Component}	from 'react';
import {Grid} from 'semantic-ui-react';
import Messages		from './Messages';
import ListOfUsers	from './ListOfUsers';

class Chat extends Component {
	render() {
		return (
			<Grid columns={2} centered>
				<Grid.Column>
					<ListOfUsers />
				</Grid.Column>
				<Grid.Column>
					<Messages />
				</Grid.Column>
			</Grid>
		);
	}
}

export default Chat;