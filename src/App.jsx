import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import * as routes from './constants/routes';
import './App.scss';

import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from './components/UI/scrollToTopButton';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import ServicesHome from './pages/servicesHome';
import Pricing from './pages/pricing';
import Contact from './pages/contact';
import Faq from './pages/faq';

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
				<Route path={routes.ABOUT} exact component={About} />
				<Route path={routes.HOME_SERVICES} exact component={ServicesHome} />
				<Route path={routes.SERVICES} exact component={Services} />
				<Route path={routes.PRICING} exact component={Pricing} />
				<Route path={routes.CONTACT} exact component={Contact} />
				<Route path={routes.FAQ} exact component={Faq} />
				<Route render={() => (<Redirect to={routes.ROOT} />)} />
			</Switch>
			<Footer />
			{scrolled && <ScrollToTop onClick={() => window.scrollTo(0, 0)} />}
		</>
	);
}

export default App;
