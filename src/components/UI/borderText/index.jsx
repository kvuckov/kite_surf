import React from 'react';

import styles from './styles.module.scss';

const BorderText = props => {

    return (
        <div className={[styles.borderText, props.style].join(' ')}>
            <p className={'text'}>{props.content && props.content.first}</p>
            <p className={'text'}>{props.content && props.content.second}</p>
        </div>
    );
};

export default BorderText;