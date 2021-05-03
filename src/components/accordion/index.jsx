import React from 'react';
import styles from './styles.module.scss';
import { useTranslation } from "react-i18next";

import AccordionItem from './accordionItem';

const Accordion = () => {
    const { t } = useTranslation();
    const faq = t("faq", { returnObjects: true });
    const [openedItem, setOpenedItem] = React.useState(false);
    const [clickedItem, setClickedItem] = React.useState(0);

    const handleClick = id => {
        if (!openedItem && clickedItem !== id) {
            setOpenedItem(true);
            setClickedItem(id);
        } else if (openedItem && clickedItem === id) {
            setOpenedItem(false);
            setClickedItem(0);
        } else if (openedItem && clickedItem !== id) {
            setClickedItem(id);
        } else {
            setOpenedItem(true);
        }
    }

    const renderAccordion = (limitMin, limitMax) => Array.isArray(faq) && faq.map((faqItem, index) =>
        faqItem.id > limitMin && faqItem.id <= limitMax && <AccordionItem key={index} content={faqItem} onClick={() => handleClick(faqItem.id)} open={clickedItem === faqItem.id ? true : false} />
    );

    return (
        <div className={styles.accordion} >
            <div>{renderAccordion(0,4)}</div>
            <div>{renderAccordion(4,8)}</div>
        </div>
    );
};

export default Accordion;