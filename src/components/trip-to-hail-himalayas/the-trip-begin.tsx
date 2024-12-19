import {ASSETS} from "../common/images";
import * as React from "react";

const TheTripBegin = () => {
    return (
        <section className="group-images-sec container gb-md-pad-ver">
            <div className="row">
                <div className="col-md-12">
                    <div className="group-image-heading">
                        <h3> And We Decided to Travel! </h3>
                        <p>Sometimes all you need is a break from your routine work, and it is where GeekyBones decided to go on tour. So it all started with our journey full of expectations in heart for happiness, peace and ever-lasting friendships!</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 p-0">
                    <div className="group-image-first-sec">
                        <img src={ASSETS.TRIP.HailHimalayas} className="common-group-img" alt="" />
                    </div>
                </div>
                <div className="col-md-6 p-0">
                    <div className="group-image-second-sec">
                        <h2>HAIL HIMALAYAS - A Beautiful Place in the Alps of Himalaya </h2>
                        <p>After much discussion regarding the places and suitable dates to travel, team GeekyBones finally agreed on a two day trip to Hail Himalayas near Solan. The management made several arrangements in advance, such as staying at the hotel, tracking, and booking a private bus. </p>
                    </div>
                </div>
            </div>

            <div className="row common-row-wrap">
                <div className="col-md-6 p-0">
                    <div className="group-image-first-sec">
                        <img src={ASSETS.TRIP.HailHimalayasDinningArea} className="common-group-img" alt="" />
                    </div>
                </div>
                <div className="col-md-6 p-0">
                    <div className="group-image-second-sec">
                        <h2>The Trip Begins</h2>
                        <p>Finally, on Saturday at 7:00 AM, team GeekyBones excitedly boarded the private bus, beginning the journeys with joy and fun. While dancing, playing antakshari and cards and relaxing, we all entered Himachal. </p>
<p> We all felt like a paradise surrounded by greenery, where the rays of the sun were falling on the mountains. The scene was so mesmerizing and reliving that it was captured in our cameras and our memories forever. </p>
<p> Around 11 o’clock, we stopped at the restaurant near the fascinating view of the mountains to have our breakfast. And then we again started moving towards our destination, and our craziness was on peak. Finally, after 4 hours of travelling, we reached our destination at 11:30 AM. The rooms were allotted, and after lunch, we took a 1-hour rest. </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 p-0">
                    <div className="group-image-first-sec">
                        <img src={ASSETS.TRIP.HailHimalayasActivities} className="common-group-img" alt="" />
                    </div>
                </div>
                <div className="col-md-6 p-0">
                    <div className="group-image-second-sec">
                        <h2>Time for Thrill & Activities</h2>
                        <p>We all at GeekyBones were thrilled to get started with the activities that included rope walk, zip line, tire walk, ring walk, Burma bridge, balancing, Tarzan swing & commando net, etc. After our activities, we enjoyed our evening snacks. In the late evening, we rocked with a bonfire and DJ party where we all danced and enjoyed the moments. Then, after a delicious dinner, we all went to our rooms, where we played cards, gossiped and went to sleep.</p>
                    </div>
                </div>
            </div>


        </section>
    )
}
export default TheTripBegin;
