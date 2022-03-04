import React from 'react';
import { useTranslation } from "react-i18next";

import Banner from '../../components/smallBanner';
import ContactCard from '../../components/contactCard';
import styles from './styles.module.scss';

import BannerImage from '../../assets/img/small_banner.jpg';

const Contact = props => {
    const { t } = useTranslation();
    const contact = t("contact", { returnObjects: true });

    const renderContacts = () => Array.isArray(contact.content) && contact.content.map((contact, index) => {
        return <ContactCard key={index} data={contact} />;
    });

    return (
        <div className={styles.contact}>
            <Banner src={BannerImage} title={contact.title} />
            <div className={styles.contact_content}>
                { renderContacts() }
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2856.5360967480933!2d15.136080015774946!3d44.2783626791049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4761f315a606064d%3A0x5b66d9c15769cf47!2sKitesurfing%20club%20Maestral!5e0!3m2!1sen!2shr!4v1645993944834!5m2!1sen!2shr" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </div>
    );
};

export default Contact;