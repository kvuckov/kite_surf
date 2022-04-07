import React from 'react';
import { useTranslation } from "react-i18next";

import Banner from '../../components/smallBanner';
import PricingCards from '../../components/pricing';
import styles from './styles.module.scss';

import BannerImage from '../../assets/img/small_banner.jpg';
import Modal from '../../components/modals/sendEmail';

const Pricing = () => {
    const { t } = useTranslation();
    const pricingTitle = t("pricing.title");
    const [showModal, setShowModal] = React.useState(false);
    const [ data, setData ] = React.useState()

    const handleClick = data => {
        setData(data);
        setShowModal(true);
    };

    return (
        <div className={styles.pricing}>
            {showModal && <Modal onClick={() => setShowModal(false)} data={data} />}
            <Banner src={BannerImage} title={pricingTitle} />
            <PricingCards onClick={data => handleClick(data)} />
        </div>
    );
};

export default Pricing;