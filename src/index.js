import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';

import App from './App';
import AuthReducer from './Auth/reducers'
let store = createStore(AuthReducer, applyMiddleware(ReduxThunk));

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
