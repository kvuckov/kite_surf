import React from 'react';

import styles from './styles.module.scss';

const Button = props => {

    return (
        <div className={[styles.button, props.medium ? styles.button_medium : '', styles[`button_${props.type}`]].join(' ')}>
            {props.text}
            {props.type === 'tertionary' && <svg width="204" height="55" viewBox="0 0 204 55" xmlns="http://www.w3.org/2000/svg">
                <rect x='0' y='0' fill='none' width='204' height='55' />
            </svg>}
        </div>
    );
};

export default Button;