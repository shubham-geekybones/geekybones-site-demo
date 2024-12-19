import * as React from "react";

const CommonServicesApproach  = (props) => {
    const {icon, title, description} = props;
    return (
        <div className="gb-common-approach-development-box">
            <img src={icon} className="common-approach-development-icon" alt="" />
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
        </div>
    )
}

export default CommonServicesApproach;
