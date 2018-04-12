import React from 'react';
export const ThemeContext = React.createContext();

export const withTheme = (Component) => props => (
	<ThemeContext.Consumer>
		{theme => <Component {...props} {...theme} />}
	</ThemeContext.Consumer>
);
