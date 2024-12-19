import * as React from "react";

const ReliableFullService = () => {
    const reliableServiceList = [
        {
            icon: 'fa-trophy',
            title1: 'Industry',
            title2: 'Experts',
        },
        {
            icon: 'fa-user',
            title1: 'Result-Oriented',
            title2: 'Services',
        },
        {
            icon: 'fa-file-text',
            title1: 'Customized Marketing',
            title2: 'Framework',
        },
        {
            icon: 'fa-support',
            title1: 'Competitive pricing with ',
            title2: 'great support',
        },
    ]
    return (
        <section className="digital-marketing-services-sec container-fluid gb-md-pad-ver">
            <div className="common-services-second-col container">
                <div className="digital-marketing-service-heading common-heading-seo-design text-center"
                     data-aos="zoom-out">
                    <h2>Stay Ahead with <span>Top-Notch Strategies</span>
                        <br/>
                        & Grow your <span>Business Digitally</span></h2>
                    <p>GeekyBones offers a complete package, meeting all your online marketing requirements and expectations. We offer solutions that would help you grab the attention and reach out to your audience. Our team of experts excel in all aspects and create smart digital solutions to elevate your business success with improved online visibility and increased ROI.</p>
<p>So, what are you waiting for? Claim success with our recognized digital marketing strategies and get shooting results. </p>
                </div>
                <div className="row">
                    {reliableServiceList.map((row, index) => (
                        <div key={index} className="col-md-3 col-6">
                            <div className="single-security text-center digital-market-common">
                                <i className={`fa ${row.icon}`} aria-hidden="true"></i>
                                <h5>{row.title1} <br/>{row.title2} </h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default ReliableFullService;
