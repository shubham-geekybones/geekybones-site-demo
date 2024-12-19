import Layout from "../../components/layout";
import * as React from "react";
import MobileAppBusinessIndustry from "../../components/blog-details/mobile-app-business-industries";

const MobileAppIdeasToFuelDifferentBusinessIndustries = () => {
    return (
        <Layout headerCustomClass={'gb-header-main-wrapper-inner'}
                pageTitle={'Mobile Apps Ideas to Fuel Different Business Industries'}
                currentPage={'Wednesday, Sep 22, 2021'}
                breadcrumbView={true} lastRoute={'Blog'}
                lastRouteUrl={'/blog' }
                metaTitle={'Mobile App Ideas for Business Industries | GeekyBones'}
                metaDescription={'Want to accelerate your business in days? Get mobile apps for your business industry and achieve growth. For more information, visit the website today!'}
        >
            <section className="blog-list-sec blog-list-sec-2 container-fluid gb-md-pad-ver">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-10">
                            <MobileAppBusinessIndustry/>
                        </div>
                        <div className="col-md-1">
                        </div>
                        </div>
                </div>
            </section>
        </Layout>
    )
}
export default MobileAppIdeasToFuelDifferentBusinessIndustries;
