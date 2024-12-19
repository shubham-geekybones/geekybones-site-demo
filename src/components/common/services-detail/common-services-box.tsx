import * as React from "react";

const CommonServicesBox = (props) => {
    const {serviceIcon, serviceName} = props;
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="gb-common-single-service-box">
                <div className="icon-wrapper">
                    <img src={serviceIcon} alt="" className="icon" />
                </div>
                <p className="service-name">{serviceName}</p>
            </div>
        </div>
    )
}
export default CommonServicesBox
