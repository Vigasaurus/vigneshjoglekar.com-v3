// Design Cues taken from https://nero-portfolio.webflow.io/
// Icons from https://icons8.com

import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	useLocation,
} from 'react-router-dom';
import {
	Landing,
	About,
	Works,
	Skills,
	Service,
	Secret,
	NotFound,
	Contact,
} from './pages/';
import { themeContext } from './contexts/theme.context';
import { useTheme } from './hooks/theme.hook';
import { applyTheme } from './themes/utils';
import { useProjectCard } from './hooks/projectCard.hook';
import { projectCardContext } from './contexts/projectCard.context';
import Header from './reusable/Header';

// Import Static Assets Requested by Static Pages
require('./assets/Logo.png');

// Matomo Object
declare global {
	interface Window {
		_paq: Array<Array<string>>;
	}
}
window._paq = window._paq || {};

const App = () => {
	const location = useLocation();

	const prefix = window.location.href.includes('people.tamu.edu')
		? '/~vjoglekar/'
		: '/';

	useEffect(() => {
		const pages = ['about', 'works', 'skills', 'service', 'contact', 'secret']; // TODO: Include 404 Handling
		const cleanedPath = location.pathname.split('/').slice(-1)[0];
		document.title = `Vignesh Joglekar${
			pages.includes(cleanedPath)
				? ' | ' + cleanedPath[0].toUpperCase() + cleanedPath.substr(1)
				: ''
		}`;

		window._paq.push(['setCustomUrl', location.pathname]);
		window._paq.push(['setDocumentTitle', document.title]);
		window._paq.push(['enableLinkTracking']);
		window._paq.push(['trackPageView']);
	}, [location]);

	return (
		<>
			<Header />
			<Switch>
				<Route exact path={`${prefix}`} component={Landing} />
				<Route path={`${prefix}about`} component={About} />
				<Route path={`${prefix}skills`} component={Skills} />
				<Route path={`${prefix}works`} component={Works} />
				<Route path={`${prefix}service`} component={Service} />
				<Route path={`${prefix}contact`} component={Contact} />
				<Route path={`${prefix}secret`} component={Secret} secret />
				<Route component={NotFound} />
			</Switch>
		</>
	);
};

export const AppWrapper = () => {
	const theme = useTheme();
	const activeCard = useProjectCard();

	useEffect(() => {
		applyTheme(theme.theme);
	}, [theme]);

	useEffect(() => {
		applyTheme(theme.theme);
	});

	return (
		<themeContext.Provider value={theme}>
			<projectCardContext.Provider value={activeCard}>
				<div className='w-full h-full flex flex-col bg-background-primary'>
					<Router>
						<App />
					</Router>
				</div>
			</projectCardContext.Provider>
		</themeContext.Provider>
	);
};

export default AppWrapper;