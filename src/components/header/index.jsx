import React from 'react';
import styles from './styles.module.scss';
import { withRouter } from 'react-router'
import { convertToWebp, get } from '../../utils/convertToWebp';

import HamburgerMenu from './hamburgerMenu';
import Logo from '../../assets/img/maestral2.png';

const Header = props => {

    return (
        <>
            <HamburgerMenu/>
            <div className={styles.header}>
                <img src={convertToWebp(Logo)} className={styles.header_logo} alt='Maestral Kitesurfing Logo' width={get(Logo, 'width')} height={get(Logo, 'height')}/>
            </div>
        </>
    );
};

export default withRouter(Header);