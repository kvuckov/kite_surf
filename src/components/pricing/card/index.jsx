import React from 'react';
import { useTranslation } from "react-i18next";
import styles from './styles.module.scss';

import Button from '../../UI/button';

import Temp from '../../../assets/img/banner.jpg'

const PricingCard = props => {
    const { t } = useTranslation();

    const renderDescription = () => props.data.description.map((item, index) => {
        return <li key={index}>{item}</li>
    });

    return (
        <div className={styles.pricingCard} >
            <div className={styles.pricingCard_heading}>
                <img src={Temp} />
                <div className={styles.priceWrap}>
                    <span className={styles.priceWrap_sign}>€</span>
                    <span className={styles.priceWrap_price}>{props.data.price}</span>
                </div>
            </div>
            <div className={styles.pricingCard_content}>
                <ul>
                    { renderDescription() }
                </ul>
                <Button text={t("lessonButton")} medium={true} type={'secondary'} onClick={props.onClick} className={styles.pricingCard_button}/>
            </div>
        </div>
    );
};

export default PricingCard;