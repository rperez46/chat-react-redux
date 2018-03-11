import React, { Component } from 'react';
import Auth from './Auth/components/Login';
import firebase from 'firebase';
import firebaseConfig from './Config/Firebase';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(firebaseConfig);
    }
    render() {
        return (
            <div className="App">
                <Auth />
            </div>
        );
    }
}

export default App;
