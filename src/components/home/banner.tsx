import * as React from "react";
import {Link} from "gatsby";
import {ASSETS} from "../common/images";
const Banner = () => {
    return (
        <section className="banner-sec container-fluid">
            <div className="container-fluid mx-3">
                <div className="banner-wrap">
                    <div className="slide-text-container">
                        <h1 className="slide-static-text">Let’s Begin a Journey Towards Successful</h1>
                        <ul className="slide-dynamic-text">
                            <li className="slide-item">Web Development Solutions</li>
                            <li className="slide-item">Mobile App Development Solutions</li>
                            <li className="slide-item">Graphic Design Solutions</li>
                            <li className="slide-item">Digital Marketing Solutions</li>
                        </ul>
                    </div>
                    <p className="description">We drive every business journey to successful digital transformation. Our experts welcome innovative ideas to build feature-packed mobile apps,  and scalable websites, covering all the stages of development and promotion.</p>
                    <div className="banner-btn-wrap text-center">
                        <Link to={'/contact-us'} className="gb-animate-sm-btn-red me-sm-2 mt-sm-3"> Get Started</Link>
                    </div>
                </div>
            </div>
            <Link to={'#best-mob-and-web-dev-company'} className="banner-down-arrow"><img src={ASSETS.COMMON.ArrowDownWhite} alt={ASSETS.COMMON.ArrowUpWhite} style={{width: 35, height: 18 }} /></Link>
        </section>
    )
}
export default Banner;
