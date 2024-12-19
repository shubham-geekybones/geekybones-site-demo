import {ASSETS} from "../common/images";
import {Link} from "gatsby";
import * as React from "react";

const OurMission = () => {
    return (
        <section className="our-mission-wrapper common-about-img-text-wrapper mt-4 mb-2">
            <div className="container p-md-0">
                <div className="row d-flex align-items-center">
                <div className="col-md-6">
                        <div className="about-common-description">
                            <h2>Our Mission is to Turn <span>Visions into Reality!</span></h2>
                            <p>GeekyBones is a professional and creative agency offering solutions to startups, enterprises, and small businesses. We promote new strategies and embrace innovative approaches to overcome technological challenges, making your business stay competitive in the ever-evolving marketplace</p>
                            <p>Our awards and achievements keep us motivated. We have a team of passionate developers and designers who work together to help you reach your business goals. We offer constant support, right from consultation to launching and branding online. Our services ensure increased revenue and an amazing user experience</p>
                            <Link to={'/contact-us'} className="text-uppercase gb-animate-sm-btn-red">contact us</Link>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="common-img-wrapper">
                            <img src={ASSETS.ABOUT.About} alt="Our Mission" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default OurMission;
