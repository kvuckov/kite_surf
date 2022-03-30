import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import * as routes from './constants/routes';
import './App.scss';

import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import ServicesHome from './pages/servicesHome';
import Pricing from './pages/pricing';
import Contact from './pages/contact';
import Faq from './pages/faq';

const App = () => {
	return (
		<div>
			<Header  />
			<Switch>
				<Route path={routes.ROOT} exact component={Home} />
				<Route path={routes.HOME} exact component={Home} />
				<Route path={routes.ABOUT} exact component={About} />
				<Route path={routes.HOME_SERVICES} exact component={ServicesHome} />
				<Route path={routes.SERVICES} exact component={Services} />
				<Route path={routes.PRICING} exact component={Pricing} />
				<Route path={routes.CONTACT} exact component={Contact} />
				<Route path={routes.FAQ} exact component={Faq} />
				<Redirect from={["/zadar-area", "/de/zadar-region", "/hr/zadarska-zupanija", "/location", "/de/lage", "/hr/lokacija"]} to={routes.ABOUT} />
				<Redirect from={["/school-program", "/de/schule-programm", "/hr/program-skole"]} to={routes.HOME_SERVICES} />
				<Redirect from={["/beginners-course", "/de/anfanger-kurs", "/hr/pocetnicki-tecaj", "/trial-course-2", "/de/trial-kurs-2", "/hr/probni-tecaj", "/hr/nadogradnja-vjestine", "/improvers-lessons", "/de/fortgeschrittene-kurse"]} to={routes.SERVICES} />
				<Redirect from={["/lesson-prices", "/de/lektion-preise", "/hr/cijene-tecajeva"]} to={routes.PRICING} />
				<Redirect from={["/contact", "/de/kontakt-2", "/hr/kontakt"]} to={routes.CONTACT} />
				<Redirect from={["/de", "/hr", "/pl"]} to={routes.ROOT} />
				<Route render={() => (<Redirect to={routes.ROOT} />)} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
