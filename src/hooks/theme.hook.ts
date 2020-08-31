import React from 'react';
import { THEME_DEFAULT_VALUE } from '../contexts/theme.context';

export const useTheme = () => {
	const [theme, setTheme] = React.useState(THEME_DEFAULT_VALUE.theme);

	const swapCurrentTheme = React.useCallback(() => {
		console.log('Swapping theme value:', theme);
		localStorage.setItem('selectedTheme', theme === 'base' ? 'dark' : 'base');
		setTheme(theme === 'base' ? 'dark' : 'base');
	}, [theme]);

	return {
		theme,
		swapCurrentTheme,
	};
};
