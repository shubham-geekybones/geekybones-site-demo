import {ASSETS} from "../images";
import {Link} from "gatsby";
import * as React from "react";

const PopularPost = () => {

    const popularPostsList = [
        {
            postImg: ASSETS.BLOG.Blog1,
            title: 'Do Right Now To Feel Less',
            date: 'On 4 Oct',
        },
        {
            postImg: ASSETS.BLOG.Blog1,
            title: 'SEO And Digital Marketing',
            date: 'On 4 Oct',
        },
        {
            postImg: ASSETS.BLOG.Blog1,
            title: 'Monitoring The Business',
            date: 'On 4 Oct',
        }
    ]
    return (
        <div className="popular-post-wrap recent-post">
            <h3 className="mb-2 mb-sm-4">Popular Posts</h3>
            <div className="pt-3 mb-2 mb-sm-5">
                {popularPostsList.map((row) => (
                    <div className="post-wrap">
                        <div className="post-img-wrap">
                            <img src={row.postImg} className="post-common-img" alt="" />
                        </div>
                        <div className="post-content-wrap">
                            <h6><Link to={'#'}>{row.title}</Link></h6>
                            <p>{row.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default PopularPost;
