import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk';

import App from './App';
import AuthReducer from './Auth/reducers'
import ChatReducer from './Chat/reducers'
let store = createStore(
	combineReducers({ Auth: AuthReducer, Chat: ChatReducer }),
	applyMiddleware(ReduxThunk)
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
