import React from 'react';

import styles from './styles.module.scss';

const RoundButton = props => {

    return (
        <div className={styles.roundButton} onClick={props.onClick}>
            {props.text}
        </div>
    );
};

export default RoundButton;