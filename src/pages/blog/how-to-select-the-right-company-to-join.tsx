import Layout from "../../components/layout";
import * as React from "react";
import HowToSelectTheRightCompanyToJoin from "../../components/blog-details/how-to-select-the-right-company-to-join";

const BlogHowToSelectTheRightCompanyToJoin = () => {
    return (
        <Layout headerCustomClass={'gb-header-main-wrapper-inner'} pageTitle={'How to Select the Right Company to Join, for Your Career Growth'} currentPage={'Saturday, Jan 12, 2019'} breadcrumbView={true} lastRoute={'Blog'} lastRouteUrl={'/blog'} metaTitle={'Selecting the Right Company for Career Growth - GeekyBones'} metaDescription={'There are so many things that must be considered before selecting the company. Check out the various tips and get ready to reach new heights. Read more!'}>
            <section className="blog-list-sec blog-list-sec-2 container-fluid gb-md-pad-ver">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-10">
                            <HowToSelectTheRightCompanyToJoin />
                        </div>
                        <div className="col-md-1">
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
export default BlogHowToSelectTheRightCompanyToJoin;
