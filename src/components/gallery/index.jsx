import React from 'react';
import styles from './styles.module.scss';

import Heading from '../UI/heading';

import Temp from '../../assets/img/banner.jpg'

const content = {
    first: "About us",
    second: "Our little history",
    third: "We want our clients to feel awesome and unique."
}

const Gallery = props => {
    return (
        <div className={styles.gallery} >
            {/* <img src={Temp} /> */}
            <div className={styles.gallery_left}>
                <Heading content={content} theme={'secondary'} />
                <img src={Temp} />
            </div>
            <div className={styles.gallery_right}>
                <img src={Temp} className={styles.gallery_right_mainImg} />
                <div className={styles.gallery_right_secondaryImages}>
                    <img src={Temp} />
                    <img src={Temp} />
                </div>
            </div>
            {/* <div className={styles.gallery_content}>
                <Heading content={content} style={styles.gallery_heaing} />
                <Button text="Book a lesson" />
            </div> */}
        </div>
    );
};

export default Gallery;