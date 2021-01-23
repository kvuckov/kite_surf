import React from 'react';
import styles from './styles.module.scss';

import Logo from '../../assets/img/reful.png';

import CroIcon from '../../assets/svg/cro.svg';
import EngIcon from '../../assets/svg/uk.svg';
import DeIcon from '../../assets/svg/de.svg';
import PolIcon from '../../assets/svg/poland.svg';
import Arrow from '../../assets/svg/arrow-down.svg';

const Header = props => {
    const [language, setLanguage] = React.useState('English');
    const [open, setOpen] = React.useState(false);
    const [icon, setIcon] = React.useState(EngIcon);

    const handleCountryClick = (lang, ico) => {
        setLanguage(lang);
        setIcon(ico);
    };

    return (
        <div className={[styles.header, "text", !open ? !props.scrolled && styles.header_light : styles.open].join(' ')} >
            <div className={styles.header_main}>
                <img src={Logo} className={styles.header_logo} />
                <div className={[styles.menuToggle, open ? styles.open : ''].join(' ')} onClick={() => setOpen(!open)}>
                    <div className={styles.hamburger}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={styles.cross}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <ul className={[styles.navigation, open ? styles.open : ''].join(' ')}>
                <li>
                    <span>Home</span>
                </li>
                <li>
                    <span>About</span>
                </li>
                <li className={styles.program}>
                    <span>Program <img src={Arrow} /></span>
                    <ul className={styles.navigation_secondLevel}>
                        <li>Beginners course</li>
                        <li>Trial course</li>
                        <li>Improvers lessons</li>
                    </ul>
                </li>
            </ul>
            <ul className={[styles.country_selector, open ? styles.open : ''].join(' ')}>
                <li>
                    <span><img src={icon} />{language}</span>
                    <ul>
                        <li onClick={() => handleCountryClick('English', EngIcon)} className={language === 'English' && styles.country_selector__hidden}><img src={EngIcon} />English</li>
                        <li onClick={() => handleCountryClick('Deutsch', DeIcon)} className={language === 'Deutsch' && styles.country_selector__hidden}><img src={DeIcon} />Deutsch</li>
                        <li onClick={() => handleCountryClick('Hrvatski', CroIcon)} className={language === 'Hrvatski' && styles.country_selector__hidden}><img src={CroIcon} />Hrvatski</li>
                        <li onClick={() => handleCountryClick('Polski', PolIcon)} className={language === 'Polski' && styles.country_selector__hidden}><img src={PolIcon} />Polski</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Header;