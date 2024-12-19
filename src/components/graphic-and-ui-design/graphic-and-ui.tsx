import {ASSETS} from "../common/images";
import * as React from "react";

const GraphicAndUi = () => {
    const graphicAndUiList = [
            {title: 'HTML5, CSS3, Javascript and Jquery' },
            {title: 'Minimalistic, Responsive & Scalable Designs'},
            {title: ' Wireframes, Mockups & Prototypes'},
            {title: 'React JS, Angular JS, Vue JS & Node JS'},
            {title: 'Native/Hybrid GraphicDesignList & iOS Development'},
            {title: 'Logos, Brochure & DigitalMarketingServices Design'},
            {title: 'Swift & Java SDK'},
            {title: 'Corporate, Ecommerce & Blog Website POV'},
            {title: 'Illustrations, Icons & Infographic Design'},
            {title: 'Photoshop, Illustrator & Corel Draw'},
            {title: 'Testing, Support & Maintenance'},
            {title: 'Email Template Design'},
        ]
        return (
            <section className="technology-wrapper-graph container-fluid gb-md-pad-ver">
                <div className="technology-heading-wrap text-center">
                    <h2>Engage your Audience with Impressive Graphic & UX/UI Design</h2>
                    <p>The smooth user journey makes it easier for businesses to reach out to their goals. Thus, a good design is vital for brand recognition. GeekyBones, as the top web design company, provides key solutions and ideas for developing ever-changing UX/UI trends to enhance your web presence. Our creative tech-heads deliver user-friendly, truly captivating, and incredibly responsive websites by bridging the gap between business and customers.
</p>
                </div>
                <div className="row">
                    {graphicAndUiList.map((row) => (
                        <div className="col-6 col-md-3">
                            <div className="technology-wrapper-common-col common-btn btn-border ">
                                <p><img src={ASSETS.SERVICES.Check} className="yes-icon-common-img" alt="" /> {row.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center technology-btn-wraper">
                    <button className="gb-animate-md-btn-red gb-animate-color-white mt-4 mt-md-5 ">contact us</button>
                </div>
            </section>
            )
}
export default GraphicAndUi;
