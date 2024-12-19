import ContactUsForm from "../common/contact-us-form";
import * as React from "react";

const DropYourQueries = () => {
    return (
        <section className="contact-form-sec container-fluid gb-md-pad-top">
            <div className="container">
                <div className="common-heading text-center  ">
                    <h2><span>Drop us</span> your Queries</h2>
                    <p>Ready to bring your web or app idea to life? We're excited to help! Share a bit about yourself and your project, and we'll get in touch soon. <br/> We can't wait to collaborate with you!</p>
                </div>
                <div className="row contact-row">
                    <div className="col-md-6">
                        <div className="contact-first-col">
                            <ContactUsForm />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contact-second-col">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6864.701727711758!2d76.7311347737101!3d30.652247000821507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feef5e8f6e863%3A0xc3dfe43883da1c55!2sGeekyBones%20Lab%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1615791245543!5m2!1sen!2sin"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default DropYourQueries;
