import * as React from "react";
import {Link} from "gatsby";

const PortfolioTabs = () => {
    return (
    <React.Fragment>
        <section className="technology-tab-sec">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="technology-sec-heading">
                            <h2>Our <span>Latest Work</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="d-flex align-items-start technology-tab-wrap">
                    <div className="nav nav-pills me-3 position-rl">
                        <Link to={'/portfolio/web-development'} className="nav-link" activeClassName="active" aria-current="page">Web Development</Link>
                        <Link to={'/portfolio/mobile-app-development'} className="nav-link" activeClassName="active" aria-current="page">Mobile App Development</Link>
                        <Link to={'/portfolio/graphic-design'} className="nav-link" activeClassName="active" aria-current="page">Graphic Design</Link>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
    )
}
export default PortfolioTabs;
