import React from 'react';
import { useTranslation } from "react-i18next";

import styles from './styles.module.scss';
import Button from '../UI/button';


const Banner = props => {
    const { t, i18n } = useTranslation();
    const translation = t("home.banner", { returnObjects: true });
    console.log('translation', translation);
    return (
        <div className={[styles.banner, props.big ? styles.banner_big : styles.banner_small].join(' ')} style={{ backgroundImage: `url(${props.src})` }}>
            <div className={styles.title} onClick={() => i18n.changeLanguage("en-US")}>
                <span className={styles.title_first}>{translation[0]}</span>
                <h2 className={styles.title_second}>{translation[1]}</h2>
                <span className={styles.title_third}>{translation[2]}</span>
                <Button text={t("lessonButton")} medium={true} type={'primary'} />
            </div>
        </div>
    );
};

export default Banner;