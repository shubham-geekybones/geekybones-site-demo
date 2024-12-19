import * as React from "react";
import MobileAppDevelopmentList from "../../components/portfolio/mobile-app-development-list";
import Layout from "../../components/layout";
import PortfolioTabs from "../../components/portfolio/common/portfolio-tabs";

const MobileAppDevelopment = () => {

    return (
        <Layout headerCustomClass={'gb-header-main-wrapper-inner'} pageTitle={'Portfolio'} currentPage={'MobileAppDevelopment'} breadcrumbView={true} metaTitle={'An Overview of Mobile App Development Case Studies | GeekyBones '} metaDescription={'Learn more about us by getting a sneak-peak into our mobile app development work. Our teams have surpassed complex challenges, delivering positive results.'}>
            <PortfolioTabs />
            <MobileAppDevelopmentList />
        </Layout>
    )
}
export default MobileAppDevelopment;
