import { ASSETS } from "../common/images";
import * as React from "react";
import Slider from "react-slick";
import { slidesData } from "../../assets/data/tech";

const LatestTechnologiesWeServe = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
        <button
            {...props}
            className={
                "common-tech-next-prev-btn tech-prev-btn" +
                (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0}
            type="button"
        >
            <img src={ASSETS.SERVICES.SliderArrowLeftWhite} className="bg-sm-img" alt="SliderArrowLeftWhite" />
        </button>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
        <button
            {...props}
            className={
                "common-tech-next-prev-btn tech-next-btn" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1}
            type="button"
        >
            <img src={ASSETS.SERVICES.SliderArrowRightWhite} className="bg-sm-img" alt="SliderArrowRightWhite" />
        </button>
    );

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
    };
    return (
        <section className="latest-technologies slich-pos latest-tech-slider-wrapper gb-md-pad-top">
            <div className="expert-tech-heading common-heading">
                <h2 className="text-light text-center"><span>Technologies</span> we serve</h2>
                <p className="text-light text-center">GeekyBones unleash bespoke technology, providing impactful and efficient business solutions. We leverage the up to the minute technologies that help in maximizing the productivity and domination of your business in the marketplace. Our innovative solutions serve a wide array of requirements, delighting users across multiple domains.</p>
                <p className="text-light text-center">So let’s join hands and move together towards a successful business journey.</p>
            </div>
            <div className="container">
                <div className="slider three">
                    <Slider {...settings}>
                        {slidesData.map((slide, index) => (
                            <div className="common-main-div" key={index}>
                                <div className="technology-expert-sec container-fluid">
                                    <div className="container">
                                        <div className="row slider-row">
                                            <div className="col-md-6">
                                                <div className="expert-tech-col-first">
                                                    <div className="row">
                                                        {slide.technologies.map((tech, techIndex) => (
                                                            <div className={`col-12 ${slide.technologies.length > 4 ? 'col-lg-4': 'col-lg-6'}`} key={techIndex}>
                                                                <div className="common-div">
                                                                    <img src={tech.imgSrc} className="common-expert-tech-img" alt={tech.imgAlt} style={tech.imgStyle} />
                                                                    <h5>{tech.name}</h5>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="expert-tech-col-second">
                                                    <img src={slide.project.mainImgSrc} className="mobile-laptop-img" alt={slide.project.mainImgAlt} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}
export default LatestTechnologiesWeServe;
