import * as React from "react";
import {ASSETS} from "../common/images";
import Slider from "react-slick";
import {Link} from "gatsby";

const MobileDevelopmentServices = () => {
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
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
    };
    return (
        <div>
            <section className="web-development-technology-sec mob-development-technology-sec container-fluid gb-md-pad-ver">
                <div className="technology-first-col-wd">
                    <div className="tab-button-wrapper">
                        <div className="nav flex-column nav-pills me43 position-rl tab-wraper" id="v-pills-tab"
                             role="tablist" aria-orientation="vertical">
                            <button className="nav-link tab-btn  cms-btn active" id="v-pills-home-tab-1"
                                    data-bs-toggle="pill" data-bs-target="#v-pills-home-1" type="button" role="tab"
                                    aria-controls="v-pills-home-1" aria-selected="true"><span
                                className="tab-span"> Languages </span></button>
                            <button className="nav-link tab-btn Frameworks-btn" id="v-pills-profile-tab-1"
                                    data-bs-toggle="pill" data-bs-target="#v-pills-profile-1" type="button" role="tab"
                                    aria-controls="v-pills-profile-1" aria-selected="false"><span
                                className="tab-span">Web services </span></button>
                            <button className="nav-link tab-btn web-service-btn" id="v-pills-messages-tab-1"
                                    data-bs-toggle="pill" data-bs-target="#v-pills-messages-1" type="button" role="tab"
                                    aria-controls="v-pills-messages-1" aria-selected="false"><span className="tab-span"> Frontend </span>
                            </button>
                            <button className="nav-link tab-btn js-libraries" id="v-pills-settings-tab-1"
                                    data-bs-toggle="pill" data-bs-target="#v-pills-settings-1" type="button" role="tab"
                                    aria-controls="v-pills-settings-1" aria-selected="false"><span
                                className="tab-span"> Database </span></button>
                        </div>
                    </div>
                </div>

                <div className="container">

                    <div className="row web-dev-technology-row d-flex flex-column-reverse flex-xl-row">
                        <div className="col-xl-6">
                            <div className="technology-second-col">
                                <div className="tab-content" id="v-pills-tabContent">
                                    {/* cms tab content */}
                                    <div className="tab-pane fade show active" id="v-pills-home-1" role="tabpanel"
                                         aria-labelledby="v-pills-home-tab-1">
                                        <div className="row">
                                            <div className="hexagon-wrapper">
                                                <aside className="magento-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="reactjs-bg-wrap common-bg-icon">
                                                            </div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="woo-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="flutter-bg-wrap common-bg-icon">
                                                            </div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="drupal-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="objective-c-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="shopify-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="swift-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="bigcommcer-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="kotlin-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  web services tab content */}
                                    <div className="tab-pane fade" id="v-pills-profile-1" role="tabpanel"
                                         aria-labelledby="v-pills-profile-tab-1">
                                        <div className="row">
                                            <div className="hexagon-wrapper">
                                                <aside className="drupal-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="globe-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="shopify-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="xml-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="bigcommcer-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="jason-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="magento-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="ajax-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="woo-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="graphql-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  frontend tab content */}
                                    <div className="tab-pane fade" id="v-pills-messages-1" role="tabpanel"
                                         aria-labelledby="v-pills-messages-tab-1">
                                        <div className="row">
                                            <div className="hexagon-wrapper">
                                                <aside className="magento-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="reactjs-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="shopify-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="flutter-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="woo-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="material-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="drupal-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="bootstrap-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                            </div>
                                        </div>
                                    </div>

                                    {/*database content tab */}
                                    <div className="tab-pane fade" id="v-pills-settings-1" role="tabpanel"
                                         aria-labelledby="v-pills-settings-tab-1">
                                        <div className="row">
                                            <div className="hexagon-wrapper">
                                                <aside className="drupal-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="firebase-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="shopify-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="parse-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="woo-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="cometchat-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="magento-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="websocket-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="technology-third-col">
                                <h2>We Offer <span>Feature Rich Mobile App Development</span> Services</h2>
                                <p>The development of mobile applications depends on choosing the right technology and platform for every business. Therefore, we perform in-depth research, and through our consistent research, we adopt wide-scale technologies ensuring that we pick the right technology and tool throughout the app development process.</p>

                                <p>From ideation to maintenance, our developers create mobile apps by working closely with the clients to deliver easy-to-use and scalable apps.</p>
                                <p>GeekyBones is considered one of the leading mobile application development companies offering visionary and reliable technology. We strive to offer out-of-the-box solutions and futuristic approaches to satisfy our customers regardless of the project's complexity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hexagonal-slider">
        <div className="slich-pos">
            <div className="container">
                <div className="slider three">
                    <Slider {...settings}>
                        <div className="common">
                            <aside className="wordpress-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="wordpress-bg-wrap common-bg-icon">
                                        </div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="drupal-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="drupal-bg-wrap common-bg-icon">
                                        </div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="wix-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="wix-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="shopify-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="sopify-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="bigcommcer-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="big-commerce-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="magento-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="magento-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="woo-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="woo-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="drupal-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="laravel-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="shopify-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="cakephp-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="bigcommcer-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="yii-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="magento-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="zend-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="woo-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="codieither-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="drupal-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="globe-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="shopify-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="xml-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="bigcommcer-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="jason-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="magento-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="ajax-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="woo-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="graphql-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="drupal-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="jquery-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="shopify-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="prototype-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="bigcommcer-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="angular-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="magento-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="flutter-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="woo-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="graphql-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="drupal-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="html-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="shopify-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="css-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="bigcommcer-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="javascript-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="magento-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="sass-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="woo-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="bootstrap-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>
                        <div className="common">
                            <aside className="wordpress-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="mysql-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>

                        </div>
                        <div className="common">
                            <aside className="wix-wrap">
                                <a className="hexagonal_shape">
                                    <div className="hexa-box">
                                        <div className="mongodb-bg-wrap common-bg-icon"></div>
                                    </div>
                                </a>
                            </aside>
                        </div>

                    </Slider>
                </div>
            </div>

        </div>

    </section>
        </div>
    )
}
export default MobileDevelopmentServices;
