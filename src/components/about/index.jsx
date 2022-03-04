import React from 'react';
import gsap from 'gsap';
import { useTranslation } from "react-i18next";
import { withRouter } from 'react-router';

import * as routes from '../../constants/routes';
import Image from '../../assets/img/kreso_transp.png';
import styles from './styles.module.scss';

import Heading from '../UI/heading';
import Text from '../UI/borderText';
import Button from '../UI/button';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = props => {
    const { t } = useTranslation();
    const about = t("home.about", { returnObjects: true });
    const lessonButton = t("lessonButton");
    const learnMore = t("learnMore");
    gsap.registerPlugin(ScrollTrigger);

    React.useEffect(() => {
        gsap.fromTo('.heading', {
            autoAlpha: 0,
            top: '20px'
        }, {
            duration: .8, 
            autoAlpha: 1,
            top: 0,
            ease: 'none',
            scrollTrigger: {
                id: `section-1`,
                trigger: '.about',
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            }
        });
        gsap.fromTo('.description', {
            autoAlpha: 0,
            top: '20px'
        }, {
            duration: .8,
            delay: 1,
            autoAlpha: 1,
            top: 0,
            ease: 'none',
            scrollTrigger: {
                id: `section-1`,
                trigger: '.about',
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            }
        });
        gsap.fromTo('.right', {
            top: '100px',
            left: '100px'
        }, {
            duration: 3, 
            top: 0,
            left: 0,
            ease: 'none',
            scrollTrigger: {
                id: `section-1`,
                trigger: '.about',
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            }
        });
    }, []);

    return (
        <div className={[styles.about, 'about'].join(' ')} >
            <div className={styles.about_left}>
                <Heading content={about.title} style='heading'/>
                <Text content={about.description} style='description'/>
                <div className={styles.about_buttons}>
                    <Button onClick={() => props.history.push(routes.PRICING)} text={lessonButton} medium={true} type={'secondary'} />
                    <Button onClick={() => props.history.push(routes.ABOUT)} text={learnMore} medium={true} type={'tertionary'} />
                </div>
            </div>
            <div className={[styles.about_right, 'right'].join(' ')}>
                <img src={Image} />
            </div>
        </div>
    );
};

export default withRouter(About);