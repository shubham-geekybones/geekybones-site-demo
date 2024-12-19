import * as React from "react";
import Layout from "../../components/layout";
import Banner from "../../components/trip-to-hail-himalayas/banner";
import TheTripBegin from "../../components/trip-to-hail-himalayas/the-trip-begin";
import HailHimalayas from "../../components/trip-to-hail-himalayas/hail-himalayas";
import FunAtGeeekybones from "../../components/trip-to-hail-himalayas/fun-at-geeekybones";
const Index = () => {
    return (
        <Layout headerCustomClass={'gb-header-main-wrapper-inner'} metaTitle={'Hail Himalayas Trip - Team GeekyBones'} metaDescription={'At GeekyBones, we share ideas, make connections and stay together. Our aim is to ensure that there is a work-life balance. For more information, visit us today!'}>
            <Banner />
            <TheTripBegin />
            <HailHimalayas />
            <FunAtGeeekybones />
  </Layout>
    )
}
export default Index;
