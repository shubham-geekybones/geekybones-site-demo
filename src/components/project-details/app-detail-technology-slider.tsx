import * as React from 'react';
import Slider from "react-slick";
import {ASSETS} from "../common/images";


const AppDetailTechnologySlider =(props)=> {
    const {data} = props;
    const {technology} = data;
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
        <button
            {...props}
            className={
                "common-graphic-next-prev-btn graphic-prev-btn" +
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
                "common-graphic-next-prev-btn graphic-next-btn" +
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
        infinite: true,
        speed: 500,
        slidesToShow: technology.length > 4 ? 5 : technology.length,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <>
        <section className="technology-slider-wrap">
            <div className={"container"}>
                <div className={"slider-wrap"}>
                    <div>
                        {technology.length > 0 && (
                            <Slider {...settings}>
                                {technology.map((imgUrl) => (
                                    (imgUrl && (<div className={"slider-wrap-common"}>
                                        <div className={"common-slider-wrap"}>
                                            <img src={imgUrl} className="technology-common-img" alt="" />
                                        </div>
                                    </div>))
                                ))}
                            </Slider>
                        )}
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default AppDetailTechnologySlider;
