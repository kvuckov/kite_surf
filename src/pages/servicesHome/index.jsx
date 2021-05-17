import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from "react-i18next";

import Banner from '../../components/smallBanner';
import Advantages from '../../components/advantages';
import styles from './styles.module.scss';

import BannerImage from '../../assets/img/small_banner.jpg';
import * as routes from '../../constants/routes';

const ServicesHome = props => {
    const { t } = useTranslation();
    const services = t("services", { returnObjects: true });

    const renderServices = () => Array.isArray(services) && services.map((service, index) => {
        return (
            <div key={index} className={styles.servicesHome_item} onClick={() => props.history.push({ pathname: routes.SERVICES, state: { index: index }})}>
                <LazyLoadImage src={service.image} />
                <div>
                    <h2>{service.name}</h2>
                    <p>{service.text}</p>
                </div>
            </div>
        );
    });

    return (
        <div className={styles.servicesHome}>
            <Banner src={BannerImage} title='Services' />
            <Advantages />
            <div className={styles.servicesHome_content}>
                { renderServices() }
            </div>
        </div>
    );
};

export default ServicesHome;