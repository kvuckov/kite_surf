import React from 'react';
import { useTranslation } from "react-i18next";

import Banner from '../../components/smallBanner';
import ContactCard from '../../components/contactCard';
import styles from './styles.module.scss';

import BannerImage from '../../assets/img/small_banner.jpg';

const Contact = props => {
    const { t } = useTranslation();
    const contacts = t("contact", { returnObjects: true });

    const renderContacts = () => Array.isArray(contacts) && contacts.map((contact, index) => {
        return <ContactCard key={index} data={contact} />;
    });

    return (
        <div className={styles.contact}>
            <Banner src={BannerImage} title='Contact' />
            <div className={styles.contact_content}>
                { renderContacts() }
            </div>
        </div>
    );
};

export default Contact;