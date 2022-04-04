import React from 'react';
import { useTranslation } from "react-i18next";

import { convertToWebp } from '../../utils/convertToWebp';

import Banner from '../../components/smallBanner';
import Button from '../../components/UI/button';
import styles from './styles.module.scss';

import BannerImage from '../../assets/img/small_banner.jpg';
import * as routes from '../../constants/routes';

const Services = props => {
    const { t } = useTranslation();
    const services = t("services.content", { returnObjects: true });
    const [ currentService, setCurrentService ] = React.useState(props.location.state ? props.location.state.index : 1);

    React.useEffect(() => {
        setCurrentService(props.location.state ? props.location.state.index : 1);
    }, [props.location.state]);

    const renderServices = () => Array.isArray(services) && services.map(service => {
        return <li key={service.id} onClick={() => setCurrentService(service.id)} className={currentService === service.id ? styles.current : ''}>{service.name}</li>;
    });

    const renderContent = () => Array.isArray(services) && services[currentService-1].description.map((item, index) => {
        return <p key={index} dangerouslySetInnerHTML={{ __html: item }}/>;
    });

    return (
        <div className={styles.services}>
            <Banner src={BannerImage} title={Array.isArray(services) && services[currentService-1].name} />
            <div className={styles.services_content}>
                <div className={styles.services_content_left}>
                    <ul>
                        { renderServices() }
                    </ul>
                </div>
                <div className={styles.services_content_right}>
                    <img src={convertToWebp(Array.isArray(services) && services[currentService-1].image)} alt={services[currentService-1].name} />
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