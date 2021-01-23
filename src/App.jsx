import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import * as routes from './constants/routes';

import Home from './pages/home';
import Header from './components/header';

import './App.scss';

const App = () => {
	const [scrolled, setScrolled] = React.useState(false);

	React.useEffect(() => {
		window.addEventListener('scroll', () => {
			window.pageYOffset > 10 ? setScrolled(true) : setScrolled(false);
		})
	});

	return (
		<>
			<Header scrolled={scrolled} />
			<Switch>
				<Route path={routes.ROOT} exact component={Home} />
				<Route path={routes.HOME} exact component={Home} />
				<Route render={() => (<Redirect to={routes.ROOT} />)} />
			</Switch>
		</>
	);
}

export default App;
