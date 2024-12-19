import {ASSETS} from "../common/images";
import * as React from "react";
import Slider from "react-slick";

const Result = (props) => {
    const {data} = props;
    const {resultDescription, resultSlideList, className = ''} = data;
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
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: resultSlideList.length > 2 ? 3 : resultSlideList.length,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="result-sec container gb-md-pad-ver">
            <div className="result-sec-heading text-center common-heading">
                <div className="row">
                    <div className="col-lg-1">

                    </div>
                    <div className="col-lg-10">
                        <h2 className="mb-2">Result</h2>
                        <p>{resultDescription}</p>
                                         </div>
                    <div className="col-lg-1">

                    </div>
                </div>
            </div>
            <div className="slich-slider-sec gb-mobile-apps-slider container">
                <div className="slider three " id={"item-count-"+resultSlideList.length}>
                    {resultSlideList.length > 0 && (
                    <Slider {...settings}>
                        {resultSlideList.map((imgUrl) => (
                            (imgUrl && <div className={`common-main-dev ${className}`}>
                                <img className="details-slider-common-img" src={imgUrl} alt=""/>
                            </div>)
                        ))}
                    </Slider>
                    )}
                </div>
            </div>
        </section>
    )
}
export default Result;
