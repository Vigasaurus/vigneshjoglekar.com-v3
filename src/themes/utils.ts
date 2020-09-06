import { themes } from './index';

export interface ITheme {
	[key: string]: string;
}

export interface IThemes {
	[key: string]: ITheme;
}

export interface IMappedTheme {
	[key: string]: string | null;
}

export const mapTheme: (variables: ITheme) => IMappedTheme = (
	variables: ITheme
) => {
	return {
		'--color-primary': variables.primary || '',
		'--color-secondary': variables.secondary || '',
		'--color-tertiary': variables.tertiary || '',
		'--color-accent': variables.accent || '',
		'--color-accent-sec': variables.secondaryAccent || '',
		'--color-accent-trans': variables.semiTransparent || '',
		'--color-text-primary': variables.textPrimary || '',
		'--color-text-sec': variables.textSecondary || '',
		'--color-text-ter': variables.textTertiary || '',
		'--background-primary': variables.backgroundPrimary || '',
		'--background-sec': variables.backgroundSecondary || '',
		'--background-ter': variables.backgroundTertiary || '',
		'--background-quat': variables.backgroundQuaternary || '',
		'--background-quin': variables.backgroundQuinary || '',
	};
};

/**
 * Helper function to set a new theme
 *
 * @param {string} theme The name of the theme to be set
 *
 * @return {void}
 */
export const applyTheme = (theme: string): void => {
	// console.log('chaing theme', theme);
	const themeObject: IMappedTheme = mapTheme(themes[theme]);
	if (!themeObject) return;
	const root = document.documentElement;

	Object.keys(themeObject).forEach((property) => {
		if (property === 'name') {
			return;
		}

		root.style.setProperty(property, themeObject[property]);
	});
};
