import {ASSETS} from "../common/images";
import * as React from "react";

const HailHimalayas = () => {

    const trekingImgList = [
        {
            imgUrl: ASSETS.TRIP.WaterFallImg5,
        },
        {
            imgUrl: ASSETS.TRIP.WaterFallImg8,
        },
        {
            imgUrl: ASSETS.TRIP.WaterFallImg1,
        },
        {
            imgUrl: ASSETS.TRIP.WaterFallImg7,
        },
        {
            imgUrl: ASSETS.TRIP.WaterFallImg2,
        },
        {
            imgUrl: ASSETS.TRIP.WaterFallImg3,
        },
        {
            imgUrl: ASSETS.TRIP.WaterFallImg6,
        },
    ]

    return (
        <section className="trip-gallery-sec container-fluid gb-md-pad-ver">
            <div className="container">
                <div className="gallery-wrapper">
                    <div className="gallery-heading">
                        <h2>Trekking Towards a Waterfall</h2>
                        <p>The next morning, we woke up, and after breakfast, we got ready for trekking towards a waterfall. We had to climb in the hot weather through the tough land. Finally, all our tiredness was removed when we reached a beautiful waterfall. It felt like an achievement where the real struggle pays off. </p>
<p>The water came down with gush, striking the land and water drops spilling on the face. It was heaven, and none of us wanted to go back. So finally, after clicking pictures and enjoying our precious moments, we came down to our place. It was already evening, and after having our meals, we packed our bags to get back to Mohali.</p>

<p>While coming back, everyone shared pictures, and some recollected the laughter moments that happened while trekking and activities. After that, we did our dinner on the way and finally reached GeekyBones.</p>

<p>Some took a taxi, and others helped each other to get safely to their homes. So the delightful and amazing journey ended!</p>
                    </div>
                    <div className="modal-img-trip-wrapper container">
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
