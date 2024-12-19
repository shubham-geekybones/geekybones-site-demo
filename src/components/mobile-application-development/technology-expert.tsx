import {ASSETS} from "../common/images";
import * as React from "react";

const TechnologyExpert = () => {
    const technologyExpertiseList = [
        {
            name: '',
            path: ASSETS.SERVICES.AndroidLogo
        },
        {
            name: '',
            path: ASSETS.SERVICES.AppleLogo
        },
        {
            name: '',
            path: ASSETS.SERVICES.IonicLogo
        },
        {
            name: '',
            path: ASSETS.SERVICES.FlutterLogo
        },
        {
            name: '',
            path: ASSETS.SERVICES.ReactLogo
        }
    ]
    return (
        <section className="Technology-expert-sec container-fluid gb-md-pad-bottom">
            <div className="container">
                <div className="technology-heading">
                    <h2> <span>Technology</span> We Serve</h2>
                    <p>The development of mobile applications depends on choosing the right technology and platform for every business. Therefore, we perform in-depth research, and through our consistent research, we adopt wide-scale technologies ensuring that we pick the right technology and tool throughout the app development process.
</p>
                </div>
                <div className="technology-logo-wraper">
                    {technologyExpertiseList.map((technology, key) => (
                        < div className="technology-logo-wrap">
                            <img src={technology.path} className="android-img" alt={technology.name} />
                        </div>
                        ))}
                </div>
            </div>
        </section>
    )
}
export default TechnologyExpert
