import {ASSETS} from "../common/images";
import * as React from "react";

const ContentWriting = () => {
    const contentWritingList = [
        {
            icon: 'fa-search',
            title: 'Website Content and Reviews',
            description: 'The content on the website makes ever-lasting impressions! Thus, at GeekyBones, we deliver superior grade, immaculate content to bring you to the top of the content game. Also, we reply to the online reviews and share further parts of your story to make the most out of marketing efforts.',
        },
        {
            icon: 'fa-lock',
            title: 'Content Marketing Service & Strategy',
            description: 'We create audience-oriented content that includes blog writing, article writing, website content, etc. Accordingly, we create a customized content marketing strategy based on the core values of the business and our clients\' end goals.',
        },
        {
            icon: 'fa-star-half-o',
            title: 'Business Writing',
            description: 'Business writing forms an important part by facilitating formal communication or introduction to a business. We at GeekyBones produce informative and proven business wiring that includes whitepaper writing, copywriting, etc.',
        },
        {
            icon: 'fa-desktop',
            title: 'Social Media Promotion and Monitoring',
            description: 'Business websites these days get most of the traffic from social media platforms. Thanks to the quality content that is promoted and distributed through the right channels, gaining maximum traction. Our team creates SEO-friendly content service-old to build an online presence that yields positive results.',
        },
    ]
    return (
        <section className="common-services-sec content-writing-sec container-fluid gb-md-pad-ver">
            <div className="container">
                <div className="common-services-heading common-heading-seo-design text-center" data-aos="zoom-out">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2><span>Content Writing</span><br />
                                 & Marketing Services</h2>
                            <p>Engage customers with high-impact content marketing services.</p>
                            <p>GeekyBones leverages the power of rich content to boost your business while targeting your audience with the quality and the keywords that assure promising readership. Content is the soul of online marketing, and thus our experts create well-researched and SEO-friendly content that encourages sales and persuades clients to get in touch with your brand.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="common-services-first-col" data-aos="zoom-out">
                            {/* <img src={ASSETS.SEO.ThreeGirlDisc} className="common-img" alt="" /> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="common-services-second-col">
                            <div className="row">

                                {contentWritingList.map((row, index) => (
                                    <div key={index} className="col-sm-6">
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
export default ContentWriting;
