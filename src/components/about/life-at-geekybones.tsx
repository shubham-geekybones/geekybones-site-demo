import * as React from "react";
import {Link} from "gatsby";
import {ASSETS} from "../common/images";
import Slider from "react-slick";

const LifeAtGeekybones = () => {
    return (
        <section className="life-at-geekybones-wrapper gb-md-pad-ver common-about-img-text-wrapper">
            <div className="container p-md-0">
                <div className="row d-flex align-items-center">
                    <div className="col-md-12 col-lg-5 col-sm-6">
                        <div className="about-common-description">
                            <h2>Life at <span>GeekyBones</span></h2>
                            <p>We begin our day with coffee and discussions!</p>
                            <p>Our work, passion, and especially our culture define us and sets us apart.</p>
                            <p>Our discussions help us in sharing new ideas where ingenious solutions are born. Our celebrations rejuvenate and strengthen our bond.</p>
                            <Link to={'/trip-to-hail-himalayas'} className="text-uppercase gb-animate-sm-btn-red">see more</Link>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-7 col-sm-6">
                            <img src={ASSETS.ABOUT.achievement} alt="" className="common-img w-100" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default LifeAtGeekybones;
