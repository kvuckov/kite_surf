import React from 'react';
import { useTranslation } from "react-i18next";
import styles from './styles.module.scss';

import Button from '../../UI/button';

const PricingCard = props => {
    const { t } = useTranslation();

    const renderDescription = () => props.data.description.map((item, index) => {
        return <li key={index}>{item}</li>
    });

    return (
        <div className={[styles.pricingCard, styles[props.data.title]].join(' ')} >
            <h2>{props.data.title}</h2>
            <hr style={{ backgroundColor: props.data.color }} />
            <ul>
                { renderDescription() }
            </ul>
            <div className={styles.priceWrap}>
                <span className={styles.priceWrap_sign}>€</span>
                <span className={styles.priceWrap_price}>{props.data.price}</span>
            </div>
            <Button text={t("lessonButton")} medium={true} type={'secondary'} onClick={props.onClick} className={styles.pricingCard_button}/>
        </div>
    );
};

export default PricingCard;