import React, { Suspense } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from "react-i18next";
import Zadar from '../../assets/img/zadarPoint.png';
import styles from './styles.module.scss';

const Heading = React.lazy(() => import('../UI/heading'));

const Location = () => {
    const { t } = useTranslation();
    const data = t("home.location", { returnObjects: true });

    return (
        <div className={styles.location} >
            <div className={styles.location_left}>
                <LazyLoadImage src={Zadar} />
            </div>
            <div className={styles.location_right}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Heading content={data.title} left={true} />
                    <div className={[styles.locations, "text"].join(' ')}>
                        {data.description}
                    </div>
                </Suspense>
            </div>
        </div>
    );
};

export default Location;