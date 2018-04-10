import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import firebase			from 'firebase';
import firebaseConfig	from './Config/Firebase';

import App from './App';
import {configureStore} from './configureStore';

firebase.initializeApp(firebaseConfig);

render(
	<Provider store={configureStore()}>
		<App />
	</Provider>,
	document.getElementById('root')
)
