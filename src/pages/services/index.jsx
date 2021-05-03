import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from "react-i18next";

import Banner from '../../components/smallBanner';
import Button from '../../components/UI/button';
import styles from './styles.module.scss';

import BannerImage from '../../assets/img/small_banner.jpg';
import * as routes from '../../constants/routes';

const Services = props => {
    const { t } = useTranslation();
    const services = t("services", { returnObjects: true });
    const [ currentService, setCurrentService ] = React.useState(props.location.state ? props.location.state.index : 0);

    React.useEffect(() => {
        setCurrentService(props.location.state ? props.location.state.index : 0);
    }, [props.location.state]);

    const renderServices = () => Array.isArray(services) && services.map((service, index) => {
        return <li key={service.id} onClick={() => setCurrentService(index)} className={currentService + 1 === service.id ? styles.current : ''}>{service.name}</li>;
    });

    const renderContent = () => Array.isArray(services) && services[currentService].description.map((item, index) => {
        return <p key={index}>{item}</p>;
    });

    return (
        <div className={styles.services}>
            <Banner src={BannerImage} title={Array.isArray(services) && services[currentService].name} />
            <div className={styles.services_content}>
                <div className={styles.services_content_left}>
                    <ul>
                        { renderServices() }
                    </ul>
                </div>
                <div className={styles.services_content_right}>
                    <LazyLoadImage src={Array.isArray(services) && services[currentService].image} />
                    <div className={styles.services_content_right_text}>
                        { renderContent() }
                        <Button text={t("lessonButton")} medium={true} type={'primary'} onClick={() => props.history.push(routes.PRICING)}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;