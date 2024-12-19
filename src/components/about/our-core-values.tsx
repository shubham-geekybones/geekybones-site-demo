import CustomerDelight from "../../assets/icons/CustomerDelight";
import IntegrityIcon from "../../assets/icons/IntegrityIcon";
import QuantifySuccessIcon from "../../assets/icons/QuantifySuccessIcon";
import TimelyDeliveryIcon from "../../assets/icons/TimelyDeliveryIcon";
import {ASSETS} from "../common/images";
import * as React from "react";

const OurCoreValues = () => {
    return (
      <>
        <section className="our-core-values-wrapper gb-md-pad-ver">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="about-common-head-title-wrapper">
                  <h2>Our Core <span>Values</span></h2>
                  <p>
                    At GeekyBones, we strive to fulfill our commitments by
                    valuing our customers' time. We take pride in earning their
                    trust and ensure hard to preserve it. Our empire is built on
                    the following pillars:
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12  ps-md-0 pe-md-0">
                <div className="common-core-value-box">
                  <div className="common-icon-wrapper Integrity">
                    <IntegrityIcon />
                  </div>
                  <p className="title">Integrity</p>
                  <p className="description">
                    Honesty, sincerity, integrity, and ethical standards are at
                    the heart of our every business dealing. We never compromise
                    on our principles for making higher profits. We believe
                    respect, kindness, and trust are essential for long-term
                    relationships.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 ps-md-0 pe-md-0">
                <div className="common-core-value-box">
                  <div className="common-icon-wrapper Timely-Delivery ">
                    <TimelyDeliveryIcon />
                  </div>
                  <p className="title">Timely Delivery</p>
                  <p className="description">
                    GeekyBones embrace the combination of time, quality
                    consciousness, and the latest technology. As a result, we
                    have earned goodwill in the market by assuring the top-notch
                    quality of deliverables while constantly communicating with
                    our clients.</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 ps-md-0 pe-md-0">
                <div className="common-core-value-box">
                  <div className="common-icon-wrapper Customer-Delight">
                    <CustomerDelight />
                  </div>
                  <p className="title">Customer Delight</p>
                  <p className="description">
                    We at GeekyBones strive not only for customer satisfaction,
                    but we make every effort to offer them a delightful
                    experience. In addition, we anticipate our client's needs
                    and make sure that we align our services accordingly to
                    cater to those needs.</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 ps-md-0 pe-md-0">
                <div className="common-core-value-box">
                  <div className="common-icon-wrapper Quantify-Success">
                    <QuantifySuccessIcon />
                  </div>
                  <p className="title">We Quantify Success</p>
                  <p className="description">Doesn't matter how shiny or new the website is; it is
                    worthless if it is not helping you reach your goals.
                    GeekyBones keep track of everything to quantify the success
                    and see if ideas are working or not. The reports are
                    transparent where clients can track their progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
}
export default OurCoreValues;
