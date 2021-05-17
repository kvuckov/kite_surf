import React from 'react';
import { useTranslation } from "react-i18next";
import { withRouter } from 'react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import * as routes from '../../constants/routes';
import Temp from '../../assets/img/banner.jpg';
import styles from './styles.module.scss';

import Heading from '../UI/heading';
import Text from '../UI/borderText';
import Button from '../UI/button';

const About = props => {
    const { t } = useTranslation();
    const about = t("home.about", { returnObjects: true });

    return (
        <div className={styles.about} >
            <div className={styles.about_left}>
                <Heading content={about.title} />
                <Text content={about.description} />
                <div className={styles.about_buttons}>
                    <Button onClick={() => props.history.push(routes.PRICING)} text={"Book a lesson"} medium={true} type={'secondary'} />
                    <Button onClick={() => props.history.push(routes.ABOUT)} text={"Learn more"} medium={true} type={'tertionary'} />
                </div>
            </div>
            <div className={styles.about_right}>
                <LazyLoadImage src={Temp} />
            </div>
        </div>
    );
};

export default withRouter(About);