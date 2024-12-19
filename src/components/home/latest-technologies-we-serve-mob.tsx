import {ASSETS} from "../common/images";
import * as React from "react";
import Slider from "react-slick";

const LatestTechnologiesWeServeMob = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
        <button
            {...props}
            className={
                "common-tech-next-prev-btn-mob tech-prev-btn-mob" +
                (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0}
            type="button"
        >
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
        <button
            {...props}
            className={
                "common-tech-next-prev-btn-mob tech-next-btn-mob" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1}
            type="button"
        >
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
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
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:2
                }
            },
            {
                breakpoint:576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1
                }
            }
        ]
    };
    return (
        <div>
            <section className="tech-slider-2 gb-md-pad-ver">
                <div className="tech-slider-heading common-heading">
                    <h2>Latest Technologies <span>we serve</span></h2>
                </div>

                <div className="container">
                    <div className="tech three">
                        <Slider {...settings}>
                        <div className="common-tech-2">
                            <div className="technology-common-wrap">
                                <img src={ASSETS.HOME.FlutterSvg} className="common-expert-tech-img" alt="" style={{ width: 40, height: 40 }} /><h5>Flutter</h5>
                                <p>Create and deploy high-fidelity apps for Android, Windows and iOS, from a single codebase. Get beautiful, prompt, natively compiled flutter apps.</p>
                            </div>
                        </div>
                        <div className="common-tech-2">
                            <div className="technology-common-wrap">
                                <img src={ASSETS.HOME.AndroidLogoHome} className="common-expert-tech-img" alt="" style={{ width: 40, height: 40 }} />
                                <h5>Android</h5>
                                <p>Get the most out of the Android ecosystem, crafting apps and programs with high-end features.</p>
                            </div>
                        </div>
                        <div className="common-tech-2">
                            <div className="technology-common-wrap">
                                <img src={ASSETS.HOME.ReactHome} className="common-expert-tech-img" alt="" style={{ width: 40, height: 40 }} />
                                <h5>React Native</h5>
                                <p>Find the tailored React Native solutions resonating with your business needs. We create stunning business empowered cross-platform apps for Android and iOS.</p>
                            </div>
                        </div>
                        <div className="common-tech-2">
                            <div className="technology-common-wrap">
                                <img src={ASSETS.HOME.SwiftHome} className="common-expert-tech-img" alt="" style={{ width: 40, height: 40 }} />
                                <h5>Swift</h5>
                                <p>Take your projects to the advanced level with our Swift/iOS app experts. We build immaculate and custom swift app development.</p>
                            </div>
                        </div>
                        <div className="common-tech-2">
                            <div className="technology-common-wrap">
                                <img src={ASSETS.PORTFOLIO.SymfonyBlack} className="common-expert-tech-img" alt="" style={{ width: 40, height: 40 }} />
                                <h5>Symfony</h5>
                                <p>Achieve success through all the stages of creating a website on Symfony. Our dedicated symfony developers have a proven track in delivering successful projects.</p>
                            </div>
                        </div>
                        <div className="common-tech-2">
                            <div className="technology-common-wrap">
                                <img src={ASSETS.HOME.LaravelHome} className="common-expert-tech-img" alt="" style={{ width: 40, height: 40 }} />
                                <h5>Laravel</h5>
                                <p>Build feature-rich applications and websites with the most famous PHP web framework, Laravel. We offer reliable and scalable Laravel development services for businesses.</p>
                            </div>
                        </div>
                        <div className="common-tech-2">
                            <div className="technology-common-wrap">
                                <img src={ASSETS.HOME.CodineitherHome} className="common-expert-tech-img" alt="" style={{ width: 40, height: 40 }} />
                                <h5>Codeignitter</h5>
                                <p>Ignite and amplify your business with Codeigniter development solutions. It is a powerful open-source PHP framework that builds full-featured dynamic websites.</p>
                            </div>
                        </div>
                        <div className="common-tech-2">
                            <div className="technology-common-wrap">
                                <img src={ASSETS.HOME.CakephpHome} className="common-expert-tech-img" alt="" style={{ width: 40, height: 40 }} />
                                <h5>CakePHP</h5>
                                <p>Find the stunning CakePhp web application to grow above the competition. We provide a tasty treat to your business with a fast, simple yet powerful CakePhp framework.</p>
                            </div>
                        </div>
                        <div className="common-tech-2">
                            <div className="technology-common-wrap">
                                <img src={ASSETS.HOME.WordpressHome} className="common-expert-tech-img" alt="" style={{ width: 40, height: 40 }} />
                                <h5>WordPress</h5>
                                <p>Begin your journey with powerful digital solutions and user experience with our wordpress development services. We develop high-performing websites for better business results.</p>
                            </div>
                        </div>
                        <div className="common-tech-2">
                            <div className="technology-common-wrap">
                                <img src={ASSETS.HOME.Shopify} className="common-expert-tech-img" alt="" style={{ width: 40, height: 40 }} />
                                <h5>Shopify</h5>
                                <p>Automate your business with customised Shopify services. We create reliable Shopify integrations, connecting your Shopify storefront with a range of applications and systems.</p>
                            </div>
                        </div>
                        <div className="common-tech-2">
                            <div className="technology-common-wrap">
                                <img src={ASSETS.HOME.MagentoHome} className="common-expert-tech-img" alt="" style={{ width: 40, height: 40 }} />
                                <h5>Magento</h5>
                                <p>Propel and empower your e-commerce business. Our developers take full advantage of Magento development technology to upgrade your platform that stands out from the competition.</p>
                            </div>
                        </div>
                        <div className="common-tech-2">
                            <div className="technology-common-wrap">
                                <img src={ASSETS.HOME.OpenCart} className="common-expert-tech-img" alt="" style={{ width: 40, height: 40 }} />
                                <h5>Opencart</h5>
                                <p>Get remarkable OpenCart development services. Our experts craft responsive OpenCart eCommerce stores using the latest trends and emerging needs of the end-users.</p>
                            </div>
                        </div>
                        <div className="common-tech-2">
                            <div className="technology-common-wrap">
                                <img src={ASSETS.HOME.DECO} className="common-expert-tech-img" alt="" style={{ width: 40, height: 40 }} />
                                <h5>Nest JS</h5>
                                <p>Experience outstanding NestJS development services. Our experts build robust, scalable, and maintainable server-side applications using the latest technologies and industry best practices to meet the dynamic needs of your business</p>
                            </div>
                        </div>
                        <div className="common-tech-2">
                            <div className="technology-common-wrap">
                                <img src={ASSETS.HOME.NESTJS} className="common-expert-tech-img" alt="" style={{ width: 40, height: 40 }} />
                                <h5>Next JS</h5>
                                <p>Get exceptional Next.js development services. Our experts create fast, SEO-friendly, and highly performant web applications using the latest trends and technologies to meet the evolving needs of your business.</p>
                            </div>
                        </div>
                        <div className="common-tech-2">
                            <div className="technology-common-wrap">
                                <img src={ASSETS.HOME.MONGODB} className="common-expert-tech-img" alt="" style={{ width: 40, height: 40 }} />
                                <h5>MongoDB</h5>
                                <p>Discover top-notch MongoDB development services. Our experts design scalable and high-performance databases using the latest trends and technologies to meet the complex data management needs of your business.</p>                            </div>
                        </div>
                        <div className="common-tech-2">
                            <div className="technology-common-wrap">
                                <img src={ASSETS.HOME.AWS} className="common-expert-tech-img" alt="" style={{ width: 40, height: 40 }} />
                                <h5>AWS</h5>
                                <p>Leverage cutting-edge AWS development services. Our experts deploy scalable, secure, and reliable cloud solutions using the latest AWS technologies to meet the diverse needs of your business.</p>                            </div>
                        </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default LatestTechnologiesWeServeMob;
