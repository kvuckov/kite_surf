import React from 'react';

import styles from './styles.module.scss';

const Heading = props => {  
    return (
        <div className={[styles.heading, props.style, styles[props.theme]].join(' ')}>
            <h2 className={[styles.heading_first, 'text'].join(' ')}>{props.content && props.content.first}</h2>
            <h3 className={[styles.heading_second, 'title'].join(' ')}>{props.content && props.content.second}</h3>
            <p className={[styles.heading_third, 'text'].join(' ')} dangerouslySetInnerHTML={{ __html: props.content && props.content.third }}></p>
        </div>
    );
};

export default Heading;