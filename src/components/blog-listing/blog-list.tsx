import {ASSETS} from "../common/images";
import {Link} from "gatsby";
import * as React from "react";
import {blogListData} from "../../assets/data/tech"
const BlogList = () => {
    return (
        <>
        <div className="left-side">
            {blogListData.map((row, index) => (
                <div className="row" key={index}>
                    <div className="col-md-12">
                        <Link to={row.url} className="blog-wrap">
                            <div className="row">
                                <div className="col-xl-5 col-lg-6 pe-md-0">
                                    <div className="blog-wrap-col-first">
                                        <img src={row.blogImg} className="blog-img" alt="" />
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6">
                                    <div className="blog-wrap-col-second">
                                        <button className="common-btn-blog">{row.date}</button>
                                        <h4>{row.title}</h4>
                                        <p>{row.description}</p>
                                        <div className="read-more-wrap">
                                            <div className="read-more">Read More <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}
export default BlogList;
