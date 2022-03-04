import React from 'react';

import style from './styles.module.scss';

const ContactCard = props => {

    return (
        <div className={style.contactCard}>
            <img src={props.data.icon} />
            <h6>{props.data.title}</h6>
            <p dangerouslySetInnerHTML={{ __html: props.data.text }} />
        </div>
    );
};

export default ContactCard;