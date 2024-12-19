import {ASSETS} from "../common/images";
import * as React from "react";

const MobileDevelopmentServices = () => {
    const mobileDevelopmentList = [
        {
            imgUrl: ASSETS.SERVICES.MobileAppService1,
            title: 'Prototype & Strategy',
            servicesDescription: 'To develop the app prototype, we test theories and select the finest design options. We emphasize the performance and core functionality of the app. It helps our clients to gain clarity regarding the app structure, app flow, design principles, and functional parameters.',
        },
        {
            imgUrl: ASSETS.SERVICES.MobileAppService2,
            title: 'Hybrid Mobile Application',
            servicesDescription: 'Almost every business these days requires an app that can work on all platforms. Our dedicated Hybrid Mobile App developers team possesses extensive knowledge of advanced frameworks to build commendable mobile apps. In addition, our experts deliver futuristic solutions that make your cost-efficient apps ready for tomorrow\'s advancement.',
        },
        {
            imgUrl: ASSETS.SERVICES.MobileAppService3,
            title: 'Native Mobile Application',
            servicesDescription: 'Being the best mobile app developers, we focus on delivering outstanding performance. We understand the essentials of each operating system to yield the maximum benefits from its functionalities. So, leverage the full advantage and get modern features with our native apps.',
        },
        {
            imgUrl: ASSETS.SERVICES.MobileAppService4,
            title: 'Mobile App Designing',
            servicesDescription: 'A great UI/UX design can do wonders for any business. Our designers collaborate with the development team and business analysts to establish integrity, offering a well-versed mobile app design. We specialize in app design that reflects business value through functionality and features.',
        },
        {
            imgUrl: ASSETS.SERVICES.MobileAppService5,
            title: 'Full-Stack Mobile App Development',
            servicesDescription: 'Every business wants to achieve a momentum of a faster pace for success. At GeekyBones, we have a skillful team of full-stack developers with extensive experience and understanding that is necessary to create full-fledged and top-of-the-line mobile applications for your business.',
        },
        {
            imgUrl: ASSETS.SERVICES.MobileAppService6,
            title: 'Enterprise App Development',
            servicesDescription: 'Whether you are looking for end-to-end app development, project management, or team extensions, our enterprise app developers offer customer-facing and internal-facing employee apps based on specific needs. Our team specializes in native and cross-platform development to deliver the best solution.',
        },

    ]
    return (
        <section className="mobile-development-sec container-fluid gb-md-pad-ver">
            <div className="container">
                <div className="mobile-development-heading">
                    <h2><span>Mobile App</span> Development Services</h2>
                    <p>From ideation to maintenance, our developers create mobile apps by working closely with the clients to deliver easy-to-use and scalable apps.
</p>
                </div>
                <div className="row">
                    {mobileDevelopmentList.map((services, key) => (
                        <div className="col-xl-4 col-sm-6">
                            <div className="mobile-development-common-col">
                                <img src={services.imgUrl} className="mobile-development-common-img" alt="" />
                                <h5>{services.title}</h5>
                                <p>{services.servicesDescription}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default MobileDevelopmentServices;
