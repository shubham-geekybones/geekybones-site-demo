import * as React from "react";

const ContactForm = () => {    
    return (
        <div className="row">
            <div className="col-md-12">
                <form className="contact-us-form-wrapper gb-common-left-sec-pad">
                    <span className="gb-contact-icon-1" />
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="common-input-filed mb-md-5 mb-3">
                                <input type="text" placeholder="Name" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="common-input-filed mb-md-5 mb-3">
                                <input type="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="common-input-filed mb-md-5 mb-3">
                                <input type="phone" placeholder="Phone#" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="common-input-filed mb-md-5 mb-3">
                                <input type="budget" placeholder="Budget" />
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="common-input-filed mb-md-5 mb-3">
                                <textarea placeholder="Message"></textarea>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="common-input-filed mt-md-3 mt-2 text-center d-flex justify-content-center">
                                <button className="gb-btn-lg-red" type="submit">Send Message</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ContactForm;
