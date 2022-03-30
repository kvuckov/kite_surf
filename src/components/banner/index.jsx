import React from 'react';
import { withRouter } from 'react-router';
import { useTranslation } from "react-i18next";
import { convertToWebp } from '../../utils/convertToWebp';

import * as routes from '../../constants/routes';

import styles from './styles.module.scss';
import Button from '../UI/button';

import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import image1 from '../../assets/img/kite_bridge.webp'
import image2 from '../../assets/img/board_in_sea.webp'
import image3 from '../../assets/img/maestralKitesurf.webp'
import arrow from '../../assets/svg/banner-arrow.svg'

const Banner = props => {
    const { t } = useTranslation();
    const translation = t("home.banner", { returnObjects: true });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        lazyLoad: 'progressive',
        autoplay: false,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: props.firstBreakpoint,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: props.secondBreakpoint,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const StyledSlider = styled(Slider)`
        .slick-next:before {
            content: url(${arrow});
        }
        .slick-prev:before {
            content: url(${arrow});
        }
        .slick-prev:before,
        .slick-next:before {
            font-size: 50px;
            color: #FBB13D;
        }
        .slick-prev.slick-disabled:before,
        .slick-next.slick-disabled:before {
            display: none;
        }
        .slick-slide {
            height: inherit;
        }
        .slick-track {
            display: flex;
        }
        .slick-prev {
            left: 25px;
            z-index: 1;
            transform: rotate(270deg);
        }
        .slick-next {
            right: 25px;
            transform: rotate(90deg);
        }
        .slick-prev,
        .slick-next {
            width: 30px;
            height: 30px;
            @media (max-width: 600px) {
                display: none !important;
            }
        }
        .slick-dots {
            bottom: 25px;
        }
        .slick-dots li {
            width: 40px;
        }
        .slick-dots li button:before {
            font-size: 20px;
            background-color: #FBB13D;
            content: '';
            width: 40px;
            height: 5px;
        }
    `;

    const renderBanners = () => [image1, image3, image2].map((image, index) => <>
        <div className={styles.banner} style={{ backgroundImage: `url(${image})` }}>
            <div className={styles.title} style={{ flexDirection: index === 1 && 'column-reverse', color: index === 1 && '#FBB13D' }}>
                <span className={styles.title_first}>{index === 1 ? translation[2] : translation[0]}</span>
                <h1 className={styles.title_second}>{translation[1]}</h1>
                <span className={styles.title_third} style={{ color: index === 1 && '#FBB13D' }}>{index === 1 ? translation[0] : translation[2]}</span>
                {index !== 1 && <div className={styles.banner_button_wrapper} >
                    <Button onClick={() => props.history.push(routes.PRICING)} text={t("lessonButton")} medium={true} type={'primary'} className={styles.banner_button} />
                </div>}
            </div>
        </div>
    </>)

    return (
        <StyledSlider {...settings}>
            {renderBanners()}
        </StyledSlider>
    );
};

export default withRouter(Banner);