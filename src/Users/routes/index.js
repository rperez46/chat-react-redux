import React from 'react';
import { Switch, Route } from 'react-router';

import Profile from '../components/Profile';

export default (
	<Switch>
		<Route path="/users/my-profile" component={Profile} />
	</Switch> 
);