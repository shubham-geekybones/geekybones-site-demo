import {Link} from "gatsby";
import {ASSETS} from "./images";
import * as React from "react";

const RelatedCategories = () => {
    const recentBlogsList = [
        {
            imgUrl: ASSETS.BLOG.BlogDemand,
            title: 'Mobile Apps Ideas to Fuel Different Business Industries',
            blogUrl: '/mobile-app-business-industries',
        },
        {
            imgUrl: ASSETS.BLOG.InternetOfThings,
            title: 'IoT Complete Guide: Evolution, Application & Benefits',
            blogUrl: '/the-of-evolution-iot-application-and-benefits',
        },
        {
            imgUrl: ASSETS.BLOG.RightCompanyToJoin,
            title: 'How to Select the Right Company to Join, for Your Career Growth',
            blogUrl: '/how-to-select-the-right-company-to-join',
        },

    ]
    return (
        <div className="related-wrap">
            <div className="related-heading">
                <h3>Recent <span>Blogs</span></h3>
            </div>
            <div className="row">
                {recentBlogsList.map((row, index) => (
                    <div className="col-md-4 col-6" key={index}>
                        <Link to={row.blogUrl} className="related-common-col">

                            <div className="overlay-wrap">
                                <img src={row.imgUrl} className="image-common" alt="" />
                                <div className="overlay">
                                    <div className="text">{row.title}</div>
                                </div>
                            </div>

                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default RelatedCategories;
