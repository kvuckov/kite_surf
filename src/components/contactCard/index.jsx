import React from 'react';
import { convertToWebp, get } from '../../utils/convertToWebp';

import style from './styles.module.scss';

const ContactCard = props => {

    return (
        <div className={style.contactCard}>
            <img src={convertToWebp(props.data.icon)} alt={props.data.title} width={get(props.data.icon, 'width')} height={get(props.data.icon, 'height')}/>
            <h6>{props.data.title}</h6>
            <p dangerouslySetInnerHTML={{ __html: props.data.text }} />
        </div>
    );
};

export default ContactCard;