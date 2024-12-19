import * as React from "react";
import {Link} from "gatsby";
import blogPage from "../../../pages/blog";
// @ts-ignore
import PropTypes from "prop-types";

const Breadcrumb = (props) => {
    return (
        <section className="about-us-sec container-fluid">
            <div className="">
                <div className="about-us-heading container">
                 <h2 className="text-fill-shadow">{props.textFillShadow}</h2>
                 <div className="title-breadcrumb">
                    <h1>{props.pageTitle}</h1>
                    <nav aria-label="breadcrumb" className="breadcrumb-wrap">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                            {props.lastRoute &&<li className="breadcrumb-item"><Link to={props.lastRouteUrl}>{props.lastRoute}</Link></li>}
                            <li className="breadcrumb-item active" aria-current="page">{props.currentPage}</li>
                        </ol>
                    </nav>
                </div>
                </div>
            </div>
        </section>
    )
}
export default Breadcrumb;

Breadcrumb.propTypes = {
    pageTitle: PropTypes.string.isRequired,
    currentPage: PropTypes.string.isRequired,
    lastRoute: PropTypes.string,
    lastRouteUrl: PropTypes.string,
}
