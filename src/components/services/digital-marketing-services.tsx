import * as React from "react";
import {ASSETS} from "../common/images";
import Slider from "react-slick";
import {Link} from "gatsby";

const DigitalMarketingServices = () => {
    return (
        <div>
            <section className="web-development-technology-sec digital-marketing-services-sec container-fluid gb-md-pad-ver">
                <div className="container">
                    <div className="row web-dev-technology-row d-flex flex-column-reverse flex-xl-row">
                        <div className="col-xl-6">
                            <div className="technology-second-col">
                                <img src={ASSETS.SERVICES.DigitalMarketingServices} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="technology-third-col">
                                <h2>Stay Ahead with <span>Innovative Strategies &
                                Grow your Business </span> Digitally</h2>
                                <p>GeekyBones offers a complete package, meeting all your online marketing requirements and expectations. We offer solutions that would help you grab the attention and reach out to your audience. Our team of experts excel in all aspects and create smart digital solutions to elevate your business success with improved online visibility and increased ROI. So, what are you waiting for? Claim success with our recognized digital marketing strategies and get shooting results.</p>

                                <p>Take over the digital realm and level up your Search Engine Optimization, content marketing and social media marketing game. Let us help you find new customers and conversion opportunities through social media optimization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default DigitalMarketingServices;
