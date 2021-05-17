import React from 'react';

import styles from './styles.module.scss';
import Button from '../../UI/button';

const EmailModal = props => {
    return(
        <div className={styles.emailModal} onClick={props.onClick}>
            <div className={styles.emailModal_modal} onClick={e => e.stopPropagation()}>
                <h5>Leave a message</h5>
                <input placeholder="Name"/>
                <input placeholder="Email" />
                <textarea placeholder="Write a message..."/>
                <Button text={'Send'} medium={true} type={'primary'} className={styles.emailModal_button} />
            </div>
        </div>
    );
};

export default EmailModal;