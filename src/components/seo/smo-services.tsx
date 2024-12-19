import {ASSETS} from "../common/images";
import * as React from "react";

const SmoServices = () => {
    const smoServicesList = [
        {
            icon: 'fa-expand',
            title: 'Custom Marketing Strategy',
            description: 'We design custom social media marketing strategies that help in boosting your social media engagement and marketing efforts. At GeekyBones, we utilize data-tracking tools and analytics to improve marketing strategies and target specific topics and keywords relevant to your brand.',
        },
        {
            icon: 'fa-building',
            title: 'Social Media Campaign Reports',
            description: "We believe in providing customized, in-depth reporting measures. Besides, we also don't miss monthly meetups where we love to hear about our service-old from our clients. This helps us to have a detailed conversation over future strategies and business growth.",
        },
        {
            icon: 'fa-font-awesome',
            title: 'Brand Management',
            description: 'Our main motive is to represent your brand that is your business face. Thus, our experts create secure social media profiles on different platforms to create your brand awareness. Further, we monitor the progress and customer engagement on a regular basis.',
        },
        {
            icon: 'fa-globe',
            title: 'Diverse Marketing Experience',
            description: "GeekyBones deals in different markets; thus, our experts have experience in B2B and B2C at all sizes. We give a solid social media presence to your brand through sustained research, adaptation to online trends, and tracking and utilizing resources.",
        },
    ]
    return (
        <section className="common-services-sec smo-sercice-sec gb-md-pad-ver">
            <div className="container">
                <div className="common-services-heading common-heading-seo-design text-center mb-5" data-aos="zoom-out">
                    <h2><span>SMO</span>  Services</h2>
                    <p>Create meaningful connections and expand your brand awareness across the web through Social Media Optimization (SMM).</p>
    <p>GeekyBones cover all the aspects of effective social presence and develop strategies aligned to the latest features and trends. Our experts ensure a power-packed SMO plan that helps your business reach the target audience by amplifying your message, establishing a valuable network for your marketing needs.</p>
                    <p>Take over the digital realm and level up your social media marketing game. Let us help you find new customers and conversion opportunities through social media optimization.</p>
                </div>
                <div className="row smo-dir-change">
                <div className="col-lg-6">
                    <div className="common-services-first-col smo-first-col" data-aos="zoom-out">
                        <img src={ASSETS.SEO.TwoManDiss} className="common-img" alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="common-services-second-col" data-aos="zoom-out">
                        <div className="row">

                            {smoServicesList.map((row, index) => (
                                <div key={index} className="col-6">
                                    <div className="single-security text-center">
                                        <i className={`fa ${row.icon}`} aria-hidden="true"></i>
                                        <h5>{row.title}</h5>
                                        <p>{row.description}</p>
                                    </div>
                                </div>

                            ))}
                        </div>

                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}
export default SmoServices;
