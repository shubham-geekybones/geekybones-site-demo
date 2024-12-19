import * as React from "react";
import Layout from "../../components/layout";
import WeAreHiringTabs from "../../components/careers/careers-tabs";
import Breadcrumb from "../../components/common/breadcrumb";
import Banner from "./Banner";

const Index = () => {
  return (
      <Layout pageTitle={'Careers'}   currentPage={'Careers'}  metaTitle={'Build a Meaningful Career | GeekyBones Job Openings'} metaDescription={'We help you bring closer to your career goals! So check out the job opening at GeekyBones and apply accordingly.'}>
        <Banner/>
          <section className="technology-sec">
              <div className="container">
                  <div className="row">
                      <div className="col-md-1" />
                      <div className="col-md-10 text-center">
                          <div className="common-heading text-center mb-5">
                              <h2>Join Our<span> Team at </span> Geeky Bones!</h2>
                              <p>Are you passionate about what you do? So are we! At Geeky Bones, we believe in fostering creativity and innovation in everything we do. We're on the lookout for talented individuals across a variety of fields to join our dynamic team. Whether your expertise lies in <span>mobile app development</span> ,<span>web design</span> , or any other creative discipline, we want to hear from you!</p>
                              <p>At Geeky Bones, we pride ourselves on a relaxed and fun work environment where your ideas can flourish. If you're ready to take your career to the next level with a company that values your unique skills and encourages you to be yourself, we'd love to connect.</p>
                              <p>Find your perfect role and send your resume to us at  <a href="mailto: contact@geekybones.com">contact@geekybones.com</a> && <a href="mailto: hr@geeky.com">hr@geeky.com</a></p>
                          </div>
                          <div className="col-md-1" />
                      </div>
                  </div>
              </div>
              <div className=" technology-wrapper">
                  <div className="container">
                  <WeAreHiringTabs />
                  </div>
              </div>
          </section>
      </Layout>
  )
}
export default Index;
