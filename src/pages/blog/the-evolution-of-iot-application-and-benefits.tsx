import Layout from "../../components/layout";
import * as React from "react";
import TheOfEvolutionIotApplicationAndBenefits
    from "../../components/blog-details/the-of-evolution-iot-application-and-benefits";

const BlogTheOfEvolutionIotApplicationAndBenefits = () => {
    return (
        <Layout headerCustomClass={'gb-header-main-wrapper-inner'} pageTitle={'IoT Complete Guide: Evolution, Application & Benefits'} currentPage={'Saturday, Jan 19, 2019'} breadcrumbView={true} lastRoute={'Blog'} lastRouteUrl={'/blog'} metaTitle={'A Complete Guide to IoT | GeekyBones'} metaDescription={'Internet is everywhere these days! Want to know more about how the application of IoT impacts day-to-day life? Visit GeekyBones to know more.'}>
            <section className="blog-list-sec blog-list-sec-2 container-fluid gb-md-pad-ver">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-10">
                            <TheOfEvolutionIotApplicationAndBenefits />
                        </div>
                        <div className="col-md-1">
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
export default BlogTheOfEvolutionIotApplicationAndBenefits;
