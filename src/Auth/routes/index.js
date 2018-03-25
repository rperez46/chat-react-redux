import React from 'react';
import { Switch, Route } from 'react-router';

import Login from		'../components/Login';
import Header from		'../components/Header';
import Register from	'../components/Register';

export default [
	<Route key="header" path="/" component={Header} />,
	<Switch key="RegisterAuth">
		<Route path="/register" component={Register} />
		<Route exact path="/" component={Login} />
	</Switch>
];