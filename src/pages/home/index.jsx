import React from 'react';
import { withRouter } from 'react-router';
import { useTranslation } from "react-i18next";

import * as routes from '../../constants/routes';
import styles from './styles.module.scss';

import Banner from '../../components/banner';
import About from '../../components/about';
import Location from '../../components/location';
import Card from '../../components/card';
import Gallery from '../../components/gallery';
import Pricing from '../../components/pricing';
import Heading from '../../components/UI/heading';
import Modal from '../../components/modals/sendEmail';

const Home = props => {
    const { t } = useTranslation();
    const services = t("home.services", { returnObjects: true });
    const [showModal, setShowModal] = React.useState(false);
    const [ data, setData ] = React.useState()

    const renderCards = () => Array.isArray(services.cards) && services.cards.map((service, index) => {
        return <Card key={index} data={service} onClick={() => props.history.push({ pathname: routes.SERVICES, state: { index: index + 1 }})} />;
    });

    const handleClick = data => {
        setData(data);
        setShowModal(true);
    };

    return (
        <div className={styles.homepage}>
            {showModal && <Modal onClick={() => setShowModal(false)} data={data}/>}
            <Banner firstBreakpoint={1450} secondBreakpoint={1000}/>
            <About />
            <Location />
            <div className={styles.services}>
                <Heading content={services.title} style={styles.heading} />
                { renderCards() }
            </div>
            <Gallery />
            <Pricing heading={true} onClick={data => handleClick(data)} />
        </div>
    );
};

export default withRouter(Home);