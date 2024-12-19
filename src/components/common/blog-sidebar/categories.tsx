import {Link} from "gatsby";
import * as React from "react";

const Categories = () => {
    return (
        <div className="recent-post Categories-wrap">
            <h3 className="mb-2 mb-sm-4">Categories </h3>
            <ul className="pt-3 mb-3 mb-sm-5">
                <li><Link to={'#'}>Marketing</Link></li>
                <li><Link to={'#'}>Monitoring</Link></li>
                <li><Link to={'#'}>Online Marketing</Link></li>
                <li><Link to={'#'}>SEO </Link></li>
            </ul>
        </div>
    )
}
export default Categories;
