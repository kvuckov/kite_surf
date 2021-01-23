import React from 'react';

import styles from './styles.module.scss';

const BorderText = props => {

    return (
        <div className={styles.borderText}>
            <p className={'text'}>{props.content.first}</p>
            <p className={'text'}>{props.content.second}</p>
        </div>
    );
};

export default BorderText;