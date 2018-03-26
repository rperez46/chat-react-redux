import React, {Component}	from 'react';
import {Button}		from 'semantic-ui-react';
import {Link}				from 'react-router-dom';

class ListOfUsers extends Component {
	componentDidMount() {
	}
	render() {
		return (
			<Link to="/home">
				<Button>
					Volver a lista de salas
				</Button>
			</Link>
		);
	}
}

export default ListOfUsers;