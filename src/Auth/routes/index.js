import React from 'react';
import { Switch, Route } from 'react-router';

import Login from		'../components/Login';
import Header from		'../components/Header';
import Register from	'../components/Register';
import ForgotPassword from '../components/ForgotPassword'

export default [
	<Route key="header" path="/" component={Header} />,
	<Switch key="RegisterAuth">
		<Route path="/register" component={Register} />
		<Route path="/forgot-password" component={ForgotPassword} />
		<Route exact path="/" component={Login} />
	</Switch>
];