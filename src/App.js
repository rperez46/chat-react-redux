import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import firebase from 'firebase';
import firebaseConfig from './Config/Firebase';
import authRoutes from './Auth/routes';
import chatRoutes from './Chat/routes';
import './Auth/components/Auth.css';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp(firebaseConfig);
	}
	render() {
		return (
			<Router>
				<div>
					{authRoutes}
					{chatRoutes}
				</div>
			</Router>
		);
	}
}

export default App;
