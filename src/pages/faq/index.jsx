import React from 'react';

import Banner from '../../components/smallBanner';
import Accordion from '../../components/accordion';
import BannerImage from '../../assets/img/small_banner.jpg';
import styles from './styles.module.scss';

const Faq = () => {
    return (
        <div className={styles.faq}>
            <Banner src={BannerImage} title='FAQ' />
            <div className={styles.faq_content}>
                <Accordion />
            </div>
        </div>
    );
};

export default Faq;