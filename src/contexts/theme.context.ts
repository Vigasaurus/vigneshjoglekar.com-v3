import React from 'react';

export const THEME_DEFAULT_VALUE = {
	theme:
		localStorage.getItem('selectedTheme') ||
		(window.matchMedia('(prefers-color-scheme: dark)').matches && 'dark') ||
		'base',
	swapCurrentTheme: () => {},
};

export const themeContext = React.createContext(THEME_DEFAULT_VALUE);
