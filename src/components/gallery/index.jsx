import React from 'react';
import { useTranslation } from "react-i18next";
import { convertToWebp, get } from '../../utils/convertToWebp';

import spotLandscape from '../../assets/img/spot-landscape.jpg';
import kitesurf5 from '../../assets/img/kitesurf-maestral-5.jpg';
import maestralSpot from '../../assets/img/maestral-spot.jpg';
import kitesurf2 from '../../assets/img/kitesurf-maestral-2.jpg';
import styles from './styles.module.scss';

import Heading from '../UI/heading';

const Gallery = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.gallery} >
            <div className={styles.gallery_left}>
                <Heading content={t("home.gallery", { returnObjects: true })} theme={'secondary'} />
                <img src={convertToWebp(kitesurf5)} alt='Kitesurfing in Privlaka' width={get(kitesurf5, 'width')} height={get(kitesurf5, 'height')}/>
            </div>
            <div className={styles.gallery_right}>
                <img src={convertToWebp(spotLandscape)} className={styles.gallery_right_mainImg} alt='Kitesurf club Maestral Privlaka' width={get(spotLandscape, 'width')} height={get(spotLandscape, 'height')}/>
                <div className={styles.gallery_right_secondaryImages}>
                    <img src={convertToWebp(maestralSpot)} alt='Kitesurf club Maestral Spot' width={get(maestralSpot, 'width')} height={get(maestralSpot, 'height')}/>
                    <img src={convertToWebp(kitesurf2)} alt='Kitesurf club Maestral - Riding' width={get(kitesurf2, 'width')} height={get(kitesurf2, 'height')}/>
                </div>
            </div>
        </div>
    );
};

export default Gallery;