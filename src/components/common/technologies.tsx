import * as React from "react";
import {ASSETS} from "./images";
import Slider from "react-slick";

const Technologies = (props) => {
    const {slidesToShow = 6} = props;
    const webDevTechList = [
        {
            img: ASSETS.WEBDEVELOPMENT.NodeJs,
        },
        {
            img: ASSETS.WEBDEVELOPMENT.SymfonyBlack,
        },
        {
            img: ASSETS.WEBDEVELOPMENT.Php,
        },
        {
            img: ASSETS.WEBDEVELOPMENT.React,
        },
        {
            img: ASSETS.WEBDEVELOPMENT.JavaWd,
        },
        {
            img: ASSETS.WEBDEVELOPMENT.Kotlin,
        },
        {
            img: ASSETS.WEBDEVELOPMENT.SymfonyBlack,
        },
        {
            img: ASSETS.WEBDEVELOPMENT.Php,
        },
    ]
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
        <button
            {...props}
            className={
                "common-about-our-services-next-prev-btn about-our-services-prev-btn" +
                (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0}
            type="button"
        >
            <img src={ASSETS.SERVICES.SliderArrowLeft} className="bg-sm-img" alt="" />
        </button>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
        <button
            {...props}
            className={
                "common-about-our-services-next-prev-btn about-our-services-next-btn" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1}
            type="button"
        >
            <img src={ASSETS.SERVICES.SliderArrowRight} className="bg-sm-img" alt="" />
        </button>
    );
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className="container-fluid">
            <div className="row common-technology-competence-wrapper">
                <div className="col-md-12">
                    <Slider {...settings}>
                        {webDevTechList.map((row, index) => (
                            <div className="Technology-Competence-common-col" key={index}>
                                <img src={row.img} className="Technology-Competence-common-img" alt="" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default Technologies;
