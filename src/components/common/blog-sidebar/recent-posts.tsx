import {Link} from "gatsby";
import * as React from "react";

const RecentPosts = () => {
    return (
        <div className="recent-post">
            <h3 className="mb-2 mb-sm-4">Recent Posts </h3>
            <ul className="pt-3 mb-4 mb-sm-5">
                <li><Link to={'#'}>Do Right Now To Feel Less</Link></li>
                <li><Link to={'#'}>SEO And Digital Marketing</Link></li>
                <li><Link to={'#'}>Monitoring The Business Cycle</Link></li>
                <li><Link to={'#'}>I Must Explain You How All</Link></li>
                <li><Link to={'#'}>Targeted Email Campaign </Link></li>
            </ul>
        </div>
    )
}
export default RecentPosts;
