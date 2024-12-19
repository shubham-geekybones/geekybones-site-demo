import * as React from "react";
import {ASSETS} from "../common/images";

const GraphicDesignList = () => {

    const graphicDesignList = [
        {
          imgUrl: ASSETS.PORTFOLIO.GraphicEcommerceDesign,
          title: 'ecommerce website landing page',
          modalImgUrl: ASSETS.PORTFOLIO.GraphicEcommerceDesign,
        },
        {
          imgUrl: ASSETS.PORTFOLIO.GraphicDesign1,
          title: 'web agency landing page ui Design',
          modalImgUrl: ASSETS.PORTFOLIO.GraphicDesign1,
        },
        {
          imgUrl: ASSETS.PORTFOLIO.GraphicDesign2,
          title: 'Dance Web Site Home Page',
          modalImgUrl: ASSETS.PORTFOLIO.GraphicDesign2,
        },
        {
          imgUrl: ASSETS.PORTFOLIO.GraphicDesign3,
          title: 'Interior Design',
          modalImgUrl: ASSETS.PORTFOLIO.GraphicDesign3,
        },
        {
          imgUrl: ASSETS.PORTFOLIO.GraphicDesign4,
          title: 'Online Booking Room Pg',
          modalImgUrl: ASSETS.PORTFOLIO.GraphicDesign4,
        },
        {
          imgUrl: ASSETS.PORTFOLIO.GraphicDesign5,
          title: 'Travel Popular Destinations',
          modalImgUrl: ASSETS.PORTFOLIO.GraphicDesign5,
        },
        {
          imgUrl: ASSETS.PORTFOLIO.GraphicDesign6,
          title: 'Office Management Mobile App',
          modalImgUrl: ASSETS.PORTFOLIO.GraphicDesign6,
        },
        {
          imgUrl: ASSETS.PORTFOLIO.GraphicDesign7,
          title: 'Instagram redesign ui',
          modalImgUrl: ASSETS.PORTFOLIO.GraphicDesign7,
        },
        {
          imgUrl: ASSETS.PORTFOLIO.GraphicDesign8,
          title: 'Interiors Shopping Mobile App',
          modalImgUrl: ASSETS.PORTFOLIO.GraphicDesign8,
        },
        {
          imgUrl: ASSETS.PORTFOLIO.GraphicDesign9,
          title: 'Log In Sign up  UI Design',
          modalImgUrl: ASSETS.PORTFOLIO.GraphicDesign9,
        },

    ]

    return (
            <div className="graphic-design-wrap">
                <div className="container">
                <div className="row">
                    {graphicDesignList.map((row) => (
                        <div className="col-lg-4 col-md-6">
                            <div className="common-col-wrap">
                                <a href={row.modalImgUrl} data-lightbox="graphic-design" data-title={row.title}>
                                    <img className="graphic-design-common-img" src={row.imgUrl} alt="" />
                                    <p>{row.title}</p>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default GraphicDesignList;
