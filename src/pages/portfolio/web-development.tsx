import * as React from 'react';
import Layout from "../../components/layout";
import PortfolioTabs from "../../components/portfolio/common/portfolio-tabs";
import WebDevelopmentList from "../../components/portfolio/web-development-list";
import Banner from './Banner';

const WebDevelopment = () => {
    return (
    <Layout 
    // headerCustomClass={'gb-header-main-wrapper-inner'} pageTitle={'Portfolio'} breadcrumbView={true} 
     currentPage={'WebDevelopment'}  metaTitle={'An Overview of Web Development Work | GeekyBones Case Studies'} metaDescription={'Learn more about us by getting a sneak-peak into our web development work. Our teams have surpassed complex challenges, delivering positive results.'}>
        <Banner/>
        <PortfolioTabs />
        <WebDevelopmentList />
    </Layout>


    )
}
export default WebDevelopment;
