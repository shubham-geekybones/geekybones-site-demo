import * as React from "react";
import {ASSETS} from "./images";

const RightCommonHeader = (props) => {
    const { title, subTitle, description, className="" } = props;
    return (

        // <div className="what-we-do-col-right "

    <div className={`${className} px-md-5 px-0`}>
        <h4 className="common-sec-sub-title text-uppercase mb-2 mb-md-3 mb-lg-3 mb-xl-5 gb-color-red sub-title-common-right-divider">{title}</h4>
        <h2 className="common-sec-title gb-color-black mb-2 mb-md-3 mb-lg-3 mb-xl-5">{subTitle}</h2>
        <p className="gb-description-small gb-color-black mb-2 mb-md-3">{description}</p>
    </div>

    )
}
export default RightCommonHeader;