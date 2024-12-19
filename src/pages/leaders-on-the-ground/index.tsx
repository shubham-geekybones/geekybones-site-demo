import * as React from "react";
import Layout from "../../components/layout";
import Banner from "../../components/leaders-on-the-ground/banner";
import TheTripBegin from "../../components/leaders-on-the-ground/the-trip-begin";
import HailHimalayas from "../../components/leaders-on-the-ground/hail-himalayas";
import FunAtGeeekybones from "../../components/leaders-on-the-ground/fun-at-geeekybones";
const Index = () => {
    return (
        <Layout headerCustomClass={'gb-header-main-wrapper-inner'} metaTitle={' Leaders on the Ground! - Cricket Matches'} metaDescription={'At GeekyBones, we share ideas, make connections and stay together. Our aim is to ensure that there is a work-life balance. For more information, visit us today!'}>
            <Banner />
            <TheTripBegin />
            <HailHimalayas />
            <FunAtGeeekybones />
  </Layout>
    )
}
export default Index;
