import React from 'react';

import styles from './styles.module.scss';


const SmallBanner = props => {
    return (
        <div className={styles.smallBanner} style={{ backgroundImage: `url(${props.src})` }}>
            <h1>{props.title}</h1>
        </div>
    );
};

export default SmallBanner;