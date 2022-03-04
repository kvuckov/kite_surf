import React from 'react';
import { withRouter } from 'react-router'
import { useTranslation } from "react-i18next";

import Card from './card';

import styles from './styles.module.scss';

import Heading from '../UI/heading';
import Carousel from '../carousel';

const Pricing = props => {
    const { t } = useTranslation();
    const pricingCards = t("pricing.content", { returnObjects: true });

    const renderCards = () => Array.isArray(pricingCards) && pricingCards.map((card, index) => {
        return <Card key={index} data={card} onClick={() => props.onClick(card)}/>
    })

    return (
        <div className={styles.pricing}>
            {props.heading && <Heading content={t("home.pricing", { returnObjects: true })} theme='tertionary' />}
            <Carousel data={renderCards()} firstBreakpoint={1200} secondBreakpoint={600}/>
        </div>
    )
};
export default withRouter(Pricing);