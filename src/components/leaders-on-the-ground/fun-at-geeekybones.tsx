import {ASSETS} from "../common/images";
import * as React from "react";

const FunAtGeeekybones = () => {
    return (
        <section className="trip-gallery-video-sec container-fluid gb-md-pad-ver">
            <div className="container">
                <div className="trip-gallery-heading">
                    <h2> Self Development and Motivation </h2>
                    <p>The competitive environment of a fun-based team game boosts motivation among participants. In addition, team-based activities force players to interact, allowing them to break out of their introvert shells. Within GeekyBones, this new attitude on fellow colleagues is an added trait to an individual's self-development.</p>
                </div>
                <div className="row">
                    {/*<div className="col-lg-8 d-none d-lg-block">*/}
                    <div className="col-lg-12 mb-4 mb-md-5">
                            {/*<div className="gb-cricket-gallary-sec-2">*/}
                            {/*    <img className="gb-cricket-gallary-img-1" src={ASSETS.CRICKETMATCHES.Cricket14} alt="" />*/}
                            {/*    <img className="gb-cricket-gallary-img-2" src={ASSETS.CRICKETMATCHES.Cricket9} alt="" />*/}
                            {/*    <img className="gb-cricket-gallary-img-3" src={ASSETS.CRICKETMATCHES.Cricket3} alt="" />*/}
                            {/*    <img className="gb-cricket-gallary-img-4" src={ASSETS.CRICKETMATCHES.Cricket2} alt="" />*/}
                            {/*    <img className="gb-cricket-gallary-img-5" src={ASSETS.CRICKETMATCHES.Cricket12} alt="" />*/}
                            {/*</div>*/}
                        <img className="gb-bottom-banner" src={ASSETS.CRICKETMATCHES.CricketBottomBanner} alt="" />

                    </div>
                    {/*<div className="col-lg-4 text-center">*/}
                    {/*    <div className="gb-cricket-video-wraper">*/}
                    {/*        <video className="video-controls-common" loop="false" autoplay="autoplay" controls="controls" muted>*/}
                    {/*            <source src={ASSETS.CRICKETMATCHES.CricketClip} type="video/mp4"  />*/}
                    {/*            <source src="movie.ogg" type="video/ogg" />*/}
                    {/*        </video>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    )
}
export default FunAtGeeekybones;
