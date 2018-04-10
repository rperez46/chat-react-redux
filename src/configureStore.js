import { createStore, applyMiddleware, combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk';

import {loadState, saveState} from './localStorage';
import AuthReducer from './Auth/reducers'
import ChatReducer from './Chat/reducers'
import UsersReducer from './Users/reducers'

export const configureStore = () => {
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
		const state = store.getState();
		saveState({
			Auth: {
				Login: {
					isAuthenticated: state.Auth.Login.isAuthenticated
				}
			},
			User: state.User,
			Chat: {
				Rooms: state.Chat.Rooms
			}
		});
	});
	return store;
};