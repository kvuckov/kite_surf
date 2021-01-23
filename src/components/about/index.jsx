import React from 'react';
import styles from './styles.module.scss';

import Heading from '../UI/heading';
import Text from '../UI/borderText';
import Button from '../UI/button';

import Temp from '../../assets/img/banner.jpg'

const content = {
    first: "About us",
    second: "Our little history",
    third: "We want our clients to feel awesome and unique."
}
const content2 = {
    first: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, deleniti. Libero animi sint dignissimos nobis quas consequatur! Laborum dolorem odio, quaerat sint, illum, voluptatum obcaecati voluptates corrupti eveniet ea ipsam?",
    second: "Our little history Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, deleniti. Libero animi sint dignissimos nobis quas consequatur! Laborum dolorem odio, quaerat sint, illum, voluptatum obcaecati voluptates corrupti eveniet ea ipsam?"
}
const About = props => {
    return (
        <div className={styles.about} >
            <div className={styles.about_left}>
                <Heading content={content} />
                <Text content={content2} />
                <div className={styles.about_buttons}>
                    <Button text={"Book a lesson"} medium={true} type={'secondary'} />
                    <Button text={"Learn more"} medium={true} type={'tertionary'} />
                </div>
            </div>
            <div className={styles.about_right}>
                <img src={Temp} />
            </div>
        </div>
    );
};

export default About;