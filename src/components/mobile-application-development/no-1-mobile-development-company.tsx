import {ASSETS} from "../common/images";
import * as React from "react";
import Slider from "react-slick";

const No1MobileDevelopmentCompany = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
        <button
            {...props}
            className={
                "common-speciality-next-prev-btn speciality-prev-btn slick-arrow" +
                (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0}
            type="button"
        >
            &#8592;
        </button>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
        <button
            {...props}
            className={
                "common-speciality-next-prev-btn speciality-next-btn slick-arrow" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1}
            type="button"
        >
            &#8594;
        </button>
    );
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
        <section className="mobile-development-company-sec container-fluid gb-md-pad-ver">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mobile-service-common-heading">
                            <h2>Renowned <span>Mobile Development Company</span></h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">

                        <div className="mobile-services-tab-wrap">
                            <div className="website-design-navbar">
                                <div className="tabs-left-div">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                                                <li className="nav-item mobile-service-nav-item" role="presentation">
                                                    <button className="nav-link active mobile-service-btn iphone-bg"
                                                            id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#website"
                                                            type="button" role="tab" aria-controls="pills-home"
                                                            aria-selected="true"> Iphone
                                                    </button>
                                                </li>
                                                <li className="nav-item mobile-service-nav-item" role="presentation">
                                                    <button className="nav-link mobile-service-btn android-bg" id="#mobile-app"
                                                            data-bs-toggle="pill" data-bs-target="#mobile-app" type="button"
                                                            role="tab" aria-controls="pills-profile" aria-selected="false">Android
                                                    </button>
                                                </li>
                                                <li className="nav-item mobile-service-nav-item" role="presentation">
                                                    <button className="nav-link mobile-service-btn ipad-bg" id="#logo-design"
                                                            data-bs-toggle="pill" data-bs-target="#logo-design" type="button"
                                                            role="tab" aria-controls="pills-contact" aria-selected="false"> Ipad
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="tab-content" id="pills-tabContent">
                                                <div className="tab-pane fade show active" id="website" role="tabpanel"
                                                     aria-labelledby="pills-home-tab">
                                                    <div className='row slider-wrap-row'>
                                                        <div className="col-lg-6">
                                                            <div className="mobile-tab-first-col">
                                                                <h4>iPhone App Development</h4>
                                                                <p>Apple has marked its territory in the tech world. Every day, several iOS apps are being launched, offering several options for the users. However, it is getting tough for businesses as they have to struggle to make their apps recognizable. So, if you want to stay ahead of the competition and plan to release an iOS app, seek help from a renowned iPhone application development company.</p>
                                                                <p>We at GeekyBones design and develop iOS apps to help businesses stand true to their goals. We have passionate developers who understand the user expectations and accordingly develop secure and robust apps. In addition, our proficient developers create feature-packed services by focusing on businesses' unique ecosystems and provide end-to-end iOS app development services, including app design, quality control, release, maintenance, and upgrade.</p>
                                                                <div className="slider-btn-wrap">
                                                                    <button className="gb-animate-md-btn-red mt-2">View Portfolio</button>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="mobile-tab-second-col">

                                                                <div className="android-app-slider-sec">
                                                                    <div className="app-slich-pos">
                                                                        <div className="smart-phone">
                                                                            <div className="smart-phone-speaker">
                                                                                <div className="smart-phone-btn"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="slider-app">
                                                                            <Slider {...settings}>
                                                                                <div className="app-slider-common">
                                                                                    <img src={ASSETS.SERVICES.MobileImage1} className="mobile-slider-common" alt="" />
                                                                                </div>
                                                                                <div className="app-slider-common">
                                                                                    <img src={ASSETS.SERVICES.MobileImage2} className="mobile-slider-common" alt="" />
                                                                                </div>
                                                                                <div className="app-slider-common">
                                                                                    <img src={ASSETS.SERVICES.MobileImage1} className="mobile-slider-common" alt="" />
                                                                                </div>
                                                                                <div className="app-slider-common">
                                                                                    <img src={ASSETS.SERVICES.MobileImage2} className="mobile-slider-common" alt="" />
                                                                                </div>
                                                                            </Slider>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                                <div className="tab-pane fade" id="mobile-app" role="tabpanel"
                                                     aria-labelledby="pills-profile-tab">

                                                    <div className='row slider-wrap-row'>
                                                        <div className="col-lg-6">
                                                            <div className="mobile-tab-first-col">
                                                                <h4>Android App Development </h4>
                                                                <p>Most businesses pick Android as the target OS as 80% of mobile users use android phones. So if you are considering an app development project for your business, it is best to utilize expert Android application development services to give the right shape to your business idea.</p>
                                                                <p>GeekyBones is a reputed Android app development company that helps you turn your business ideas into a feature-rich, smooth, interactive, and advanced app. We have proficient mobile app developers who are well-equipped with extensive knowledge of advanced technology for developing innovative Android apps. Our powerful apps are fueled with excellent ideas and are fully functional, accelerating your business operations while giving customers an engaging user experience.</p>
                                                                <div className="slider-btn-wrap">
                                                                    <button className="slider-bottom-btn mt-2">View Portfolio</button>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="mobile-tab-second-col">

                                                                <div className="android-app-slider-sec">
                                                                    <div className="app-slich-pos">
                                                                        <div className="smart-phone">
                                                                            <div className="smart-phone-speaker">
                                                                                <div className="smart-phone-btn"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="slider-app">
                                                                            <Slider {...settings}>
                                                                                <div className="app-slider-common">
                                                                                    <img src={ASSETS.SERVICES.MobileImage1} className="mobile-slider-common" alt="" />
                                                                                </div>
                                                                                <div className="app-slider-common">
                                                                                    <img src={ASSETS.SERVICES.MobileImage2} className="mobile-slider-common" alt="" />
                                                                                </div>
                                                                                <div className="app-slider-common">
                                                                                    <img src={ASSETS.SERVICES.MobileImage1} className="mobile-slider-common" alt="" />
                                                                                </div>
                                                                                <div className="app-slider-common">
                                                                                    <img src={ASSETS.SERVICES.MobileImage2} className="mobile-slider-common" alt="" />
                                                                                </div>
                                                                            </Slider>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                {/*android app tab end here */}

                                                {/*ipad  tab start here */}

                                                <div className="tab-pane fade" id="logo-design" role="tabpanel"
                                                     aria-labelledby="pills-contact-tab">


                                                    <div className='row slider-wrap-row'>
                                                        <div className="col-lg-6">
                                                            <div className="mobile-tab-first-col">
                                                                <h4>IPad App Development</h4>
                                                                <p>After iPads came into the picture, desktop and notebooks sales declined tremendously. With tablets competing in the marketplace, the iPad holds a dominant place. This ever-increasing demand for iPads resulted in iPad apps development. However, it requires a blend of proficiency, creativity, and framework to develop robust iPad applications.</p>
