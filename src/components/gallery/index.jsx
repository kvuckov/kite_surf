import React, { Suspense } from 'react';
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Temp from '../../assets/img/banner.jpg';
import styles from './styles.module.scss';

const Heading = React.lazy(() => import('../UI/heading'));

const Gallery = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.gallery} >
            <div className={styles.gallery_left}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Heading content={t("home.gallery", { returnObjects: true })} theme={'secondary'} />
                </Suspense>
                <LazyLoadImage src={Temp} />
            </div>
            <div className={styles.gallery_right}>
                <LazyLoadImage src={Temp} className={styles.gallery_right_mainImg} />
                <div className={styles.gallery_right_secondaryImages}>
                    <LazyLoadImage src={Temp} />
                    <LazyLoadImage src={Temp} />
                </div>
            </div>
        </div>
    );
};

export default Gallery;