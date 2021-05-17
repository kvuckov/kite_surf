import React from 'react';
import { withRouter } from 'react-router';
import { useTranslation } from "react-i18next";
import Gallery from 'react-photo-gallery';

import Banner from '../../components/smallBanner';
import Advantages from '../../components/advantages';
import Heading from '../../components/UI/heading';
import Carousel from '../../components/carousel';

import BannerImage from '../../assets/img/small_banner.jpg';
import Surf from '../../assets/img/surf.jpg';

import gallery1 from '../../assets/img/gallery1.jpg';
import gallery2 from '../../assets/img/gallery2.jpg';
import * as routes from '../../constants/routes';
import * as style from './styles.module.scss';

const PHOTO_SET = [
    {
        src: gallery1,
        width: 1,
        height: 1
    },
    {
        src: Surf,
        width: 3,
        height: 4
    },
    {
        src: gallery2,
        width: 4,
        height: 3
    },
    {
        src: gallery1,
        width: 1,
        height: 1
    },
    {
        src: BannerImage,
        width: 4,
        height: 3
    },
    {
        src: gallery2,
        width: 4,
        height: 3
    },
    {
        src: gallery1,
        width: 1,
        height: 1
    },
    {
        src: Surf,
        width: 3,
        height: 4
    },
    {
        src: gallery2,
        width: 4,
        height: 3
    },
    {
        src: gallery1,
        width: 1,
        height: 1
    },
    {
        src: BannerImage,
        width: 4,
        height: 3
    },
    {
        src: gallery2,
        width: 4,
        height: 3
    },
];

const content2 = {
    first: "Team",
    second: "We Are Energetic Experts",
    third: "We want our clients to feel awesome and unique."
}

const About = props => {
    const { t } = useTranslation();
    const services = t("services", { returnObjects: true });
    const team = t("about.team", { returnObjects: true });

    const renderServices = () => Array.isArray(services) && services.map((service, index) =>
        <div key={index} className={style.about_services_card} onClick={() => props.history.push({ pathname: routes.SERVICES, state: { index: index }})}>
            <img src={Surf} className={style.hovered} />
            <h3>{service.name}</h3>
        </div>
    );

    const renderTeam = () => Array.isArray(team) && team.map((member, index) =>
        <div key={index} className={style.about_team_member}>
            <img src={member.image}/>
            <h5>{member.name}</h5>
            <p>{member.role}</p>
        </div>
    );

    return (
        <div className={style.about}>
            <Banner src={BannerImage} title='About' />
            <Advantages />
            <div className={style.about_team}>
                <Heading content={content2} theme={'center'} style={style.title} />
                <Carousel data={renderTeam()} firstBreakpoint={1450} secondBreakpoint={1000}/>
            </div>
            <div className={style.about_services}>
                <Heading content={content2} theme={'center'} style={style.title}/>
                <Carousel data={renderServices()} firstBreakpoint={1450} secondBreakpoint={1000}/>
            </div>
            <div className={style.about_divider}></div>
            <div className={style.about_gallery}>
                <Heading content={content2} theme={'center'} style={style.title}/>
                <Gallery photos={PHOTO_SET} />
            </div>
        </div>
    );
};

export default withRouter(About);