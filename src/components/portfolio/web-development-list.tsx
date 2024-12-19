import * as React from "react";
import {ASSETS} from "../common/images";
import {Link} from "gatsby";

const WebDevelopmentList = () => {
    const webDevelopmentProjects = [
        {
            projectImg: ASSETS.PORTFOLIO.AllInOne,
            frameworkName: '',
            projectName: 'All-In',
            description: 'Learn popular Modern Foreign Languages (MFL) and English as Additional Language (EAL). All-in offers access to..',
            url: 'all-in',
        },
        {
            projectImg: ASSETS.PORTFOLIO.SportGear,
            frameworkName: '',
            projectName: 'Sports Gear Swag',
            description: 'Sports Gear Swag (SGS) believes that people deserve high-quality sports gear and an effortless style. SGS crafts elite jerseys..',
            url: 'sports-gear-swag',
        },
        {
            projectImg: ASSETS.PORTFOLIO.Mavrik,
            frameworkName: '',
            projectName: 'Mav3rik',
            description: 'Mav3rik simplifies complexities and makes your business or work shine! It offers compelling UX and UI designs, bespoke mobile and web apps..',
            url: 'mav3rik',
        },
        {
            projectImg: ASSETS.PORTFOLIO.CandyCoin,
            frameworkName: '',
            projectName: 'Candy Coin',
            description: 'Candy Coin brings you deliciously tangy, eye-popping Sour Belts bags. Not only this, while enjoying your juicy flavors, you can also win..',
            url: 'candy-coin',
        },        
        {
            projectImg: ASSETS.PORTFOLIO.BodyDrench,
            frameworkName: '',
            projectName: 'Body Drench',
            description: 'Body Drench is a leading brand in skincare and tanning solutions, offering a wide range of high-quality products to help users achieve healthy, glowing skin. Our development team was entrusted with revamping the Body Drench website to create a visually appealing, functional, and user-friendly platform that reflects the brand’s commitment to excellence.',
            url: 'body-drench',
        },
        {
            projectImg: ASSETS.PORTFOLIO.Cofax,
            frameworkName: '',
            projectName: 'Cofax',
            description: 'Cofax Business Systems is a premier provider of IT solutions and office equipment rentals, empowering Canadian businesses with flexible, reliable, and cost-effective technology options. Our development team collaborated with Cofax to create a robust online platform that highlights their unique offerings, including IT equipment rentals and comprehensive support services.',
            url: 'cofax',
        },
        {
            projectImg: ASSETS.PORTFOLIO.RiverEdge,
            frameworkName: '',
            projectName: 'River Edge',
            description: 'River Edge Advisors is a leading financial consulting firm that specializes in providing tailored advisory services for high-net-worth individuals, families, and businesses. Our development team worked closely with River Edge Advisors to build a sophisticated and user-friendly website that reflects their professional expertise while offering a seamless digital experience for their clients.',
            url: 'riveredge',
        },
        {
            projectImg: ASSETS.PORTFOLIO.FrontFooters,
            frameworkName: '',
            projectName: 'Front Footers',
            description: 'Frontfooters is a dynamic agency that specializes in providing cutting-edge marketing solutions, strategy consulting, and digital transformation services to businesses across various industries. Our team worked closely with Frontfooters to develop a robust, visually engaging, and user-friendly website that effectively conveys their services and connects them with potential clients.',
            url: 'frontfooters',
        },
        {
            projectImg: ASSETS.PORTFOLIO.ElRanchoVista,
            frameworkName: '',
            projectName: 'El Rancho Vista',
            description: 'El Rancho Vista is a premier senior living community that offers a blend of comfort, care, and a nurturing environment for its residents. Our development team worked closely with El Rancho Vista to design a user-friendly, informative, and visually appealing website that reflects the community s values while providing essential resources for prospective residents and their families.',
            url: 'el-rancho-vista',
        },
        {
            projectImg: ASSETS.PORTFOLIO.YSP,
            frameworkName: '',
            projectName: 'Yard Sign Plus',
            description: 'Yard Sign Plus is a leading provider of custom yard signs and printing solutions, catering to individuals, businesses, and organizations seeking high-quality signage for various needs. Our development team worked with Yard Sign Plus to create a visually striking, user-friendly, and highly functional website that effectively showcases their diverse product offerings while streamlining the ordering process for customers.',
            url: 'yard-sign-plus',
        },
        {
            projectImg: ASSETS.PORTFOLIO.LingoTechAi,
            frameworkName: '',
            projectName: 'Lingo Teach AI',
            description: 'LingoTeach.AI is an innovative language learning platform that leverages artificial intelligence to provide personalized and immersive language education. Our development team collaborated with LingoTeach.AI to create a cutting-edge website that reflects the brands advanced technology and enhances the learning experience for users.',
            url: 'lingo-tech-ai',
        },
        {
            projectImg: ASSETS.PORTFOLIO.Soul,
            frameworkName: '',
            projectName: 'Soullyf',
            description: 'Soullyf is a holistic wellness platform focused on promoting mental, physical, and emotional well-being through curated wellness resources, guidance, and community support. Our development team collaborated with Soullyf to create an intuitive, visually engaging, and feature-rich website that serves as both a resource hub and a community space for individuals seeking to improve their overall health and wellness.',
            url: 'soullyf',
        },
        {
            projectImg: ASSETS.PORTFOLIO.Evium,
            frameworkName: '',
            projectName: 'EVIUM CHARGING',
            description: 'Evium Charging is a forward-thinking company providing electric vehicle (EV) charging solutions for businesses, communities, and individual customers. Their goal is to make EV charging more accessible, efficient, and sustainable. Our development team collaborated with Evium Charging to create a modern, functional, and informative website that highlights their innovative products and services while providing a seamless user experience for their diverse customer base.',
            url: 'evium-charging',
        },
        {
            projectImg: ASSETS.PORTFOLIO.Installims,
            frameworkName: '',
            projectName: 'Installims',
            description: 'InstallIMS is a comprehensive installation management system designed to help businesses efficiently manage their installation processes, from scheduling and tracking to invoicing and reporting. Our development team worked closely with InstallIMS to create a clean, functional, and user-friendly website that showcases the platform’s robust features while providing a seamless experience for users seeking to optimize their installation operations.',
            url: 'Installims',
        },
        {
            projectImg: ASSETS.PORTFOLIO.Auslankmatrimony,
            frameworkName: '',
            projectName: 'Auslankamatrimony',
            description: 'The aim of www.auslankamatrimony.com.au website is to achieve maximum happy marriages by discovering and matching prospective..',
            url: 'auslankamatrimony',
        },
        {
            projectImg: ASSETS.PORTFOLIO.Swaaad,
            frameworkName: '',
            projectName: 'Swaaad',
            description: 'The Swaaad App is a dynamic platform that bridges the gap between food enthusiasts and exceptional culinary experiences. Designed to cater to both food lovers and home kitchens, Swaaad offers a comprehensive solution for discovering, ordering, and enjoying the best nearby food. The app also empowers home kitchens to showcase their unique offerings, including exotic and exclusive dishes, complete with detailed ingredient lists. Our team partnered with Swaaad to create a seamless, user-friendly application suite comprising the main Swaaad App for food lovers and a dedicated Kitchen App for home-based chefs.',
            url: 'swaaad',
        },
    ]
    return (
        <div className="container">
                <div className="row technology-tab-row">
                    {webDevelopmentProjects.map((row, index) => (
                        <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                            <Link to={`/portfolio/project/${row.url}`} className="technology-common-tab-col figure-wrap">
                                <div className="technology-common-tab-header tab-img-effect">
                                    <div className="img-wrap">
                                        <img src={row.projectImg} alt=""/>
                                    </div>
                                    <div className="text">
                                        <h3>{row.projectName}</h3>
                                    </div>
                                    <div className="line top"></div>
                                    <div className="line bottom"></div>
                                    <div className="line left"></div>
                                    <div className="line right"></div>
                                </div>
                                <div className="technology-common-tab-body">
                                    <div className="tab-body-heading">
                                        <h5>{row.projectName}</h5>
                                        <p>{row.frameworkName}</p>
                                    </div>
                                    <p>{row.description}</p>
                                    <div className="technology-common-tab-footer">
                                        <Link to={`/portfolio/project/${row.url}`}>View More</Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
        </div>
    )
}
export default WebDevelopmentList;
