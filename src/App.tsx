import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
	Landing,
	About,
	Projects,
	Qualifications,
	Service,
	Secret,
	NotFound,
} from './pages/';

interface Props {}

const App = (props: Props) => {
	console.log(window.location.pathname);
	const prefix = window.location.href.includes('people.tamu.edu')
		? '/~vjoglekar'
		: '';

	return (
		<Router>
			<Switch>
				<Route exact path={`${prefix}/`} component={Landing} />
				<Route path={`${prefix}/about`} component={About} />
				<Route path={`${prefix}/projects`} component={Projects} />
				<Route path={`${prefix}/qualifications`} component={Qualifications} />
				<Route path={`${prefix}/service`} component={Service} />
				<Route path={`${prefix}/secret`} component={Secret} secret />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
};

export default App;
