import React, {Component}	from 'react';

class ListOfUsers extends Component {
	componentDidMount() {
		console.log(this.props.match.params.chatRoom);
	}
	render() {
		return (
			<div>
				Lista de usuarios...
			</div>
		);
	}
}

export default ListOfUsers;