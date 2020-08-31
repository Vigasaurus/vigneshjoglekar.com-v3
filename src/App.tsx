import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
	Landing,
	About,
	Projects,
	Qualifications,
	Service,
	Secret,
	NotFound,
	Contact,
} from './pages/';
import { themeContext } from './contexts/theme.context';
import { useTheme } from './hooks/theme.hook';
import { applyTheme } from './themes/utils';
import Header from './reusable/Header';

// Import Static Assets Requested by Static Pages
require('./assets/Logo.png');

interface Props {}

const App = (props: Props) => {
	console.log(window.location.pathname);

	const theme = useTheme();

	const prefix = window.location.href.includes('people.tamu.edu')
		? '/~vjoglekar/'
		: '/';

	useEffect(() => {
		applyTheme(theme.theme);
	}, [theme]);

	useEffect(() => {
		applyTheme(theme.theme);
	});

	return (
		<themeContext.Provider value={theme}>
			<div className='w-full h-full flex flex-col tw bg-background-primary'>
				<Router>
					<Header />
					<Switch>
						<Route exact path={`${prefix}`} component={Landing} />
						<Route path={`${prefix}about`} component={About} />
						<Route path={`${prefix}projects`} component={Projects} />
						<Route
							path={`${prefix}qualifications`}
							component={Qualifications}
						/>
						<Route path={`${prefix}service`} component={Service} />
						<Route path={`${prefix}contact`} component={Contact} />
						<Route path={`${prefix}secret`} component={Secret} secret />
						<Route component={NotFound} />
					</Switch>
				</Router>
			</div>
		</themeContext.Provider>
	);
};

export default App;
