import React from 'react';
import { useTranslation } from "react-i18next";

import Banner from '../../components/smallBanner';
import PricingCards from '../../components/pricing';
import styles from './styles.module.scss';

import BannerImage from '../../assets/img/small_banner.jpg';

const Pricing = props => {

    return (
        <div className={styles.pricing}>
            <Banner src={BannerImage} title='Pricing' />
            <PricingCards />
        </div>
    );
};

export default Pricing;