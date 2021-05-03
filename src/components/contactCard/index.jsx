import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import style from './styles.module.scss';

const ContactCard = props => {

    return (
        <div className={style.contactCard}>
            <LazyLoadImage src={props.data.icon} />
            <h6>{props.data.title}</h6>
            <p dangerouslySetInnerHTML={{ __html: props.data.text }} />
        </div>
    );
};

export default ContactCard;