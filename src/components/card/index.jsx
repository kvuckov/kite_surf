import React, { Suspense } from 'react';
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './styles.module.scss';

const Button = React.lazy(() => import('../UI/roundButton'));

const Card = props => {
    const { t } = useTranslation();

    return (
        <div className={styles.card} >
            <LazyLoadImage src={props.data.image} />
            <div className={styles.card_content}>
                <Suspense fallback={<div>Loading...</div>}>
                    <h3>{props.data.title}</h3>
                    <p>{props.data.text}</p>
                    <Button text={t("learnMore")} onClick={props.onClick}/>
                </Suspense>
            </div>
        </div>
    );
};

export default Card;