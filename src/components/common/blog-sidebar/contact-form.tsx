import * as React from "react";

const ContactForm = () => {
    return (
        <div className="contact-wrap-blog">
            <div className="recent-post Categories-wrap">
                <h3 className="mb-2 mb-sm-4">Contact Us</h3>
            </div>
            <div className="blog-contact-second-col pt-4 mb-4 mb-sm-5">
                <div className="form form-wrap">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="common-input-wrap">
                                <input type="text" className="form-control contact-form-control mt-4"
                                       placeholder="Name"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="common-input-wrap">
                                <input type="email"
                                       className="form-control contact-form-control mt-4"
                                       placeholder="Email"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="common-input-wrap mt-4">
                                                        <textarea name="comment"
                                                                  className="form-control contact-form-control text-area"
                                                                  placeholder="message"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="gb-animate-md-btn-red mt-4 mb-4">Contact</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ContactForm;
