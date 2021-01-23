import React from 'react';
import styles from './styles.module.scss';

import Button from '../UI/button';

import Temp from '../../assets/img/banner.jpg'

const PricingCard = props => {
    return (
        <div className={styles.pricingCard} >
            <img src={Temp} />
            {/* <div className={styles.pricingCard_content}>
                <Button text="Book a lesson" />
            </div> */}
        </div>
    );
};

export default PricingCard;