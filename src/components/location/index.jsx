import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from "react-i18next";
import { convertToWebp, get } from '../../utils/convertToWebp';

import Zadar from '../../assets/img/zadarPoint.png';
import styles from './styles.module.scss';

import Heading from '../UI/heading';

const Location = () => {
    const { t } = useTranslation();
    const data = t("home.location", { returnObjects: true });
    gsap.registerPlugin(ScrollTrigger);

    React.useEffect(() => {
        gsap.fromTo('.location_right', {
            autoAlpha: 0,
            top: '20px'
        }, {
            duration: 1, 
            autoAlpha: 1,
            top: 0,
            ease: 'none',
            scrollTrigger: {
                id: `section-2`,
                trigger: '.location_right',
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            }
        });
        gsap.fromTo('.location_left', {
            scale: 1.5
        }, {
            duration: 1,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
                id: `section-1`,
                trigger: '.location_right',
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            }
        });
    }, []);

    return (
        <div className={[styles.location, 'location'].join(' ')} >
            <div className={[styles.location_left, 'location_left'].join(' ')}>
                <img src={convertToWebp(Zadar)} alt='Zadar country | Spot point' width={get(Zadar, 'width')} height={get(Zadar, 'height')}/>
            </div>
            <div className={[styles.location_right, 'location_right'].join(' ')}>
                <Heading content={data.title} left={true} />
                <div className={[styles.locations, "text"].join(' ')}>
                    {data.description}
                </div>
            </div>
        </div>
    );
};

export default Location;