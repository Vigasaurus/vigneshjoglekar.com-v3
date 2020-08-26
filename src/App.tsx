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
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route path='/about' component={About} />
				<Route path='/projects' component={Projects} />
				<Route path='/qualifications' component={Qualifications} />
				<Route path='/service' component={Service} />
				<Route path='/secret' component={Secret} secret />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
};

export default App;
