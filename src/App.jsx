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
				<Redirect from={["/zadar-area", "/location"]} to={{ pathname: routes.HOME, state: { scroll: true, lang: 1 } }}/>
				<Redirect from={["/de/zadar-region", "/de/lage"]} to={{ pathname: routes.HOME, state: { scroll: true, lang: 2 } }}/>
				<Redirect from={["/hr/zadarska-zupanija", "/hr/lokacija"]} to={{ pathname: routes.HOME, state: { scroll: true, lang: 4 } }}/>
				<Redirect from="/school-program" to={{ pathname: routes.HOME_SERVICES, state: { lang: 1 } }}/>
				<Redirect from="/de/schule-programm" to={{ pathname: routes.HOME_SERVICES, state: { lang: 2 } }}/>
				<Redirect from="/hr/program-skole" to={{ pathname: routes.HOME_SERVICES, state: { lang: 4 } }}/>
				<Redirect from="/beginners-course" to={{ pathname: routes.SERVICES, state: { index: 2, lang: 1 } }}/>
				<Redirect from="/de/anfanger-kurs" to={{ pathname: routes.SERVICES, state: { index: 2, lang: 2 } }}/>
				<Redirect from="/hr/pocetnicki-tecaj" to={{ pathname: routes.SERVICES, state: { index: 2, lang: 4 } }}/>
				<Redirect from="/trial-course-2" to={{ pathname: routes.SERVICES, state: { index: 1, lang: 1 } }}/>
				<Redirect from="/de/trial-kurs-2" to={{ pathname: routes.SERVICES, state: { index: 1, lang: 2 } }}/>
				<Redirect from="/hr/probni-tecaj" to={{ pathname: routes.SERVICES, state: { index: 1, lang: 4 } }}/>
				<Redirect from="/improvers-lessons" to={{ pathname: routes.SERVICES, state: { index: 3, lang: 1 } }}/>
				<Redirect from="/de/fortgeschrittene-kurse" to={{ pathname: routes.SERVICES, state: { index: 3, lang: 2 } }}/>
				<Redirect from="/hr/nadogradnja-vjestine" to={{ pathname: routes.SERVICES, state: { index: 3, lang: 4 } }}/>
				<Redirect from="/lesson-prices" to={{ pathname: routes.PRICING, state: { lang: 1 } }}/>
				<Redirect from="/de/lektion-preise" to={{ pathname: routes.PRICING, state: { lang: 2 } }}/>
				<Redirect from="/hr/cijene-tecajeva" to={{ pathname: routes.PRICING, state: { lang: 4 } }}/>
				<Redirect from="/contact" to={{ pathname: routes.CONTACT, state: { lang: 1 } }}/>
				<Redirect from="/de/kontakt-2" to={{ pathname: routes.CONTACT, state: { lang: 2 } }}/>
				<Redirect from="/hr/kontakt" to={{ pathname: routes.CONTACT, state: { lang: 4 } }}/>
				<Redirect from="/de" to={{ pathname: routes.ROOT, state: { lang: 2 } }}/>
				<Redirect from="/pl" to={{ pathname: routes.ROOT, state: { lang: 3 } }}/>
				<Redirect from="/hr" to={{ pathname: routes.ROOT, state: { lang: 4 } }}/>
				<Route render={() => (<Redirect to={routes.ROOT} />)} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
