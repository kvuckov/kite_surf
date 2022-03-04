import React from 'react';
import { useTranslation } from "react-i18next";
import styles from './styles.module.scss';

import Button from '../UI/roundButton';

const Card = props => {
    const { t } = useTranslation();

    return (
        <div className={styles.card} >
            <img src={props.data.image} />
            <div className={styles.card_content}>
                <h3>{props.data.title}</h3>
                <p>{props.data.text}</p>
                <Button text={t("learnMore")} onClick={props.onClick}/>
            </div>
        </div>
    );
};

export default Card;