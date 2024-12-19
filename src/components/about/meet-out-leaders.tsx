import {ASSETS} from "../common/images";
import * as React from "react";

const MeetOutLeaders = () => {
    return (
        <section className="meet-our-leaders-wrapper gb-md-pad-ver">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="blue-red-heading common-heading-underline histroy-sec-title-wrapper">
                            <h2>Meet Our <span>Leaders</span></h2>
                            <p>GeekyBones has a unique, close-knit team of experts. So let's meet our inspiring role models.</p>
                        </div>

                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="common-leader-box-wrapper">
                                    <div style={{backgroundImage: `url(${ASSETS.ABOUT.LeaderDaishyGoyal})`}} className="leader-pic" />
                                    <h3 className="name">Daishy Goyal</h3>
                                    <p className="designation">Director & CEO</p>
                                    <p className="description">Defines a successful business model for the clients and contributes as a mentor to the overall vision of the organization.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="common-leader-box-wrapper">
                                    <div style={{backgroundImage: `url(${ASSETS.ABOUT.LeaderPreetiGoyal})`}} className="leader-pic" />
                                    <h3 className="name">Preeti Goyal</h3>
                                    <p className="designation">HR Manager</p>
                                    <p className="description">Supportive towards team members, a key decision-maker, ensuring the things are done in the right and smart manner in the organization.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="common-leader-box-wrapper">
                                    <div style={{backgroundImage: `url(${ASSETS.ABOUT.LeaderManojKumar})`}} className="leader-pic" />
                                    <h3 className="name">Manoj Kumar</h3>
                                    <p className="designation">Director & CTO</p>
                                    <p className="description">Adhering to regulatory and compliance requirements provides strategic leadership for new initiatives and collaborations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
        </section>
    )
}
export default MeetOutLeaders;
