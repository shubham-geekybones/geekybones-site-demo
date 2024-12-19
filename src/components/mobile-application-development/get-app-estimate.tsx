import {ASSETS} from "../common/images";
import * as React from "react";
import {Link} from "gatsby";
import ContactUsForm from "../common/contact-us-form";

const GetAppEstimate = () => {
    return (
        <div>
            <section className="mobile-app-service-sec container-fluid gb-md-pad-ver">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mobile-service-common-heading">

                                <h2>Feature-Rich <span>Mobile App Development</span> Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row row-flex">
                        <div className="col-md-6">
                            <div className="mobile-app-service-first-col">
                                <h3>We Are A Leading Mobile App Development Company India Providing Reliable Mobile
                                    Solutions</h3>
                                <p>Tablets, phones, and wearables would have never been that exciting without application development. With mobile applications ruling the world, every business is making a big shift from websites to mobiles for connections. So, empower your business with user-friendly intuitive apps that allow you to define boundaries in your domain. We at GeekyBones craft the best mobile app solutions that meet client's expectations.</p>
                                <Link to={'/contact-us'} className="gb-animate-md-btn-red mt-3 mt-md-4"> Hire us</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mobile-app-service-second-col">
                                <h3>Get App Estimate!</h3>
                                <ContactUsForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default GetAppEstimate;
