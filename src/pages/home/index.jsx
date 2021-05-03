import React, { Suspense } from 'react';
import { withRouter } from 'react-router';
import { useTranslation } from "react-i18next";

import * as routes from '../../constants/routes';

import BannerImage from '../../assets/img/banner.jpg';
import styles from './styles.module.scss';

const Banner = React.lazy(() => import('../../components/banner'));
const About = React.lazy(() => import('../../components/about'));
const Location = React.lazy(() => import('../../components/location'));
const Card = React.lazy(() => import('../../components/card'));
const Gallery = React.lazy(() => import('../../components/gallery'));
const Pricing = React.lazy(() => import('../../components/pricing'));
const Heading = React.lazy(() => import('../../components/UI/heading'));

const Home = props => {
    const { t } = useTranslation();
    const services = t("home.services", { returnObjects: true });

    const renderCards = () => Array.isArray(services.cards) && services.cards.map((service, index) => {
        return <Card key={index} data={service} onClick={() => props.history.push({ pathname: routes.SERVICES, state: { index: index }})} />;
    });

    return (
        <div className={styles.homepage}>
            <Suspense fallback={<div>Loading...</div>}>
                <Banner src={BannerImage} />
                <About />
                <Location />
                <div className={styles.services}>
                    <Heading content={services.title} style={styles.heading} />
                    { renderCards() }
                </div>
                <Gallery />
                <Pricing heading={true}/>
            </Suspense>
        </div>
    );
};

export default withRouter(Home);