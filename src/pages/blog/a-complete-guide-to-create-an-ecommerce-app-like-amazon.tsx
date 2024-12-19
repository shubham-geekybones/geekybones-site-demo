import Layout from "../../components/layout";
import * as React from "react";
import ACompleteGuidetoCreateanEcommerceAppLikeAmazon
    from "../../components/blog-details/a-complete-guide-to-create-an-ecommerce-app-like-amazon/Index";

const BlogTACompleteGuidetoCreateanEcommerceAppLikeAmazon = () => {
    return (
        <Layout headerCustomClass={'gb-header-main-wrapper-inner'} pageTitle={'A Complete Guide to Create an Ecommerce App Like Amazon'} currentPage={'8 Oct, 2021'} breadcrumbView={true} lastRoute={'Blog'} lastRouteUrl={'/blog'} metaTitle={'A Complete Guide to Create an Ecommerce App | GeekyBones'} metaDescription={'Earn huge revenues by creating an ever-evolving e-commerce app. Visit GeekyBones and learn step by step process to create an e-commerce app like Amazon.'}>
            <section className="blog-list-sec blog-list-sec-2 container-fluid gb-md-pad-ver">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-10">
                           <ACompleteGuidetoCreateanEcommerceAppLikeAmazon />
                        </div>
                        <div className="col-md-1">
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
export default BlogTACompleteGuidetoCreateanEcommerceAppLikeAmazon;
