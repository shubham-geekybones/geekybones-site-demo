import * as React from "react";
import {ASSETS} from "../common/images";
import Technologies from "../common/technologies";

const WebDevelopmentTechnologyCompetence = () => {
    return (
        <section className="latest-technologies slich-pos latest-tech-slider-wrapper">            
            <div className="we-serve-technology">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="we-serve-technology-left-side">
                                <div className="expert-tech-heading common-heading expert-tech-heading-custom">
                                    <h2 className=""><span>Technologies</span> we serve</h2>
                                    <p className="">GeekyBones unleash bespoke technology, providing impactful and efficient business solutions. We leverage the up to the minute technologies that help in maximizing the productivity and domination of your business in the marketplace. Our innovative solutions serve a wide array of requirements, delighting users across multiple domains.</p>
                                    <p className="">So let’s join hands and move together towards a successful business journey.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="we-serve-technology-right-side">
                                <div className="row">
                                    <div className="col-md-3 common-tech-serve-wrap">
                                    <img className="common-technology-serve-img" src={ASSETS.HOME.ReactWhiteIcon} />
                                    <h5>React Js</h5>
                                    </div>
                                    <div className="col-md-3 common-tech-serve-wrap">
                                    <img className="common-technology-serve-img" src={ASSETS.HOME.AngularWhiteIcon} />
                                    <h5>Angular</h5>
                                    
                                    </div>
                                    <div className="col-md-3 common-tech-serve-wrap">
                                    <img className="common-technology-serve-img" src={ASSETS.HOME.LaravelWhiteIcon} />
                                    <h5>Laravel</h5>
                                    </div>
                                    <div className="col-md-3 common-tech-serve-wrap">
                                    <img className="common-technology-serve-img" src={ASSETS.HOME.NodeWhiteIcon} />
                                    <h5>Node Js</h5>
                                    </div>
                                    <div className="col-md-3 common-tech-serve-wrap">
                                    <img className="common-technology-serve-img" src={ASSETS.HOME.ShopifyWhiteIcon} />
                                    <h5>Shopify</h5>
                                    </div>
                                    <div className="col-md-3 common-tech-serve-wrap">
                                    <img className="common-technology-serve-img" src={ASSETS.HOME.SymfonyWhiteIcon} />
                                    <h5>Symfony</h5>
                                    </div>
                                    <div className="col-md-3 common-tech-serve-wrap">
                                    <img className="common-technology-serve-img" src={ASSETS.HOME.JavaWhiteIcon} />
                                    <h5>Java</h5>
                                    </div>
                                    <div className="col-md-3 common-tech-serve-wrap">
                                    <img className="common-technology-serve-img" src={ASSETS.HOME.PhpWhiteIcon} />
                                    <h5>Php</h5>
                                    </div>
                                    <div className="col-md-3 common-tech-serve-wrap">
                                    <img className="common-technology-serve-img" src={ASSETS.HOME.ReactNativeWhiteIcon} />
                                    <h5>React Native</h5>
                                    </div>
                                    <div className="col-md-3 common-tech-serve-wrap">
                                    <img className="common-technology-serve-img" src={ASSETS.HOME.WixWhiteIcon} />
                                    <h5>Wix</h5>
                                    </div>
                                    <div className="col-md-3 common-tech-serve-wrap">
                                    <img className="common-technology-serve-img" src={ASSETS.HOME.WordpressWhiteIcon} />
                                    <h5>Wordpress</h5>
                                    </div>
                                    <div className="col-md-3 common-tech-serve-wrap">
                                    <img className="common-technology-serve-img" src={ASSETS.HOME.FlutterWhiteICon} />
                                    <h5>Flutter</h5>
                                    </div>
                                    
                                </div> 
                            </div>
                        </div>
                    </div>
           </div>
        </section>
    )
}
export default WebDevelopmentTechnologyCompetence;
