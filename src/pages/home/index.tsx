import Layout from "../../components/layout";
import Banner from "../../components/home/banner";
import BestMobileWebDevelopmentCompany from "../../components/home/best-mobile-web-development-company";
import LatestTechnologiesWeServe from "../../components/home/latest-technologies-we-serve";
import LatestTechnologiesWeServeMob from "../../components/home/latest-technologies-we-serve-mob";
import WhyChooseUs from "../../components/home/why-choose-us";
import ContactWithUs from "../../components/home/contact-with-us";
import * as React from "react";
import Testimonials from "../../components/home/testimonials";
import OurBlogs from "../../components/home/our-blogs";

const Home = () => {
    return (
        <Layout metaTitle={'GeekyBones | Global Web and App Development Agency'} metaDescription={'GeekyBones is a top mobile app and website development, designing, and digital marketing agency. Visit us for more information at https://www.geekybones.com/'}>
            <Banner />
            <BestMobileWebDevelopmentCompany />
            <LatestTechnologiesWeServe />
            <LatestTechnologiesWeServeMob />
            <Testimonials />
            <WhyChooseUs />
            <OurBlogs/>
            <ContactWithUs />
        </Layout>
    )
}
export default Home;
