import * as React from "react";

const ReadyToTalk = () => {
    return (
        <section className="ready-to-talk-sec container-fluid gb-md-pad-ver">
            <div className="container">
                <div className="common-heading text-center">
                    <h2>
                        Ready to <span>Talk to us?</span>
                    </h2>
                </div>
                <div className="row">
                    <div className=" col-md-4 ">
                        <div className="ready-sec-common-col">
                            <div className="fa-common-wrap">
                                <i className="fa fa-2x fa-lightbulb-o" aria-hidden="true"></i>
                            </div>
                            <p>Share Your Business Website/Business App Requirements</p>
                        </div>
                    </div>
                    <div className=" col-md-4 ">
                        <div className="ready-sec-common-col">
                            <div className="fa-common-wrap">
                                <i className="fa fa-2x fa-pencil-square-o" aria-hidden="true"></i>
                            </div>
                            <p>Our Professionals Will Review Your Requirements Instantly</p>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="ready-sec-common-col">
                            <div className="fa-common-wrap">
                                <i className="fa  fa-2x fa-user" aria-hidden="true"></i>
                            </div>
                            <p>Our Developers Will Contact You Shortly</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ReadyToTalk;
