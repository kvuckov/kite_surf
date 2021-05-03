import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './styles.module.scss';
import logo from '../../assets/img/reful.png';
import facebook from '../../assets/svg/facebook.svg';
import instagram from '../../assets/svg/instagram.svg';
import gmail from '../../assets/svg/gmail.svg';

const Footer = () => {
    return (
        <div className={styles.footer} >
            <div className={styles.footer_content}>
                <div className={styles.footer_content_left}>
                    <LazyLoadImage src={logo} />
                    <p>The estuary is the well-known kite spot in the lagoon. Two launches are possible.</p>
                    <div className={styles.social_links}>
                        <a href="https://www.facebook.com/" target="_blank">
                            <LazyLoadImage src={facebook} alt="Reful facebook"/>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <LazyLoadImage src={instagram} alt="Reful instagram"/>
                        </a>
                        <a href="mailto:kkvuckovic@gmail.com" target="_blank">
                            <LazyLoadImage src={gmail} alt="Reful email" />
                        </a>
                    </div>
                </div>
                <div className={styles.footer_content_right}>
                    <h3>Userful Link</h3>
                    <ul>
                        <li><a target="_blank" href="https://www.snow-forecast.com/resorts/Sljeme/6day/top">Snow-Forecast</a></li>
                        <li><a target="_blank" href="http://wxcharts.eu/?panel=default&model=gfs,gfs,gfs,gfs&region=italy&chart=overview,850temp,wind10mkph,snowdepth&run=06&step=012&plottype=10&lat=51.500&lon=-0.250&skewtstep=0">Wxcharts.eu</a></li>
                        <li><a target="_blank" href="https://www.yr.no/place/Croatia/Other/Zagreb_TV_Tower/">Yr.no</a></li>
                        <li><a target="_blank" href="http://www.meteo.hr/">Meteo.hr</a></li>
                        <li><a target="_blank" href="http://www.sljeme.hr/">Sljeme.hr</a></li>
                        <li><a target="_blank" href="http://www.jeti.hr/">Jeti.hr</a></li>
                        <li><a target="_blank" href="https://www.windguru.cz/22206">Windguru.cz</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>Copyright © 2021 Reful All Rights Reserved.</div>
        </div>
    );
};

export default Footer;