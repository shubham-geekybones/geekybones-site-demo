import {ASSETS} from "../common/images";
import * as React from "react";

const FunAtGeeekybones = () => {
    return (
        <section className="trip-gallery-video-sec container-fluid gb-md-pad-ver">
            <div className="container">
                <div className="trip-gallery-heading">
                    <h2> Fun at GeekyBones </h2>
                    <p>It is said that routines make life boring. Well, at GeekyBones, we take care and ensure that there is a work-life balance. In addition, we keep our team aligned with proper motivation so that they don’t get frustrated while making a difference between living and merely existing. </p>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="trip-gallery-video-first-col">
                            <div className="row">
                                <div className="col-6 col-md-4 gb-common-light-mrt">
                                    <div className="common">
                                        <a href={ASSETS.TRIP.AnniversaryCakeCutting} data-lightbox="funatgeeky">
                                            <img className="common-img" src={ASSETS.TRIP.AnniversaryCakeCutting} alt="" />
                                            <div className="plus-icon-wrapper">
                                                <img className="plus-icon" src={ASSETS.COMMON.PlusIconWhite} alt="" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 gb-common-light-mrt">
                                    <div className="common">
                                        <a href={ASSETS.TRIP.anniversary4Cake} data-lightbox="funatgeeky">
                                            <img className="common-img" src={ASSETS.TRIP.anniversary4Cake} alt="" />
                                            <div className="plus-icon-wrapper">
                                                <img className="plus-icon" src={ASSETS.COMMON.PlusIconWhite} alt="" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 gb-common-light-mrt">
                                    <div className="common">
                                        <a href={ASSETS.TRIP.AugCelebration} data-lightbox="funatgeeky">
                                            <img className="common-img" src={ASSETS.TRIP.AugCelebration} alt="" />
                                            <div className="plus-icon-wrapper">
                                                <img className="plus-icon" src={ASSETS.COMMON.PlusIconWhite} alt="" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 gb-common-light-mrt">
                                    <div className="common">
                                        <a href={ASSETS.TRIP.TeamParty} data-lightbox="funatgeeky">
                                            <img className="common-img" src={ASSETS.TRIP.TeamParty} alt="" />
                                            <div className="plus-icon-wrapper">
                                                <img className="plus-icon" src={ASSETS.COMMON.PlusIconWhite} alt="" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 gb-common-light-mrt">
                                    <div className="common">
                                        <a href={ASSETS.TRIP.GeekyFun2} data-lightbox="funatgeeky">
                                            <img className="common-img" src={ASSETS.TRIP.GeekyFun2} alt="" />
                                            <div className="plus-icon-wrapper">
                                                <img className="plus-icon" src={ASSETS.COMMON.PlusIconWhite} alt="" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 gb-common-light-mrt">
                                    <div className="common">
                                        <a href={ASSETS.TRIP.GeekyFun1} data-lightbox="funatgeeky">
                                            <img className="common-img" src={ASSETS.TRIP.GeekyFun1} alt="" />
                                            <div className="plus-icon-wrapper">
                                                <img className="plus-icon" src={ASSETS.COMMON.PlusIconWhite} alt="" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="trip-gallery-video-second-col">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="video-wraper">
                                        <video className="video-controls-common" loop="false" autoplay="autoplay" controls="controls" muted>
                                            <source src={ASSETS.TRIP.Anniversary4} type="video/mp4"  />
                                            <source src="movie.ogg" type="video/ogg" />
                                        </video>
                                        <p>At GeekyBones, we make connections! We start conversations, we share ideas, and we stay together. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FunAtGeeekybones;
