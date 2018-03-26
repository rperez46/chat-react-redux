import React, {Component}	from 'react';
import {LoadChatRooms}		from '../actions'
import {connect}			from 'react-redux';
import {Button, Grid}		from 'semantic-ui-react';
import {Link}				from 'react-router-dom';
class ChatRooms extends Component {
	componentDidMount() {
		this.props.LoadChatRooms();
	}
	mapRoom(room, index) {
		return (
			<Link to={'/home/'+room.url} key={room.url + index}>
				<Button>
					{room.name}
				</Button>
			</Link>
		);
	}
	render() {
		return (
			<Grid columns={1}>
				<Grid.Row>
					<Grid.Column>
						Lista de salas:
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					{this.props.rooms.map(this.mapRoom)}
				</Grid.Row>
			</Grid>
		);
	}
}

export default connect(state => ({
	rooms: state.Chat.Rooms
}),{LoadChatRooms})(ChatRooms);