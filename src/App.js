import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import firebase from 'firebase';
import firebaseConfig from './Config/Firebase';
import authRoutes from './Auth/routes';
import './Auth/components/Auth.css';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp(firebaseConfig);
	}
	render() {
		return (
			<Router>
				{authRoutes}
			</Router>
		);
	}
}

export default App;
