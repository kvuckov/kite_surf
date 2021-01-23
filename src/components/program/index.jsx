import React from 'react';

import Heading from '../UI/heading';
import Card from '../pricingCard';

import styles from './styles.module.scss';

const content = {
    first: "Location",
    second: "Great spots",
    third: "We want our clients to feel awesome and unique."
}

const Program = props => {
    return (
        <div className={styles.program}>
            <Heading content={content} theme='tertionary' />
            <Card />
        </div>
    )
};
export default Program;