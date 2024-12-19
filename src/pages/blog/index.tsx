import * as React from "react";
import Layout from "../../components/layout";
import BlogList from "../../components/blog-listing/blog-list";
import Banner from "./Banner";

const blogPage = () => {
    return (
        <Layout currentPage={'Blog'}
          metaTitle={'Stay Informed with Surging Technical Trends, News, & Updates | GeekyBones'} metaDescription={'Browse GeekyBones blog and keep yourself updated with the new technologies, Google updates, launches, popular apps, and more. Contact us to make informed decisions for your projects. '}>
            <Banner/>
            <section className="blog-list-sec container-fluid gb-md-pad-ver">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <BlogList />
                        </div>
                        <div className="col-md-1">
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
)
}

export default blogPage;
