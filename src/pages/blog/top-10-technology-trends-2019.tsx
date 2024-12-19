import Layout from "../../components/layout";
import * as React from "react";
import Top10TechnologyTrends2019 from "../../components/blog-details/top-10-technology-trends-2019";

const BlogTop10TechnologyTrends2019 = () => {
    return (
        <Layout headerCustomClass={'gb-header-main-wrapper-inner'} pageTitle={'Top 10 Technology Trends in 2019'} currentPage={'Saturday, January 5, 2019'} breadcrumbView={true} lastRoute={'Blog'} lastRouteUrl={'/blog'} metaTitle={'Learn About Technology Trends In 2019 | GeekyBones'} metaDescription={"Technology is skyrocketing! There are so many evolving trends that are making our lives easier. Let's dive in and learn about them."}>
            <section className="blog-list-sec blog-list-sec-2 container-fluid gb-md-pad-ver">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-10">
                            <Top10TechnologyTrends2019 />
                        </div>
                        <div className="col-md-1">
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
export default BlogTop10TechnologyTrends2019;
