import React from 'react';
import { Switch, Route } from 'react-router';

import Home from '../components';

export default (
	<Switch>
		<Route path="/home" component={Home} />
	</Switch> 
);