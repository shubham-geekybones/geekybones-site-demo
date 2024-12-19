import * as React from "react";

const WeWorkOnIndustries = () => {
    const workIndustriesList = [
        {
            icon1: 'fa-plane',
            title: 'Booking',
        },
        {
            icon1: 'fa-shopping-cart',
            title: 'Retail & Ecommerce',
        },
        {
            icon1: 'fa-book',
            title: 'Fleet Management',
        },
        {
            icon1: 'fa-medkit',
            title: 'Healthcare & Fitness',
        },
        {
            icon1: 'fa-cutlery',
            title: 'Food & Restaurant',
        },
        {
            icon1: 'fa-graduation-cap',
            title: 'Eduvationa & e-learning',
        },
        {
            icon1: 'fa-line-chart',
            title: 'Fintech',
        },
        {
            icon1: 'fa-gamepad',
            title: 'Gaming',
        },

    ]
    return (
        <section className="we-work-on-industry-sec gb-md-pad-ver">
            <div className="container">
                <div className="we-work-industry-heading">

                    <h2><span>Industries</span> We Serve</h2>
                    <p>GeekyBones is considered one of the leading mobile application development companies offering visionary and reliable technology. We strive to offer out-of-the-box solutions and futuristic approaches to satisfy our customers regardless of the project's complexity.</p>
                </div>
                <div className="row">
                    {workIndustriesList.map((row) => (
                        <div className="col-md-4 col-lg-3 col-6">
                            <div className="single-security text-left digital-market-common">
                                <i className={`fa ${row.icon1}`} aria-hidden="true"></i>
                                <h5>{row.title}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default WeWorkOnIndustries;
