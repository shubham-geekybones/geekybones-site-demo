import * as React from "react";
import Layout from "../../components/layout";
import HistoryInWords from "../../components/about/history-in-words";
import OurMission from "../../components/about/our-mission";
import MeetOutLeaders from "../../components/about/meet-out-leaders";
import LifeAtGeekybones from "../../components/about/life-at-geekybones";
import OurCoreValues from "../../components/about/our-core-values";
import Banner from "../about/Banner";

const AboutPage = () => {
  return (
            <Layout metaTitle={'GeekyBones | Build and Grow your Business Digitally, and Globally'} metaDescription={'GeekyBones is your true development partner offering high-quality IT services. Let us talk solutions and grow digitally!'}>
          <Banner/>
          <OurMission />
          <HistoryInWords />
          <MeetOutLeaders />
          <LifeAtGeekybones />
          <OurCoreValues />
      </Layout>
  )
}
export default AboutPage;
