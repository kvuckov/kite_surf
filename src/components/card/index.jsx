import React from 'react';
import styles from './styles.module.scss';

import Heading from '../UI/heading';
// import Text from '../UI/borderText';
import Button from '../UI/roundButton';

import Temp from '../../assets/img/banner.jpg'

const content = {
    first: "About us",
    second: "Our little history",
    third: "We want our clients to feel awesome and unique."
}

const Card = props => {
    return (
        <div className={styles.card} >
            <img src={Temp} />
            <div className={styles.card_content}>
                <Heading content={content} style={styles.card_heaing} />
                <Button text="Book a lesson" />
            </div>
        </div>
    );
};

export default Card;