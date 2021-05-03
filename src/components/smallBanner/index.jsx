import React from 'react';

import styles from './styles.module.scss';


const SmallBanner = props => {
    return (
        <div className={styles.smallBanner} style={{ backgroundImage: `url(${props.src})` }}>
            <h2>{props.title}</h2>
        </div>
    );
};

export default SmallBanner;