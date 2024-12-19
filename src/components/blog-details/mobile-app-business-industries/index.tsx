import {ASSETS} from "../../common/images";
import {Link} from "gatsby";
import RelatedCategories from "../../common/related-categories";
import * as React from "react";
import SocialShare from "../../common/social-share";

const MobileAppBusinessIndustry = () => {

    const blogDetailsList1 = [
        {   Img:ASSETS.BLOG.BlogEcommerce,
            title: '1. e-Commerce',
            description1: 'eCommerce brings a lot of exposure that is never going to end! 80% of shoppers these days opt for mobile apps to make online purchases. Brands such as Amazon, Flipkart, and more are making the most. The additional features such as payment system, push notifications, shopping cart, etc., offer benefits that enhance customer experience.',
            title2:"Benefits of E-Commerce Business Mobile Apps",
            list1:"24/7 visibility to customers",
            list3:"Enhanced customer engagement",
            list4:"Improved Usability",
            list5:"Builds trust and loyalty",
        },
        {
            Img:ASSETS.BLOG.BlogEducation,
            title: '2. Education Industry',
            description1: 'Educational on-demand e-learning apps have reshaped the education sector by helping students to continue their studies. The world has gone virtual, and adapting digitalization for the education sector is one of the best opportunities. When planning to create an e-learning app for your business, adding advanced features such as hiring tutors with complete information, uploading tutorial videos and video calls can be beneficial.',
            title2:"Benefits of Educational Mobile Apps",
            list1:"Drive high engagement levels",
            list2:"Unlocking better connections between students, teachers, and parents",
            list3:"Value additions through loyalty or reward programs",
            list4:"Aids promotion while offering great support",
        },
        {
            Img:ASSETS.BLOG.BlogHealth,
            title: '3. Healthcare Industry',
            description1: 'Nothing is more important than treating the health issues immediately. With people becoming more conscious, on-demand health apps help find and book the exact physician for specific health conditions. These apps also allow the audience to schedule professional nursing, perform medical tests and get medicines delivered. The concept of health is a never-ending sector where on-demand health apps work as a handy exercise kit. Health app business ideas include health and fitness regime apps, doctor consultation apps, meditation apps, and much more. Discover a brand name for your business and bring in a lot of revenue.',
            title2:"Benefits of Healthcare Mobile Apps",
            list1:"Delivering timely care at remote locations",
            list2:"Access to patient care at home",
            list3:"Simplified healthcare with IoT (Internet of Things)",
            list4:"Accurate patient diagnostics",
            list5:"New vibrant opportunities",
            list6:"Secure payment options",
            list7:"Real-time communication",
            list8:"Custom Design Remedies",

        },
        {
            // Img:ASSETS.BLOG.BlogFood,
            title: '4. Food Industry',
            description1: 'On-demand food delivery apps have given a convenient reach for restaurants and hotels to the customers. Food lovers can get convenience, quick order delivery, variety of food; all can be done with just one app. If you are interested in food business ideas, start your on-demand food delivery app by taking inspiration from popular apps such as Zomato, Ubereats, etc., and add unique features to it.',
            title2:"Benefits Of Food Delivery Mobile Apps",
            list1:"Attract new customers",
            list2:"Customize your promotions and run a marketing campaign",
            list3:"Online presence, reviews, and ratings",
            list4:"Get closer to M-Commerce",
            list5:"Enhance the brand’s visibility online",
            list6:"Hassle-free table reservations",
        },
        {
            Img:ASSETS.BLOG.BlogBanking,
            title: '5. Banking and Finance Industry ',
            description1: 'Banking apps provide convenience to customers at any time with high-end security. Customers can access and check their accounts, transfer money and make a purchase.The additional features, such as chatbot services, help the customers with simple problems. In addition, the apps allow financial institutions to study customer analytics and measure their experiences.',
            title2:"Benefits Of Banking and Finance Industry Mobile Apps",
            list1:"Save on time and operational costs",
            list2:"Improved workflow",
            list3:"No more long-queue",
            list4:"Digital tools for better customer experience",
            list5:"24/7 services and support",

        },
        {
            title: 'Ready to Develop On-Demand Application for your Business?',
            description1: 'In this modern world, everybody is searching for instant satisfaction. Application development can help your business reach masses and gain exposure to match the fast-paced world. So get ready with new application ideas in mind and hire a leading mobile app development company to develop successful on-demand solutions.',
        },

    ]
    return (
        <div className="left-side-2">
            <div className="description-1">
                <p>The world is changing at a rapid speed where technology has simplified everything. So why not take advantage of flourishing on-demand apps that are gaining popularity around the globe. </p>
                <p>Consumers these days are searching for speed, convenience, and simplicity. They might want an urgent taxi, instant food for hunger cravings, immediate home repairs, and much more. The key principle here is to win a jackpot ticket when looking for business ideas by planning for an on-demand app development category. Being considered the latest gift of technology, on-demand apps have been significantly fulfilling the urgent and essential needs of the consumers at their doorsteps.</p>
            </div>
            <div className="common-blog-img-text-wrap">
                <div className="common-blog-img-wrap">
                <img src={ASSETS.BLOG.BlogDemand} className="left-side-laptop-img-2" alt="" />
                </div>
                <div className="link-wrap">
                    <Link to={'#'} className="month-link"> 22 Sep, 2021</Link>
                    <Link to={'#'}><i className="fa fa-user" aria-hidden="true"></i>Rashamdeep Kaur</Link>
                    <Link to={'#'}><i className="fa fa-folder"
                                      aria-hidden="true"></i>Mobile App Development</Link>
                    <Link to={'#'}><i className="fa fa-folder"
                                      aria-hidden="true"></i>On-Demand Mobile App</Link>
                    <a href="javascript:void(0);"></a>
                </div>
                <ul className="blog-list-wrap">
                    {blogDetailsList1.map((row, index) => (
                        <li key={index}>
                            <h4 className="common-title">{row.title}</h4>
                            {row.description1 && <p>{row.description1}</p>}
                            <ul className={"benefits-wrap-list"}>
                            <h4>{row.title2}</h4>
                            {row.list1 &&  <li>{row.list1}</li>}
                            {row.list2 &&  <li>{row.list2}</li>}
                            {row.list3 &&  <li>{row.list3}</li>}
                            {row.list4 &&  <li>{row.list4}</li>}
                            {row.list5 &&  <li>{row.list5}</li>}
                            {row.list6 &&  <li>{row.list6}</li>}
                            {row.list7 &&  <li>{row.list7}</li>}
                            {row.list8 &&  <li>{row.list8}</li>}
                                <img src={row.Img} alt={""} className="blog-common-img"/>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>


            <div className="social-icons-wrap">
                <div className="tag-wrap-2">
                    <h6>Tags:</h6>
                    <a href="javascript:void(0);">Mobile App Development</a>
                    <a href="javascript:void(0);">On-Demand Mobile App</a>
                </div>
                <SocialShare />
            </div>
            <hr />
            <RelatedCategories />
        </div>
    )
}
export default MobileAppBusinessIndustry;
