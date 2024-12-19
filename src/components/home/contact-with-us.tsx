import * as React from "react";
import ContactUsForm from "../common/contact-us-form";

const   ContactWithUs = () => {
    return (
        <section className="contact-us-sec container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-12">
                        <div className="contact-first-col">
                            <div className="heading-wraper">
                                <h2>Let's build an amazing <span>project</span></h2>
                            </div>
                            <div className="list-content">
                                <h5>Contact us </h5>
                                <ul>

                                    <li className="d-flex">
                                        <i className="fa fa-xs fa-map-marker" aria-hidden="true"></i>
                                        <span>Plot No 986, Ground Floor, Sector 82, JLPL Industrial Area, Sahibzada Ajit Singh Nagar, Punjab 160055
                                                    </span>
                                    </li>
                                    <li>
                                        <a href="tel:+91-9478511189"><i className="fa fa-xs fa-phone" aria-hidden="true"></i>
                                            +91-0172 291 2179</a></li>
                                    <li>
                                        <a href="mailto:contact@geekybones.com"><i className="fa  fa-envelope" aria-hidden="true"></i> contact@geekybones.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-12">
                        <div className="contact-second-col">
                            <div className="white-circle-wrap"> <p> OR</p> </div>
                            <div className="white-line-wrap">  </div>
                            <ContactUsForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactWithUs;
