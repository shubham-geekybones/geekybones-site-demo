import * as React from "react";
import {ASSETS} from "../common/images";
import {Link} from "gatsby";

const GraphicDesignServices = () => {
    return (
        <div>
            <section className="web-development-technology-sec graphic-design-technology-sec container-fluid gb-md-pad-ver">
                <div className="container">
                    <div className="row  web-dev-technology-row">
                        <div className="col-xl-6">
                            <div className="technology-third-col">
                                <h2>Engage your Audience with Appealing<span> Graphic & UX/UI </span>Design</h2>
                                <p>A plain image on the website won’t bring you the right leads and traffic. Hence, to make your website more appealing, high-quality graphics can help in making your marketing efforts fruitful.</p>
                                <p>Designing is an art and a technique of visual communication that includes typography, photography, and illustrations. The graphic designers at GeekyBones utilize their special skill set integrating the latest softwares and technologies to create representations that speak for your business and ideologies.</p>
                                <p>The reputed design team at GeekyBones incorporates the ideologies of quality and creativity in their work to deliver print or web designing projects. We take care of even the diminutive details and blend the logos, texts, colors, and images logically to put forward the message in an impressive way.</p>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="technology-second-col">
                                <img src={ASSETS.SERVICES.GraphicDesignServices} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default GraphicDesignServices;
