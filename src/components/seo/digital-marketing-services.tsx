import {ASSETS} from "../common/images";
import * as React from "react";

const DigitalMarketingServices = () => {
    return (
        <section className="banner-sec-seo container-fluid gb-md-pad-ver">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="banner-first-col" data-aos="zoom-out">
                            <h1><span>Digital Marketing</span> Services<br/>
                                to Drive <span>Business Growth</span></h1>
                            <p>GeekyBones is a leading digital marketing agency with a creative spark that offers strategic internet marketing services and solutions. Our capabilities in comprehensive designing, technology, and strategizing effectively combine to build digital experiences that will increase your web traffic, acquiring qualified leads.</p>
                            <button className="gb-animate-md-btn-red mt-1 mt-md-2  mb-3 mb-md-4">Get Started Now</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="banner-second-col" data-aos="zoom-out">
                            <img src={ASSETS.SEO.DigitalMarketingDiscussion} className="banner-img" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default DigitalMarketingServices;
