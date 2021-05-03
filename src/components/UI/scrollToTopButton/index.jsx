import React from 'react';
import styles from './styles.module.scss';

const ScrollToTop = props => {
    return (
        <div className={styles.scrollToTop} onClick={props.onClick}></div>
    );
};

export default ScrollToTop;