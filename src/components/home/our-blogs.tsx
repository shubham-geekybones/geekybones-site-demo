import React from 'react';
import { Link } from "gatsby";
import { blogListData } from "../../assets/data/tech";
const OurBlogs = () => {
    return (
        <section className='our-blogs-landing-page'>
            <div className='container'>
                <h2 className="text-center">Our Latest <span className="customer-heading-wrap-span">Blogs</span></h2>
                <div className="left-side">
                    <div className="row">
                        {blogListData.slice(0, 3).map((row, index) => (

                                <div key={index} className="col-md-4">
                                    <Link to={row.url} className="blog-wrap">

                                        {/* <div className="col-xl-5 col-lg-6 pe-md-0"> */}
                                        <div className="blog-wrap-col-first">
                                            <img src={row.blogImg} className="blog-img" alt="" />
                                        </div>
                                        {/* </div>
                                <div className="col-xl-7 col-lg-6"> */}
                                        <div className="blog-wrap-col-second">
                                            <button className="common-btn-blog">{row.date}</button>
                                            <h4>{row.title}</h4>
                                            <p>{row.description}</p>
                                            <div className="read-more-wrap">
                                                <div className="read-more">Read More <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></div>
                                            </div>
                                        </div>
                                        {/* </div> */}
                                        {/* </div> */}
                                    </Link>
                                </div>
                            
                        ))}
                    </div>
                </div>
                <div className='all-blogs-wrapper-btn'>
                     <a href="/blog" className="gb-animate-sm-btn-red me-sm-2 mt-sm-3">See More</a>
                </div>                
            </div>
        </section>
    )
}

export default OurBlogs;
