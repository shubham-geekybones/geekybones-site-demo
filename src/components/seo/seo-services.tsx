import {ASSETS} from "../common/images";
import * as React from "react";

const SeoServices = () => {
        const SeoServiceList = [
            {
                icon: 'fa-bar-chart',
                title: 'Advanced SEO Analysis',
                description: 'Our technical experts deeply analyze your website, discovering the weaknesses and the strengths. Our professionals then optimize it to establish a strong online presence and foundation. The goal is to increase the crawlability and indexability of your website.',
            },
            {
                icon: 'fa-search',
                title: 'Keyword Researching',
                description: 'Keywords lay the foundation of a great SEO campaign. GeekyBones is a professional search engine optimization company that understands your niche and works accordingly to boost your rankings for specific targeted terms.',
            },
            {
                icon: 'fa-link',
                title: 'Link Building',
                description: 'Our digital marketing experts put all their endeavours to get your page content posted with the maximum influential audience. In addition, we utilize unique, compelling content, strategic guest blogging, distribute data-driven infographics, and boost social media engagement while building quality backlinks.',
            },
            {
                icon: 'fa-line-chart',
                title: 'Competitor Analysis',
                description: 'It is vital to be updated with the competitor\'s marketing strategy to stay ahead of the competitors. GeekyBones professionals believe in a thorough understanding of the competitors to nurture your online presence. Additionally, we focus on desktop and mobile SEO to increase the traffic, CTR (Click-Through-Rates), leads, and sales.',
            },

        ]
    return (
        <section className="common-services-sec seo-service-sec container gb-md-pad-ver">
            <div className="common-services-heading common-heading-seo-design text-center mb-5" data-aos="zoom-out">
                <h2><span>SEO</span> Services</h2>
                <p>Make your brand visible worldwide with premium SEO services.</p>
<p>At GeekyBones, we are committed to delivering excellent results by adapting the best SEO practices. Our Search Engine Optimization professionals have years of experience and market know-how that improves your website's organic visibility on search engines - Google, Bing, etc.</p>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="common-services-first-col seo-services-first-col" data-aos="zoom-out">
                        <img src={ASSETS.SEO.SeoGirl} className="common-img" alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="common-services-second-col">
                        <div className="row">

                            {SeoServiceList.map((row, index) => (
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
        </section>
    )
}
export default SeoServices;
