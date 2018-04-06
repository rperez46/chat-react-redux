import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import firebase from 'firebase';
import firebaseConfig from './Config/Firebase';
import authRoutes from './Auth/routes';
import chatRoutes from './Chat/routes';
import usersRoutes from './Users/routes';
import './Auth/components/Auth.css';
import './Chat/components/Chat.css';
import {Container} from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp(firebaseConfig);
	}
	render() {
		return (
			<Router>
				<div>
					<ToastContainer />
					{authRoutes}
					<Container>
						{chatRoutes}
						{usersRoutes}
					</Container>
				</div>
			</Router>
		);
	}
}

export default App;
