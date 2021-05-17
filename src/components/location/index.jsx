import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from "react-i18next";
import Zadar from '../../assets/img/zadarPoint.png';
import styles from './styles.module.scss';

import Heading from '../UI/heading';

const Location = () => {
    const { t } = useTranslation();
    const data = t("home.location", { returnObjects: true });

    return (
        <div className={styles.location} >
            <div className={styles.location_left}>
                <LazyLoadImage src={Zadar} />
            </div>
            <div className={styles.location_right}>
                <Heading content={data.title} left={true} />
                <div className={[styles.locations, "text"].join(' ')}>
                    {data.description}
                </div>
            </div>
        </div>
    );
};

export default Location;