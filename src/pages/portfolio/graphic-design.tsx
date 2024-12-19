import * as React from "react";
import GraphicDesignList from "../../components/portfolio/graphic-design-list";
import Layout from "../../components/layout";
import PortfolioTabs from "../../components/portfolio/common/portfolio-tabs";

const GraphicDesign = () => {
    return (
        <Layout headerCustomClass={'gb-header-main-wrapper-inner'} pageTitle={'Portfolio'} currentPage={'GraphicDesign'} breadcrumbView={true} metaTitle={'An Overview of Graphic Design Work | GeekyBones Case Studies'} metaDescription={'Learn more about us by getting a sneak-peak into our graphic design work. Our teams have surpassed complex challenges, delivering positive results.'}>
            <PortfolioTabs />
            <GraphicDesignList />
        </Layout>
    )
}
export default GraphicDesign;
