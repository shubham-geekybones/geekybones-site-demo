import * as React from 'react';
import {ASSETS} from "../images";
const Banner = (props) => {
    const {title1, title2} = props;
    return (
        <section className="common-services-bg-wrapper" style={{ backgroundImage: `url(${ASSETS.COMMON.CommonServicesBannerBg})` }}>
            <div className="container">
                <div className="row d-flex align-items-center h-100">
                    <div className="col-md-5 d-flex justify-content-md-start justify-content-center">
                        <h1 className="banner-title">{title1} <br/>{title2}</h1>
                    </div>
                    <div className="col-md-7 d-flex justify-content-center justify-content-md-end">
                        <img src={ASSETS.COMMON.CommonServicesBannerIcon} alt="" className="banner-icon" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;
