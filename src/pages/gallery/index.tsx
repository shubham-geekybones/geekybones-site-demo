import * as React from "react";
import Layout from "../../components/layout";
import WeAreHiringTabs from "../../components/careers/careers-tabs";
import Breadcrumb from "../../components/common/breadcrumb";
import Banner from "./Banner";
import { ASSETS } from "../../components/common/images";
import Slider from "./Slider";
import Sports from "./Sports";

const Index = () => {
  return (
    <Layout
      pageTitle={"Careers"}
      currentPage={"Careers"}
      metaTitle={"Build a Meaningful Career | GeekyBones Job Openings"}
      metaDescription={
        "We help you bring closer to your career goals! So check out the job opening at GeekyBones and apply accordingly."
      }
    >
      <Banner />
      <section className="gallery-sec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="common-heading text-center mb-2 mt-5 pt-3">
                <h2>
                <span>GeekyBones</span> Through the Years 
                </h2>
              </div>
              <div className="w-100 text-center m-auto">
                <img
                  className="w-100"
                  src={ASSETS.GALLERY.Gallerybanner}
                  alt="Gallery banner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Slider/>
      <Sports/>

    </Layout>
  );
}
export default Index;
