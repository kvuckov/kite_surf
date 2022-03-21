import React from 'react';
import { withRouter } from 'react-router';
import { useTranslation } from "react-i18next";
import Gallery from 'react-photo-gallery';

import Banner from '../../components/smallBanner';
import Advantages from '../../components/advantages';
import Heading from '../../components/UI/heading';
import Carousel from '../../components/carousel';

import BannerImage from '../../assets/img/small_banner.jpg';

import image1 from '../../assets/img/spot-landscape.jpg';
import image2 from '../../assets/img/kitesurf.jpg';
import image3 from '../../assets/img/kitesurf-maestral.jpg';
import image4 from '../../assets/img/maestral-privlaka.jpg';
import image5 from '../../assets/img/kitesurf-maestral-5.jpg';
import image6 from '../../assets/img/kitesurf-maestral-2.jpg';
import image7 from '../../assets/img/maestral-spot.jpg';
import image8 from '../../assets/img/kitesurf-maestral-4.jpg';
import image9 from '../../assets/img/topView.jpg';
import image10 from '../../assets/img/kitesurf-maestral-3.jpg';
import image11 from '../../assets/img/maestralKitesurf.jpg';
import image12 from '../../assets/img/spot-velebit.jpg';
import * as routes from '../../constants/routes';
import * as style from './styles.module.scss';

const PHOTO_SET = [
    {
        src: image1,
        width: 1,
        height: 1
    },
    {
        src: image2,
        width: 3,
        height: 4
    },
    {
        src: image3,
        width: 4,
        height: 3
    },
    {
        src: image4,
        width: 1,
        height: 1
    },
    {
        src: image5,
        width: 4,
        height: 3
    },
    {
        src: image6,
        width: 4,
        height: 3
    },
    {
        src: image7,
        width: 1,
        height: 1
    },
    {
        src: image8,
        width: 3,
        height: 4
    },
    {
        src: image9,
        width: 4,
        height: 3
    },
    {
        src: image10,
        width: 1,
        height: 1
    },
    {
        src: image11,
        width: 4,
        height: 3
    },
    {
        src: image12,
        width: 4,
        height: 3
    },
];
const About = props => {
    const { t } = useTranslation();
    const [showDescription, setShowDescription] = React.useState(-1);
    const services = t("services.content", { returnObjects: true });
    const about = t("about", { returnObjects: true });

    const renderServices = () => Array.isArray(services) && services.map((service, index) =>
        <div key={index} className={style.about_services_card} onClick={() => props.history.push({ pathname: routes.SERVICES, state: { index: index + 1 }})}>
            <img src={service.image} className={style.hovered} />
            <h3>{service.name}</h3>
        </div>
    );

    const renderTeam = () => Array.isArray(about.team) && about.team.map((member, index) =>
        <div key={index} className={style.about_team_member}>
            <img src={member.image}/>
            <h5>{member.name}</h5>
            <p>{member.role}</p>
            <div className={style.about_team_member_description}>
                {member.desctiptionLess}{showDescription !== index && '...'}{showDescription !== index && <p onClick={() => setShowDescription(index)}>Show more</p>}
                {showDescription === index && <>{member.descriptionMore}<p onClick={() => setShowDescription(-1)}>Show less</p></>}
            </div>
        </div>
    );

    return (
        <div className={style.about}>
            <Banner src={BannerImage} title={about.title} />
            <Advantages />
            <div className={style.about_team}>
                <Heading content={about.teamTitle} theme={'center'} style={style.title} />
                <Carousel data={renderTeam()} firstBreakpoint={1450} secondBreakpoint={1000} height='auto'/>
            </div>
            <div className={style.about_services}>
                <Heading content={about.servicesTitle} theme={'center'} style={style.title}/>
                <Carousel data={renderServices()} firstBreakpoint={1450} secondBreakpoint={1000}/>
            </div>
            <div className={style.about_divider}></div>
            <div className={style.about_gallery}>
                <Heading content={about.galleryTitle} theme={'center'} style={style.title}/>
                <Gallery photos={PHOTO_SET} />
            </div>
        </div>
    );
};

export default withRouter(About);