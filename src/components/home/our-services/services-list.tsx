import {ASSETS} from "../../common/images";
import * as React from "react";
import {Link} from "gatsby";

const ServicesList = (props) => {
    const {title1, title2, icon, description, url} = props;

    return (
        <div className="service-common-sec mb-3 mb-md-5">
            <img src={icon} alt="common service icon" className="common-services-icon wow swing" data-wow-delay="0.5s" />
            <p className="common-services-title">{title1}{title2}</p>
            <p className="common-service-description">{description}</p>
            <Link to={url} className="read-more-btn">Read More</Link>
        </div>
    )
}
export default ServicesList;
