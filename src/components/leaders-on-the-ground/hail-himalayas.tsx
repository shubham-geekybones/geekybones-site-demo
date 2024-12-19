import {ASSETS} from "../common/images";
import * as React from "react";

const HailHimalayas = () => {

    const trekingImgList = [
        {
            imgUrl: ASSETS.CRICKETMATCHES.Cricket20,
        },
        {
            imgUrl: ASSETS.CRICKETMATCHES.Cricket3,
        },
        {
            imgUrl: ASSETS.CRICKETMATCHES.Cricket5,
        },
        {
            imgUrl: ASSETS.CRICKETMATCHES.Cricket7,
        },
        {
            imgUrl: ASSETS.CRICKETMATCHES.Cricket15,
        },
        {
            imgUrl: ASSETS.CRICKETMATCHES.Cricket19,
        },
        {
            imgUrl: ASSETS.CRICKETMATCHES.Cricket21,
        },
        {
            imgUrl: ASSETS.CRICKETMATCHES.Cricket22,
        },
        {
            imgUrl: ASSETS.CRICKETMATCHES.Cricket23,
        },
        {
            imgUrl: ASSETS.CRICKETMATCHES.Cricket24,
        },
        {
            imgUrl: ASSETS.CRICKETMATCHES.Cricket25,
        },
        {
            imgUrl: ASSETS.CRICKETMATCHES.Cricket26,
        },
    ]

    return (
        <section className="trip-gallery-sec container-fluid gb-md-pad-ver">
            <div className="container">
                <div className="gallery-wrapper">
                    <div className="gallery-heading">
                        <h2>Interactions and Connections</h2>
                        <p>When you play cricket, you also have the added benefit of bonding. Nothing brings a group together like a strong performance on the field or a teammate bowling a game-winning strike.</p>
<p>And not only within the company but also with the outside world. Yes, it happened! Our cricket team, the GeekyBones, competes against other teams that enable team engagement at both psychological and physiological levels.</p>

<p>What else? Our clients also participate with us! We recently got our team tee-shirts from one of our best clients that crafts elite jerseys and team apparel. Isn’t it amazing?</p>
                    </div>
                    <div className="modal-img-trip-wrapper gb-cricket-img-wrapper container">
                        <div className="row">

                            {trekingImgList.map((row, index) => (
                                <div className="col-6 col-md-3 gb-common-light-mrt" key={index}>
                                    <div className="common">
                                        <a href={row.imgUrl} data-lightbox="hailhimalayastrip">
                                            <img className="common-img" src={row.imgUrl} alt="" />
                                            <div className="plus-icon-wrapper">
                                                <img className="plus-icon" src={ASSETS.COMMON.PlusIconWhite} alt="" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HailHimalayas;
