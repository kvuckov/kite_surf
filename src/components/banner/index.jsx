import React from 'react';
import { withRouter } from 'react-router';
import { useTranslation } from "react-i18next";

import * as routes from '../../constants/routes';

import styles from './styles.module.scss';
import Button from '../UI/button';

const Banner = props => {
    const { t } = useTranslation();
    const translation = t("home.banner", { returnObjects: true });

    return (
        <div className={[styles.banner, props.big ? styles.banner_big : styles.banner_small].join(' ')} style={{ backgroundImage: `url(${props.src})` }}>
            <div className={styles.title}>
                <span className={styles.title_first}>{translation[0]}</span>
                <h2 className={styles.title_second}>{translation[1]}</h2>
                <span className={styles.title_third}>{translation[2]}</span>
                <Button onClick={() => props.history.push(routes.PRICING)} text={t("lessonButton")} medium={true} type={'primary'} />

            </div>
        </div>
    );
};

export default withRouter(Banner);