<p>GeekyBones is a prominent iPad app development company that creates scalable and feature-rich iPad applications to boost your business sales.  Our apps offer an enriching experience that never compromises on rich visual features. In addition, we have highly competent iPad app developers who believe in creating polished apps with high standards that add value and generate superb quality.</p>
                                                                <div className="slider-btn-wrap">
                                                                    <button className="slider-bottom-btn mt-2">View Portfolio</button>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="mobile-tab-second-col">

                                                                <div className="android-app-slider-sec">
                                                                    <div className="app-slich-pos">
                                                                        <div className="smart-phone">
                                                                            <div className="smart-phone-speaker">
                                                                                <div className="smart-phone-btn"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="slider-app">
                                                                            <Slider {...settings}>
                                                                                <div className="app-slider-common">
                                                                                    <img src={ASSETS.SERVICES.MobileImage1} className="mobile-slider-common" alt="" />
                                                                                </div>
                                                                                <div className="app-slider-common">
                                                                                    <img src={ASSETS.SERVICES.MobileImage2} className="mobile-slider-common" alt="" />
                                                                                </div>
                                                                                <div className="app-slider-common">
                                                                                    <img src={ASSETS.SERVICES.MobileImage1} className="mobile-slider-common" alt="" />
                                                                                </div>
                                                                                <div className="app-slider-common">
                                                                                    <img src={ASSETS.SERVICES.MobileImage2} className="mobile-slider-common" alt="" />
                                                                                </div>
                                                                            </Slider>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                {/*ipad tab end here */}

                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>
                </div>




            </div>

        </section>
    )
}
export default No1MobileDevelopmentCompany;
