import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './styles.module.scss';
import { withRouter } from 'react-router'
import { useTranslation } from "react-i18next";

import Logo from '../../assets/img/reful.png';

import Arrow from '../../assets/svg/arrow-down.svg';
import * as routes from '../../constants/routes';
import language from '../../constants/lang';

const Header = props => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = React.useState(JSON.parse(localStorage.getItem('lang')) || language[0]);
    const [open, setOpen] = React.useState(false);
    const [firstClick, setFirstClick] = React.useState(true);
    const navigation = t("navigation", { returnObjects: true });

    React.useEffect(() => {
        open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll';
    }, [open]);

    const handleCountryClick = (lang) => {
        setCurrentLanguage(lang);
        localStorage.setItem('lang', JSON.stringify(lang));
        i18n.changeLanguage(lang.lang);
    };

    const handleNavigate = (path, data) => {
        setOpen(false);
        setFirstClick(true);
        data ? props.history.push({ pathname: path, state: { index: data }}) : props.history.push(path);
    };

    const handleNavigateMultiple = path => {
        if (!firstClick) {
            props.history.push(path);
            setOpen(false);
            setFirstClick(true);
        } else {
            setFirstClick(false);
        }
    };

    const renderNavigation = () => Array.isArray(navigation) && navigation.map(item => {
        if(item.subLinks) {
            return (
                <li key={item.id} className={styles.program}>
                    <span
                        className={props.location.pathname === item.link ? styles.selected : ''}
                        onClick={() => window.innerWidth < 991 ? handleNavigateMultiple(item.link) : handleNavigate(item.link)}
                    >
                        {item.name} <LazyLoadImage src={Arrow} />
                    </span>
                    <ul className={styles.navigation_secondLevel}>
                        { item.subLinks.map((sublink, index) => {
                            return <li key={index} onClick={() => handleNavigate(item.subLink, index)}>{sublink}</li>
                        })}
                    </ul>
                </li>
            );
        }
        return (
            <li key={item.id}>
                <span
                    className={props.location.pathname === item.link ? styles.selected : ''}
                    onClick={() => handleNavigate(item.link)}
                >
                        {item.name}
                </span>
            </li>
        );
    });

    const renderLanguage = () => language.map((lang, index) => {
        return <li key={index} onClick={() => handleCountryClick(lang)} className={currentLanguage.name === lang.name ? styles.country_selector__hidden : ''}><LazyLoadImage src={lang.icon} />{lang.name}</li>;
    });

    return (
        <div className={[styles.header, "text", !open ? (!props.scrolled ? styles.header_light : '') : styles.open, props.history.location.pathname !== routes.ROOT && !open ? styles.text_light : ''].join(' ')} >
            <div className={styles.header_main}>
                <LazyLoadImage src={Logo} className={styles.header_logo} />
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
                { renderNavigation() }
            </ul>
            <ul className={[styles.country_selector, open ? styles.open : ''].join(' ')}>
                <li>
                    <span><LazyLoadImage src={currentLanguage.icon} />{currentLanguage.name}</span>
                    <ul>
                        { renderLanguage() }
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default withRouter(Header);