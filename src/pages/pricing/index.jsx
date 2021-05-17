import React from 'react';

import Banner from '../../components/smallBanner';
import PricingCards from '../../components/pricing';
import styles from './styles.module.scss';

import BannerImage from '../../assets/img/small_banner.jpg';
import Modal from '../../components/modals/sendEmail';

const Pricing = () => {
    const [showModal, setShowModal] = React.useState(false);

    const handleClick = data => {
        setShowModal(true);
        console.log('data', data);
    };

    return (
        <div className={styles.pricing}>
            {showModal && <Modal onClick={() => setShowModal(false)} />}
            <Banner src={BannerImage} title='Pricing' />
            <PricingCards onClick={data => handleClick(data)} />
        </div>
    );
};

export default Pricing;