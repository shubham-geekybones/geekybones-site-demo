import * as React from "react";
import {ASSETS} from "../common/images";
import Slider from "react-slick";
import {Link} from "gatsby";

const WebDevelopmentServices = () => {
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
            <section className="web-development-technology-sec container-fluid gb-md-pad-ver">
                <div className="technology-first-col-wd">
                    <div className="tab-button-wrapper">
                        <div className="nav flex-column nav-pills me43 position-rl tab-wraper" id="v-pills-tab"
                             role="tablist" aria-orientation="vertical">
                            <button className="nav-link tab-btn  cms-btn active"
                                    id="v-pills-home-tab"
                                    data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab"
                                    aria-controls="v-pills-home" aria-selected="true"><span
                                className="tab-span"> CMS </span></button>
                            <button className="nav-link tab-btn Frameworks-btn" id="v-pills-profile-tab"
                                    data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab"
                                    aria-controls="v-pills-profile" aria-selected="false"><span
                                className="tab-span">Frameworks </span></button>
                            <button className="nav-link tab-btn web-service-btn" id="v-pills-messages-tab"
                                    data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab"
                                    aria-controls="v-pills-messages" aria-selected="false"><span className="tab-span"> Web Services </span>
                            </button>
                            <button className="nav-link tab-btn js-libraries" id="v-pills-settings-tab"
                                    data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab"
                                    aria-controls="v-pills-settings" aria-selected="false"><span
                                className="tab-span"> JsLibraries </span></button>
                            <button className="nav-link tab-btn front-end-btn" id="v-pills-settings-tab"
                                    data-bs-toggle="pill" data-bs-target="#web-designer" type="button" role="tab"
                                    aria-controls="v-pills-settings" aria-selected="false"><span
                                className="tab-span">Front-End </span></button>
                            <button className="nav-link tab-btn database-btn" id="v-pills-settings-tab"
                                    data-bs-toggle="pill" data-bs-target="#digital-marketing" type="button" role="tab"
                                    aria-controls="v-pills-settings" aria-selected="false"><span
                                className="tab-span">Database </span></button>
                        </div>
                    </div>
                </div>

                <div className="container">

                    <div className="row  web-dev-technology-row">
                        <div className="col-xl-6">
                            <div className="technology-third-col">


                                <h2>We Develop <span>Exceptional Websites </span> to Proliferate Your Business</h2>
                                <p>The website is an online foundation of your company. It is a platform that can take your business to the next level of success. Thus, having a constructive and engaging website is a vital element for your marketing strategy where you have to be precise in your choice of development decisions. </p>

                                <p>We, at GeekyBones, develop websites that enhance user experience and increase your business conversions at a greater rate. In addition, we create websites that deliver a productive and appealing design, defining your brand through a customer-centric and functional approach. As a leading IT company, we combine technology and design by constantly observing the emerging trends of modern businesses and focus on research to perceive the emerging demand or requirements of the consumers.</p>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="technology-second-col">
                                <div className="tab-content" id="v-pills-tabContent">
                                    {/* cms tab content */}
                                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                                         aria-labelledby="v-pills-home-tab">
                                        <div className="row">
                                            <div className="hexagon-wrapper">
                                                <aside className="wordpress-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="wordpress-bg-wrap common-bg-icon">
                                                            </div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="drupal-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="drupal-bg-wrap common-bg-icon">
                                                            </div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="wix-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="wix-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="shopify-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="sopify-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="bigcommcer-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="big-commerce-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="magento-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="magento-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="woo-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="woo-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  framwork tab content */}
                                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                         aria-labelledby="v-pills-profile-tab">
                                        <div className="row">
                                            <div className="hexagon-wrapper">
                                                <aside className="drupal-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="laravel-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="shopify-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="cakephp-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="bigcommcer-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="reactjs-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="magento-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="zend-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="woo-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="codieither-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  web service-old tab content */}
                                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel"
                                         aria-labelledby="v-pills-messages-tab">
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

                                    {/*js libraries content tab */}
                                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel"
                                         aria-labelledby="v-pills-settings-tab">
                                        <div className="row">
                                            <div className="hexagon-wrapper">
                                                <aside className="drupal-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="jquery-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="shopify-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="reactjs-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="bigcommcer-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="angular-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="magento-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="flutter-bg-wrap common-bg-icon"></div>
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
                                    {/* front-end content tab */}
                                    <div className="tab-pane fade" id="web-designer" role="tabpanel"
                                         aria-labelledby="v-pills-settings-tab">
                                        <div className="row">
                                            <div className="hexagon-wrapper">
                                                <aside className="drupal-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="html-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="shopify-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="css-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="bigcommcer-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="svelte-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="magento-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="sass-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="woo-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="bootstrap-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                            </div>
                                        </div>
                                    </div>
                                    {/* database content tab */}
                                    <div className="tab-pane fade" id="digital-marketing" role="tabpanel"
                                         aria-labelledby="v-pills-settings-tab">
                                        <div className="row">
                                            <div className="hexagon-wrapper">
                                                <aside className="drupal-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="mysql-x5-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>

                                                <aside className="woo-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="psql-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>
                                                <aside className="shopify-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="rabbitmq-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>



                                                <aside className="magento-wrap">
                                                    <a className="hexagonal_shape">
                                                        <div className="hexa-box">
                                                            <div className="mongodb-bg-wrap common-bg-icon"></div>
                                                        </div>
                                                    </a>
                                                </aside>


                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section
            >
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
export default WebDevelopmentServices;
