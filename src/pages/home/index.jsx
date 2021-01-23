import React from 'react';
import Banner from '../../components/banner';
import About from '../../components/about';
import Location from '../../components/location';
import Card from '../../components/card';
import Gallery from '../../components/gallery';
import Program from '../../components/program';
import Heading from '../../components/UI/heading';

import styles from './styles.module.scss';

import BannerImage from '../../assets/img/banner.jpg';

const content = {
    first: "About us",
    second: "Our little history",
    third: "We want our clients to feel awesome and unique."
}

const Home = () => {
    return (
        <div className={styles.homepage}>
            <Banner src={BannerImage} big={true} />
            <About />
            <Location />
            <Gallery />
            <div className={styles.services}>
                <Heading content={content} style={styles.heading} />
                <Card />
                <Card />
                <Card />
            </div>
            {/* <Program /> */}
        </div>
    );
};

export default Home;