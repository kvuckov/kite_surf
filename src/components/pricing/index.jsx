import React, { Suspense } from 'react';
import { withRouter } from 'react-router'
import { useTranslation } from "react-i18next";

import Card from './card';
import * as routes from '../../constants/routes';

import styles from './styles.module.scss';

const Heading = React.lazy(() => import('../UI/heading'));
const Carousel = React.lazy(() => import('../carousel'));

const Pricing = props => {
    const { t } = useTranslation();
    const pricingCards = t("pricing", { returnObjects: true });

    const renderCards = () => Array.isArray(pricingCards) && pricingCards.map((card, index) => {
        return <Card key={index} data={card} onClick={() => props.history.push(routes.PRICING)}/>
    })

    return (
        <div className={styles.pricing}>
            <Suspense fallback={<div>Loading...</div>}>
                {props.heading && <Heading content={t("home.pricing", { returnObjects: true })} theme='tertionary' />}
                <Carousel data={renderCards()} firstBreakpoint={1200} secondBreakpoint={600} />
            </Suspense>
        </div>
    )
};
export default withRouter(Pricing);