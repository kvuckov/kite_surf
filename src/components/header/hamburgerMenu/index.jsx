import React from 'react';
import { CgMenuLeftAlt } from "react-icons/cg";
import style from './style.module.scss';
import { useTranslation } from "react-i18next";
import { withRouter } from 'react-router'

import language from '../../../constants/lang';

const HamburgerMenu = props => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = React.useState(JSON.parse(localStorage.getItem('lang')) || language[0]);
    const [open, setOpen] = React.useState(false);
    const [openLang, setOpenLang] = React.useState(false);
    const navigation = t("navigation", { returnObjects: true });

    const handleClick = () => {
        setOpen(!open);
    }

    const handleCountryClick = lang => {
        setCurrentLanguage(lang);
        setOpenLang(!openLang)
        localStorage.setItem('lang', JSON.stringify(lang));
        i18n.changeLanguage(lang.lang);
    };

    const handleNavigate = (path, data) => {
        data ? props.history.push({ pathname: path, state: { index: data }}) : props.history.push(path);
        setOpen(!open);
    };

    const renderLanguage = () => language.map((lang, index) => {
        return lang.id !== currentLanguage.id && <li key={index} onClick={() => handleCountryClick(lang)}><span><img src={lang.icon} />{lang.name}</span></li>;
    });

    const renderNavigation = () => Array.isArray(navigation) && navigation.map(item => {
        if(item.subLinks) {
            return (
                <li key={item.id} className={style.program}>
                    <span
                        className={props.location.pathname === item.link && !props.location.state ? style.selected : ''}
                        onClick={() => handleNavigate(item.link)}
                    >
                        {item.name}
                    </span>
                    <ul className={style.navigation_secondLevel}>
                        { item.subLinks.map((sublink, index) => {
                            return (
                            <li key={index}>
                                <span
                                    className={props.location.pathname === item.subLink && props.location.state?.index === index + 1 ? style.selected : ''}
                                    onClick={() => handleNavigate(item.subLink, index + 1)}
                                >
                                    {sublink}
                                </span>
                            </li>
                        )})}
                    </ul>
                </li>
            );
        }
        return (
            <li key={item.id}>
                <span
                    className={props.location.pathname === item.link ? style.selected : ''}
                    onClick={() => handleNavigate(item.link)}
                >
                        {item.name}
                </span>
            </li>
        );
    });


    return (
        <div className={[style.wrapper, open ? style.open : ''].join(' ')}>
            <div className={style.nav}>
                <CgMenuLeftAlt 
                    className={style.nav__icon}
                    type='menu-fold'
                    onClick={() => handleClick()}
                />
                <div className={style.nav__body}>
                    <div className={style.title}>Ma<CgMenuLeftAlt className={style.title_letter}/>stral</div>
                    <ul className={[style.navigation, openLang ? style.open_lang : ''].join(' ')}>
                        { renderNavigation() }
                    </ul>
                    <div className={[style.country_selector, openLang ? style.open : ''].join(' ')}>
                        <span onClick={() => setOpenLang(!openLang)} ><img src={currentLanguage.icon}/>{currentLanguage.name}</span>
                        <ul>
                            { renderLanguage() }
                        </ul>
                    </div>
                </div>
            </div>
            <div onTouchEnd={() => setOpen(!open)} style={{ width: 'calc(100% - 250px)', height: '100%' }}></div>
        </div>
    );
};

export default withRouter(HamburgerMenu);