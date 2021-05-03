import React from 'react';
import styles from './styles.module.scss';

const AccordionItem = props => {

    return (
        <div className={styles.accordionItem}>
            <div  onClick={props.onClick} className={[styles.accordionItem_heading, props.open ? styles.open : ''].join(' ')}>
                <h2>{props.content.title}</h2>
                <span></span>
            </div>
            {props.open && <div className={styles.accordionItem_content}>
                    {props.content.text}
                </div>
            }
        </div>
    );
};

export default AccordionItem;