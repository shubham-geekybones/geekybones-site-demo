import * as React from "react";

const LeftCommonHeader = (props) => {
    const { title, subTitle, description, className="" } = props;
    return (
        <div className={`${className} gb-common-left-sec-pad`}>
            <h4 className="common-sec-sub-title text-uppercase mb-2 mb-md-3 mb-lg-3 mb-xl-5 gb-color-red sub-title-common-left-divider">{title}</h4>
            <h2 className="common-sec-title gb-color-black mb-2 mb-md-3 mb-lg-3 mb-xl-5">{subTitle}</h2>
            <p className="gb-description-small gb-color-black gb-bottom-mrt-60">{description}</p>
        </div>
    )
}
export default LeftCommonHeader;