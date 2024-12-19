import React, { useState } from 'react';
import DesigerIcon from "../../assets/icons/DesigerIcon";
import PhpIcon from "../../assets/icons/PhpIcon";
import MsTechnogyIcon from "../../assets/icons/MsTechnogyIcon";
import AppDevlopmentIcon from "../../assets/icons/AppDevlopmentIcon";
import QualityAnalystIcon from "../../assets/icons/DigitalMarketingIcon";
import WebDesignerIcon from "../../assets/icons/WebDesignerIcon";
import DigitalMarketingIcon from "../../assets/icons/DigitalMarketingIcon";
import BussinessIcon from "../../assets/icons/BussinessIcon";
import QualityAnalis from "../../assets/icons/QualityAnalis";
import JobApplicationForm from '../Job-application/JobApplicationForm';
import { ASSETS } from '../common/images';

const WeAreHiringTabs = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = (event) => {
      event.preventDefault(); 
      setShowModal(true);  
    };
  
    const handleCloseModal = () => setShowModal(false); 
    return (
      <div className="row">
        <div className="col-lg-5 col-xl-4 d-flex justify-content-center justify-content-lg-start mb-3 mb-lg-0">
          <div className="technology-first-col">
            <div className="d-flex align-items-start">
              <div
                className="nav flex-column nav-pills me-lg-3 position-rl"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active not-fill"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  <PhpIcon /> <span>PHP</span>
                </button>
                <button
                  className="nav-link not-fill"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  <MsTechnogyIcon /> <span> M S TECHNOLOGY</span>
                </button>
                <button
                  className="nav-link"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  <AppDevlopmentIcon /> <span>APP DEVELOPMENT</span>
                </button>
                <button
                  className="nav-link"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  <QualityAnalis /> <span> QUALITY ANALYST</span>
                </button>
                <button
                  className="nav-link"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#web-designer"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  {" "}
                  <WebDesignerIcon /> <span>WEB DESIGNER</span>
                </button>
                <button
                  className="nav-link"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#digital-marketing"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  {" "}
                  <DigitalMarketingIcon /> <span>DIGITAL MARKETING</span>
                </button>
                <button
                  className="nav-link"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Business-dev"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  <BussinessIcon /> <span>BUSNIESS DEVELOPMENT</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-xl-8">
          <div className="technology-second-col">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <div className="accordion-wrap">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h4 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Software Engineer
                          <h4 className="position-common">
                            No. of Position : 5
                          </h4>
                        </button>
                      </h4>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="">
                            Geeky Bones lab is a technology based company in
                            chandigarh, india. We are looking for a motivated
                            PHP Developer to came join our fast-paced and
                            rewarding and rewarding agile team of proffesionals
                            and who is dedicated to the craft, write code that
                            they are proud of and can hit the ground running
                          </p>
                          <h3 className="mt-lg-4 mt-3">
                            Our Areas of expertise include
                          </h3>
                          <ul className="carrers-ul-wrap mt-lg-4 mt-3">
                            <li>
                              MVC: Cake php, Codeigniter, Zend Framworks,
                              Magento, Druple, YII, Expression engine
                            </li>
                            <li>Core Php</li>
                            <li>Front-end Developer</li>
                          </ul>
                          <h3 className="mt-lg-4 mt-3">
                            Skills and Experience{" "}
                          </h3>
                          <p className="mt-lg-4 mt-3">
                            {" "}
                            Must have a minimum development experience of 1-4
                            years in php/core php with mysql and javascript.
                            Front-end development include Jquery,ajax,HTMl,css.
                          </p>
                          <p className="mt-lg-4 mt-3">
                            {" "}
                            Must have a minimum development experience of 1-4
                            years in php/core php with mysql and javascript.
                            Front-end development include Jquery,ajax,HTMl,css.
                          </p>
                          <h3 className="mt-lg-4 mt-3">Education</h3>
                          <p className="mt-lg-4 mt-3">Btech/Mtech/Bca/MCA</p>
                          <a
                            href="mailto: contact@geekybones.com"
                            className="gb-btn-md-red-carrier text-center mt-lg-4 mt-3"
                          >
                            {" "}
                            Apply Here
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <div className="accordion-wrap">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          M S TECHNOLOGY
                          <h4 className="position-common">
                            No. of Position : 5
                          </h4>
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                        <p>Thank you for your interest. At this time, we are not actively hiring for the following job fields.We encourage you to check back regularly as our hiring needs may change. If you are interested in other opportunities please submit the application for the following.</p>
                        <p>Thank you for your understanding.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                <div className="accordion-wrap">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          APP DEVELOPMENT
                          <h4 className="position-common">
                            No. of Position : 5
                          </h4>
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                        <p>Thank you for your interest. At this time, we are not actively hiring for the following job fields.We encourage you to check back regularly as our hiring needs may change. If you are interested in other opportunities please submit the application for the following.</p>
                        <p>Thank you for your understanding.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <div className="accordion-wrap">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          QUALITY ANALYST
                          <h4 className="position-common">
                            No. of Position : 5
                          </h4>
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                        <p>Thank you for your interest. At this time, we are not actively hiring for the following job fields.We encourage you to check back regularly as our hiring needs may change. If you are interested in other opportunities please submit the application for the following.</p>
                        <p>Thank you for your understanding.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="web-designer"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <div className="accordion-wrap">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          WEB DESINGER
                          <h4 className="position-common">
                            No. of Position : 5
                          </h4>
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                        <p>Thank you for your interest. At this time, we are not actively hiring for the following job fields.We encourage you to check back regularly as our hiring needs may change. If you are interested in other opportunities please submit the application for the following.</p>
                        <p>Thank you for your understanding.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="digital-marketing"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <div className="accordion-wrap">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          DIGITAL MARKETING
                          <h4 className="position-common">
                            No. of Position : 5
                          </h4>
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                        <p>Thank you for your interest. At this time, we are not actively hiring for the following job fields.We encourage you to check back regularly as our hiring needs may change. If you are interested in other opportunities please submit the application for the following.</p>
                        <p>Thank you for your understanding.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="Business-dev"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <div className="accordion-wrap">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Business Development
                          <h4 className="position-common">
                            No. of Position : 5
                          </h4>
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <h3 className="mt-lg-2 mb-3 mt-1">About the job</h3>
                          <p>
                            <span>Location</span>: Remote/Flexible
                          </p>
                          <p>
                            <span>Employment Type</span>: Commission Basis
                          </p>
                          <h5 className="mt-lg-4 mt-3 mb-2">About Us:</h5>
                          <p>
                            GeekyBones Lab Pvt Ltd is a leading IT company with
                            over 7 years of experience in providing exceptional
                            services in SEO, SMO, PPC, website designing,
                            development, and mobile applications. We are seeking
                            a dynamic and results-driven Business Developer to
                            join our team on a commission basis.
                          </p>
                          <h5 className="mt-lg-4 mt-3">Responsibilities</h5>
                          <ul className="carrers-ul-wrap mt-lg-4 mt-3">
                            <li>
                              Lead Generation & Client Acquisition: Responsible
                              for acquiring new leads and requirements, as well
                              as maintaining and enhancing business relations
                              with existing clients.
                            </li>
                            <li>
                              Service Promotion: Promote services such as SEO,
                              SMO, PPC, website designing, development, and
                              mobile applications.
                            </li>
                            <li>
                              Bidding Platforms: Work on various bidding
                              platforms like Upwork, Guru, Fiverr,
                              PeoplePerHour, and others to secure projects.
                            </li>
                            <li>
                              Proposal Writing: Proficient in writing proposals,
                              conducting follow-ups, gathering requirements, and
                              maintaining a clear communication link between the
                              development team and clients.
                            </li>
                            <li>
                              Technical Understanding: Have a good grasp of
                              technical languages and technologies such as PHP,
                              React Native, MERN Stack, and graphics designing.
                            </li>
                            <li>
                              Client Management: Expertise in client follow-ups,
                              requirement analysis, and proposal submission to
                              ensure client satisfaction and project success.
                            </li>
                            <li>
                              Communication Skills: Maintain a positive approach
                              and possess excellent command over English to
                              handle all situations effectively.
                            </li>
                            <h5 className="mt-lg-4 mt-3">Requirements</h5>
                          </ul>
                          <ul className="carrers-ul-wrap mt-lg-4 mt-3">
                            <li>
                              Proven experience in business development, IT, or
                              a related field.
                            </li>
                            <li>
                              Strong knowledge of SEO, SMO, PPC, website
                              designing, development, and mobile applications.
                            </li>
                            <li>
                              Experience with bidding platforms like Upwork,
                              Guru, Fiverr, and PeoplePerHour.
                            </li>
                            <li>
                              Proficient in proposal writing and requirement
                              gathering.
                            </li>
                            <li>
                              Familiarity with technical languages such as PHP,
                              React Native, MERN Stack, and graphics designing.
                            </li>
                            <li>
                              Excellent communication and interpersonal skills.
                            </li>
                            <li>
                              Ability to work independently and manage time
                              effectively.
                            </li>
                            <li>
                              Positive attitude and problem-solving skills.
                            </li>
                          </ul>
                          <h5 className="mt-lg-4 mt-3">Benefits</h5>
                          <ul className="carrers-ul-wrap mt-lg-4 mt-3">
                            <li>Competitive commission-based compensation.</li>
                            <li>
                              Flexible working hours and remote work options.
                            </li>
                            <li>
                              Opportunity to work with a leading IT company and
                              enhance your skills.
                            </li>
                            <li>
                              Supportive and collaborative team environment.
                            </li>
                            <li>
                              If you are a motivated and goal-oriented
                              individual with a passion for business development
                              and client management, we would love to hear from
                              you. Apply now to join our team and contribute to
                              our growth and success!
                            </li>
                          </ul>

                          <div>
                            <a
                              href="#"
                              className="gb-btn-md-red-carrier text-center mt-lg-4 mt-3"
                              onClick={handleOpenModal}
                            >
                              Apply Here
                            </a>

                            {showModal && (
                              <>
                                <div
                                  className="modal fade show d-block"
                                  tabIndex={-1}
                                  role="dialog"
                                  aria-labelledby="jobApplicationModal"
                                  aria-hidden="true"
                                >
                                  <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                      <div className="modal-header bg-dark d-flex align-items-center justify-content-between w-100">
                                        <img
                                          src={ASSETS.HOME.Logo}
                                          className="logo-img"
                                          alt=""
                                        />
                                        <button
                                          type="button"
                                          className="close border-0 bg-dark"
                                          onClick={handleCloseModal}
                                          aria-label="Close"
                                        >
                                          <span
                                            aria-hidden="true"
                                            className="text-light display-5"
                                          >
                                            &times;
                                          </span>
                                        </button>
                                      </div>
                                      <div className="modal-body">
                                        <JobApplicationForm />
                                      </div>
                                      <div className="modal-footer">
                                        <button
                                          type="button"
                                          className="btn btn-danger gb-btn-md-red-carrier"
                                          onClick={handleCloseModal}
                                        >
                                          Close
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="modal-backdrop fade show"></div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default WeAreHiringTabs;
