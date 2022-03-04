import React from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = props => {
    const sliderRef = React.useRef(null);

    const handleSwipe = () => {
        sliderRef.current.slickPause();
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        lazyLoad: 'progressive',
        autoplay: true,
        autoplaySpeed: 5000,
        onSwipe: handleSwipe,
        arrows: false,
        responsive: [
            {
                breakpoint: props.firstBreakpoint,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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
            content: '›';
        }
        .slick-prev:before {
            content: '‹';
        }
        .slick-prev:before,
        .slick-next:before {
            font-size: 50px;
            color: #0d425e;

            @media (max-width: 767px) {
                display: none;
            }
        }
        .slick-prev.slick-disabled:before,
        .slick-next.slick-disabled:before {
            display: none;
        }
        .slick-slide div {
            display: flex;
            justify-content: center;
            height: 100%;
            overflow: hidden;
        }
        .slick-slide {
            height: inherit;
        }
        .slick-track {
            display: flex;
        }
    `;

    return (
        <StyledSlider {...settings} ref={sliderRef}>
            { props.data }
        </StyledSlider>
    );
};

export default Carousel;