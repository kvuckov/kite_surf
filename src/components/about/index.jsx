import React, { Suspense } from 'react';
import { useTranslation } from "react-i18next";
import { withRouter } from 'react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import * as routes from '../../constants/routes';
import Temp from '../../assets/img/banner.jpg';
import styles from './styles.module.scss';

const Heading = React.lazy(() => import('../UI/heading'));
const Text = React.lazy(() => import('../UI/borderText'));
const Button = React.lazy(() => import('../UI/button'));

const About = props => {
    const { t } = useTranslation();
    const about = t("home.about", { returnObjects: true });

    return (
        <div className={styles.about} >
            <Suspense fallback={<div>Loading...</div>}>
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
            </Suspense>
        </div>
    );
};

export default withRouter(About);