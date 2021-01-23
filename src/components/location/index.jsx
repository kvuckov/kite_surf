import React from 'react';
import styles from './styles.module.scss';

import Heading from '../UI/heading';
import Button from '../UI/button';

import Zadar from '../../assets/img/zadarPoint.png';

const content = {
    first: "Location",
    second: "Great spots",
    third: "We want our clients to feel awesome and unique."
}

const Location = props => {
    return (
        <div className={styles.location} >
            <div className={styles.location_left}>
                <img src={Zadar} />
            </div>
            <div className={styles.location_right}>
                <Heading content={content} left={true} />
                <div className={[styles.locations, "text"].join(' ')}>
                    <span>Zadar</span>
                    <span>Pula</span>
                    <span>Split</span>
                </div>
                <Button text={"Learn more"} medium={true} type={'tertionary'} />
            </div>
        </div>
    );
};

export default Location;