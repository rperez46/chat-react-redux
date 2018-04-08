import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import firebase			from 'firebase';
import ReduxThunk		from 'redux-thunk';
import firebaseConfig	from './Config/Firebase';

import App from './App';
import AuthReducer from './Auth/reducers'
import ChatReducer from './Chat/reducers'
import UsersReducer from './Users/reducers'
import {loadState, saveState} from './localStorage';

const store = createStore(
	combineReducers({
		Auth: AuthReducer,
		Chat: ChatReducer,
		User: UsersReducer
	}),
	loadState(),
	applyMiddleware(ReduxThunk)
);

store.subscribe(() => {
	saveState(store.getState());
});

firebase.initializeApp(firebaseConfig);
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
