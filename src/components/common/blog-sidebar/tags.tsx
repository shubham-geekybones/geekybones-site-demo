import {Link} from "gatsby";
import * as React from "react";

const Tags = () => {
    return (
        <div className="recent-post tag-wrap">
            <h3 className="mb-2 mb-sm-4">Tags</h3>
            <div className="tab-btn pt-3">
                <Link to={'/'}> Marketing</Link>
                <Link to={'/'}>Monitoring</Link>
                <Link to={'/'}>Online Marketing</Link>
                <Link to={'/'}>SEO</Link>
            </div>
        </div>
    )
}
export default Tags;
