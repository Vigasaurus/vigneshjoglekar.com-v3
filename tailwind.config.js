module.exports = {
	theme: {
		screens: {
			xs: '0px',
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			xxl: '1600px',
		},
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				tertiary: 'var(--color-tertiary)',
				accent: 'var(--color-accent)',
				'accent-secondary': 'var(--color-accent-sec)',
				'accent-transparent': 'var(--color-accent-trans)',
				'text-primary': 'var(--color-text-primary)',
				'text-secondary': 'var(--color-text-sec)',
				'text-tertiary': 'var(--color-text-ter)',
				'background-primary': 'var(--background-primary)',
				'background-secondary': 'var(--background-sec)',
				'background-tertiary': 'var(--background-ter)',
				'background-quaternary': 'var(--background-quat)',
				'background-quinary': 'var(--background-quin)',
			},
		},
		backgroundColor: (theme) => ({
			...theme('colors'),
		}),
		fontFamily: {
			title: ['Grotesk', 'Helvetica', 'sans-serif'],
			body: ['Karla', 'Arial', 'sans-serif'],
		},
	},
	purge: ['./src/**/*.tsx', './src/**/*.ts'],
};
