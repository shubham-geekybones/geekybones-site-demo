import {ASSETS} from "../common/images";
import * as React from "react";
import Slider from "react-slick";

const CommonDesignSlider = () => {

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
        <button
            {...props}
            className={
                "common-graphic-next-prev-btn graphic-prev-btn slick-arrow" +
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
                "common-graphic-next-prev-btn graphic-next-btn slick-arrow" +
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
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };


    return (
        <section className="graphic-design-common-wraper container">
            <div className="row">
                <div className="col-md-6 p-md-0">
                    <div className="graphic-design-col-first-common">
                        <h3 className="text-center">GRAPHIC DESIGNING</h3>
                        <p>
                        A plain image on the website won’t bring you the right leads and traffic. Hence, to make your website more appealing, high-quality graphics can help in making your marketing efforts fruitful.
                        </p>
                        <p>
                        Designing is an art and a technique of visual communication that includes typography, photography, and illustrations. The graphic designers at GeekyBones utilize their special skill set integrating the latest softwares and technologies to create representations that speak for your business and ideologies.</p>
                    </div>
                </div>
                <div className="col-md-6 p-md-0">
                    <div className="graphic-design-col-second-common">
                        <div className="slich-slider-sec container">
                            <div className="slider-1">
                                <Slider {...settings}>
                                    <div className="slider-common">
                                        <div className="graphic-design-col-second">
                                            <div className="background-img-1-wraper">
                                                <img src={ASSETS.SERVICES.Graphic1} className="bg-lg-img" alt="" />
                                            </div>
                                            <div className="background-img-2-wraper">
                                                <img src={ASSETS.SERVICES.Graphic2} className="bg-sm-img" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-common">
                                        <div className="graphic-design-col-second">
                                            <div className="background-img-1-wraper">
                                                <img src={ASSETS.SERVICES.Graphic1} className="bg-lg-img" alt="" />
                                            </div>
                                            <div className="background-img-2-wraper">
                                                <img src={ASSETS.SERVICES.Graphic2} className="bg-sm-img" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-common">
                                        <div className="graphic-design-col-second">
                                            <div className="background-img-1-wraper">
                                                <img src={ASSETS.SERVICES.Graphic1} className="bg-lg-img" alt="" />
                                            </div>
                                            <div className="background-img-2-wraper">
                                                <img src={ASSETS.SERVICES.Graphic2} className="bg-sm-img" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row d-flex flex-md-row flex-column-reverse">
                <div className="col-md-6 p-md-0">
                    <div className="graphic-design-col-second-common">
                        <div className="slich-slider-sec container">
                            <div className="slider-1">
                                <Slider {...settings}>
                                    <div className="slider-common">
                                        <div className="graphic-design-col-second">
                                            <div className="background-img-1-wraper">
                                                <img src={ASSETS.SERVICES.Graphic1} className="bg-lg-img" alt="" />
                                            </div>
                                            <div className="background-img-2-wraper">
                                                <img src={ASSETS.SERVICES.Graphic2} className="bg-sm-img" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-common">
                                        <div className="graphic-design-col-second">
                                            <div className="background-img-1-wraper">
                                                <img src={ASSETS.SERVICES.Graphic1} className="bg-lg-img" alt="" />
                                            </div>
                                            <div className="background-img-2-wraper">
                                                <img src={ASSETS.SERVICES.Graphic2} className="bg-sm-img" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-common">
                                        <div className="graphic-design-col-second">
                                            <div className="background-img-1-wraper">
                                                <img src={ASSETS.SERVICES.Graphic1} className="bg-lg-img" alt="" />
                                            </div>
                                            <div className="background-img-2-wraper">
                                                <img src={ASSETS.SERVICES.Graphic2} className="bg-sm-img" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 p-md-0">
                    <div className="graphic-design-col-first-common">
                        <h3 className="text-center">LOGO DESIGN</h3>
                        <p>
                        Logos serve the purpose of recognition of your business for your clients. It is in the form of an emblem or symbol that conveys brand identity, trustworthiness, and professionalism.</p>
                        <p>
                        GeekyBones is one of the leading logo design companies that helps create unique and ideal business logos for brand awareness. We have a team of marvelous experts who focus on creating visual representation and ensuring that your logos convey your brand awareness.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 p-md-0">
                    <div className="graphic-design-col-first-common">
                        <h3 className="text-center">BANNER DESIGN</h3>
                        <p>
                        Banners describe the products and services of a business while interestingly conveying your message. The banner design involves a combination of professionalism, creativity, and quality as it occupies a significant place on the website.</p>
                        <p>
                        The reputed banner design team at GeekyBones incorporates the ideologies of quality and creativity in their work to deliver print or web designing projects. We take care of even the diminutive details and blend the logos, texts, colors, and images logically to put forward the message in an impressive way.</p>
                    </div>
                </div>
                <div className="col-md-6 p-md-0">
                    <div className="graphic-design-col-second-common">
                        <div className="slich-slider-sec container">
                            <div className="slider-1">
                                <Slider {...settings}>
                                    <div className="slider-common">
                                        <div className="graphic-design-col-second">
                                            <div className="background-img-1-wraper">
                                                <img src={ASSETS.SERVICES.Graphic1} className="bg-lg-img" alt="" />
                                            </div>
                                            <div className="background-img-2-wraper">
                                                <img src={ASSETS.SERVICES.Graphic2} className="bg-sm-img" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-common">
                                        <div className="graphic-design-col-second">
                                            <div className="background-img-1-wraper">
                                                <img src={ASSETS.SERVICES.Graphic1} className="bg-lg-img" alt="" />
                                            </div>
                                            <div className="background-img-2-wraper">
                                                <img src={ASSETS.SERVICES.Graphic2} className="bg-sm-img" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-common">
                                        <div className="graphic-design-col-second">
                                            <div className="background-img-1-wraper">
                                                <img src={ASSETS.SERVICES.Graphic1} className="bg-lg-img" alt="" />
                                            </div>
                                            <div className="background-img-2-wraper">
                                                <img src={ASSETS.SERVICES.Graphic2} className="bg-sm-img" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default CommonDesignSlider;
