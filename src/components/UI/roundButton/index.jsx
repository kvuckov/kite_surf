import React from 'react';

import styles from './styles.module.scss';

const RoundButton = props => {

    return (
        <div className={styles.roundButton}>
            {props.text}
        </div>
    );
};

export default RoundButton;