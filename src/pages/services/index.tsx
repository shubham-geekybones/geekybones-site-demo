import * as React from "react";
import Layout from "../../components/layout";
import WebDevelopmentTechnologyCompetence from "../../components/services/web-development-technology-competence";
import CommonServiceTitle from "../../components/services/common-service-title";
import WebDevelopmentServices from "../../components/services/web-development-services";
import MobileDevelopmentServices from "../../components/services/mobile-development-services";
import GraphicDesignServices from "../../components/services/graphic-design-services";
import DigitalMarketingServices from "../../components/services/digital-marketing-services";
import {Link} from "gatsby";
import {ASSETS} from "../../components/common/images";
import Banner from "./Banner";

const Index = () => {
    return (
        <Layout  pageTitle={'Our Services'} currentPage={'Our Services'} metaTitle={'Make your Business Stand Out with Top IT Services | GeekyBones'} metaDescription={'GeekyBones offers a suite of services to make your business a step ahead of the competitors. Get our Mobile Apps and Websites development, designing, and online marketing services at affordable prices.'}>
            <Banner/>
            <CommonServiceTitle title={'Customised <span>Web Development</span>'} description={'Our dedicated web developers offer custom web development services that help you gain better control of your brand identity. We identify your goals and accordingly plan strategies matching your market framework and offering exquisitely robust user experiences. As a result, we have been successfully completing web projects with compelling functionality for several industries with diverse business domains.'} />
            <WebDevelopmentServices />
            <CommonServiceTitle title={'Responsive <span>Mobile Development</span>'} description={'Tablets, phones, and wearables would have never been that exciting without application development. With mobile applications ruling the world, every business is making a big shift from websites to mobiles for connections. So, empower your business with user-friendly intuitive apps that allow you to define boundaries in your domain. We at GeekyBones craft the best mobile app solutions that meet client\'s expectations. '} />
            <MobileDevelopmentServices />
            <CommonServiceTitle title={'Impressive <span>Graphic Design</span>'} description={'The smooth user journey makes it easier for businesses to reach out to their goals. Thus, a good design is vital for brand recognition. GeekyBones, as the top web design company, provides key solutions and ideas for developing ever-changing UX/UI trends to enhance your web presence. Our creative tech-heads deliver user-friendly, truly captivating, and incredibly responsive websites by bridging the gap between business and customers.'} />
            <GraphicDesignServices />
            <CommonServiceTitle title={'Top-notch <span>Digital Marketing</span>'} description={'GeekyBones is a leading digital marketing agency with a creative spark that offers strategic internet marketing services and solutions. Our capabilities in comprehensive designing, technology, and strategizing effectively combine to build digital experiences that will increase your web traffic, acquiring qualified leads.'} />
            <DigitalMarketingServices />
            <section className="gb-md-pad-ver">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-12">
                            <div className="hire-us-text-wrapper">
                                <p>Get an impressive, fast and intuitive website! <span>Hire us</span></p>
                            </div>
                        </div>
                        <div className="col-md-12">
                          <div className="hire-us-links-wrapper">
                              <Link to={'https://www.upwork.com/agencies/~01690bbf528071df70'}><img src={ASSETS.WEBDEVELOPMENT.Upwork} alt="" className="up-work" /></Link>
                              <Link to={'https://www.freelancer.com/u/manojsainig'}><img src={ASSETS.WEBDEVELOPMENT.Freelancer} alt="" /></Link>
                          </div>
                        </div>
                    </div>
                </div>
            </section>
            <WebDevelopmentTechnologyCompetence />
        </Layout>
    )
}
export default Index;
