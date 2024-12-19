import {ASSETS} from "./images";
import * as React from "react";

const LetsChat = (props) => {
    const {showHeading} = props;

    return (
        <section className="lets-chet-sec container-fluid gb-md-pad-ver">
            <div className="container">
                {showHeading &&
                <div className="row">
                    <div className="col-sm-12">
                        <div className="let-chat-heading">
                            <h3 className="text-center text-light">Lets Chat</h3>
                        </div>
                    </div>
                </div>
                }
                <div className="row lets-chet-row">
                    <div className="col-6 col-lg-3 d-flex justify-content-center justify-content-lg-start">
                        <a href="skype:geekyboneslab?chat" className="massanger-wrap massanger-bottom">
                            <div className="social-common-wrap-border">
                                <div className="social-common messanger-img-wrap">
                                    <img src={ASSETS.WEBDEVELOPMENT.SkypeGrey} className="let-common-social-img" alt="" />
                                </div>
                            </div>

                            <p className="lets-go-common-desc">live:geekyboneslab</p>
                        </a>
                    </div>
                    <div className="col-6 col-lg-3 d-flex justify-content-center justify-content-lg-start">
                        <a href="mailto: contact@geekybones.com" className="massanger-wrap massanger-bottom">
                            <div className="social-common-wrap-border">
                                <div className="social-common messanger-img-wrap">
                                    <img src={ASSETS.WEBDEVELOPMENT.Gmail} className="let-common-social-img" alt="" />
                                </div>
                            </div>
                        
                            <p className="lets-go-common-desc">contact@geekybones.com</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default LetsChat;
