import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import * as routes from './constants/routes';
import './App.scss';

const Header = React.lazy(() => import('./components/header'));
const Footer = React.lazy(() => import('./components/footer'));
const ScrollToTop = React.lazy(() => import('./components/UI/scrollToTopButton'));
const Home = React.lazy(() => import('./pages/home'));
const About = React.lazy(() => import('./pages/about'));
const Services = React.lazy(() => import('./pages/services'));
const ServicesHome = React.lazy(() => import('./pages/servicesHome'));
const Pricing = React.lazy(() => import('./pages/pricing'));
const Contact = React.lazy(() => import('./pages/contact'));
const Faq = React.lazy(() => import('./pages/faq'));

const App = () => {
	const [scrolled, setScrolled] = React.useState(false);

	React.useEffect(() => {
		window.addEventListener('scroll', () => {
			window.pageYOffset > 10 ? setScrolled(true) : setScrolled(false);
		})
	});

	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
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
			</Suspense>
		</>
	);
}

export default App;
