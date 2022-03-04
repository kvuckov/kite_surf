import React from 'react';
import styles from './styles.module.scss';
import { withRouter } from 'react-router'

import HamburgerMenu from './hamburgerMenu';
import Logo from '../../assets/img/maestral2.png';

const Header = props => {

    return (
        <>
            <HamburgerMenu/>
            <div className={styles.header}>
                <img src={Logo} className={styles.header_logo} />
            </div>
        </>
    );
};

export default withRouter(Header);