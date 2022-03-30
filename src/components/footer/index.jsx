import React from 'react';
import { useTranslation } from "react-i18next";
import { convertToWebp } from '../../utils/convertToWebp';
import styles from './styles.module.scss';
import logo from '../../assets/img/maestral2.png';
import facebook from '../../assets/svg/facebook.svg';
import instagram from '../../assets/svg/instagram.svg';
import gmail from '../../assets/svg/gmail.svg';

const Footer = () => {
    const { t } = useTranslation();
    const footer = t("footer", { returnObjects: true });
    return (
        <div className={styles.footer} >
            <div className={styles.footer_content}>
                <div className={styles.footer_content_left}>
                    <img src={convertToWebp(logo)} alt='Maestral Kitesurfing Logo' />
                    <p>{footer.title}</p>
                    <div className={styles.social_links}>
                        <a href="https://www.facebook.com/KitesurfMaestral" target="_blank">
                            <img src={facebook} alt="Maestral facebook"/>
                        </a>
                        <a href="https://www.instagram.com/kitesurfclub_zadar" target="_blank">
                            <img src={instagram} alt="Maestral instagram"/>
                        </a>
                        <a href="mailto:info@maestral-kitesurfing.com" target="_blank">
                            <img src={gmail} alt="Maestral email" />
                        </a>
                    </div>
                </div>
                <div className={styles.footer_content_right}>
                    <h3>{footer.links}</h3>
                    <ul>
                        <li><a target="_blank" href="https://www.windguru.cz/22206">Windguru.cz</a></li>
                        <li><a target="_blank" href="https://www.yr.no/place/Croatia/Other/Zagreb_TV_Tower/">Yr.no</a></li>
                        <li><a target="_blank" href="https://www.snow-forecast.com/resorts/Sljeme/6day/top">Snow-Forecast</a></li>
                        <li><a target="_blank" href="http://www.sljeme.hr/">Sljeme.hr</a></li>
                        <li><a target="_blank" href="http://wxcharts.eu/?panel=default&model=gfs,gfs,gfs,gfs&region=italy&chart=overview,850temp,wind10mkph,snowdepth&run=06&step=012&plottype=10&lat=51.500&lon=-0.250&skewtstep=0">Wxcharts.eu</a></li>
                        <li><a target="_blank" href="http://www.meteo.hr/">Meteo.hr</a></li>
                        <li><a target="_blank" href="http://www.jeti.hr/">Jeti.hr</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>Copyright © 2022 Kitesurfing club Maestral. All Rights Reserved.</div>
        </div>
    );
};

export default Footer;