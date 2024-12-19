import {Link} from "gatsby";
import * as React from "react";
import {ASSETS} from "../common/images";

const MobileAppDevelopmentList = () => {
    const iosProjects = [
        {
            projectImg: ASSETS.PORTFOLIO.Tandom,
            frameworkName: '',
            projectName: 'Tandem',
            description: 'Tandem is a language learning app designed to connect users with native speakers for language exchange, helping them improve their speaking skills through real-time conversations. With a focus on fostering communication and cultural exchange, Tandem enables users to practice new languages in an authentic and immersive environment. Our team collaborated with Tandem to enhance its platform with new features, improve user experience, and ensure a seamless, interactive learning journey for language learners worldwide.',
            url: 'tandem',
        },
        {
            projectImg: ASSETS.PORTFOLIO.Troom,
            frameworkName: '',
            projectName: 'Troom',            
            description: 'The Troom App is a sophisticated private driver booking platform designed specifically for residents and travelers in Belgium. Catering to the needs of individuals seeking reliable, convenient, and professional transportation services, Troom provides a seamless way to book private drivers for various occasions. Our team collaborated with Troom to develop a user-friendly, feature-rich mobile and web application that ensures a hassle-free booking experience for users.',
            url: 'troom',
        },
        {
            projectImg: ASSETS.PORTFOLIO.WeAreOne,
            frameworkName: '',
            projectName: 'We Are One',
            description: 'World of We Are One is an immersive mobile app designed to inspire global unity, mindfulness, and emotional well-being. By focusing on positive thinking, personal growth, and connection, the app provides a platform where users can engage in a variety of activities aimed at fostering a sense of collective consciousness and global harmony. Our team collaborated with We Are One to design and develop a beautifully crafted, user-friendly mobile app that delivers engaging content and encourages users to participate in daily practices for mental, emotional, and spiritual well-being.',
            url: 'we-are-one',
        },
        {
            projectImg: ASSETS.PORTFOLIO.Swaaaad,
            frameworkName: '',
            projectName: 'Swaaad',
            description: 'The Swaaad App is a dynamic platform that bridges the gap between food enthusiasts and exceptional culinary experiences. Designed to cater to both food lovers and home kitchens, Swaaad offers a comprehensive solution for discovering, ordering, and enjoying the best nearby food. The app also empowers home kitchens to showcase their unique offerings, including exotic and exclusive dishes, complete with detailed ingredient lists. Our team partnered with Swaaad to create a seamless, user-friendly application suite comprising the main Swaaad App for food lovers and a dedicated Kitchen App for home-based chefs.',
            url: 'swaaad',
        },
        {
            projectImg: ASSETS.PORTFOLIO.QualityMindApp,
            frameworkName: '',
            projectName: 'Quality Minds',
            description: 'Quality Mind is a proven program helping people to improve their lives by reducing mental pressure. A personal Mind Mentor provides..',
            url: 'quality-minds',
        },
        {
            projectImg: ASSETS.PORTFOLIO.RxTro,
            frameworkName: '',
            projectName: 'RxTro',
            description: 'RxTro is a centralized industry platform for medical representatives in Australia. It helps organize daily visit..',
            url: 'rx-tro',
        },
        {
            projectImg: ASSETS.PORTFOLIO.FreshyApp,
            frameworkName: '',
            projectName: 'Freshy Helpline',
            description: 'Moving to new places can be stressful! You need accommodation, vehicles, jobs, and other basic things. The Freshy Helpline app helps..',
            url: 'freshy-helpline-mobile',
        },
        {
            projectImg: ASSETS.PORTFOLIO.MeetingManagmentApp,
            frameworkName: '',
            projectName: '360 Meeting Management',
            description: 'Meetings are opportunities for discussions and collaborations. The 360 Meeting Management app helps in building great meeting habits. The..',
            url: 'meeting-managment',
        },
        {
            projectImg: ASSETS.PORTFOLIO.VegatoApp,
            frameworkName: '',
            projectName: 'Vegato',
            description: 'Vegato App offers the luxury of discovering fresh and quality produce that is delivered at the doorstep. In addition, the platform allows..',
            url: 'vageto',
        },
        {
            projectImg: ASSETS.PORTFOLIO.SideffectApp,
            frameworkName: '',
            projectName: 'Sideffect Alert',
            description: 'Sideeffect Alert app is based on the concept of harm minimization. The alert and awareness system offers the subscribers real-time data on.. ',
            url: 'sideffect-alert',
        },
    ]
    return (
        <div className="container">
                <div className="row technology-tab-row">
                    {iosProjects.map((row) => (
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <Link to={`/portfolio/project/${row.url}`} className="technology-common-tab-col figure-wrap">
                                <div className="technology-common-tab-header tab-img-effect">
                                    <div className="img-wrap">
                                        <img src={row.projectImg} alt=""/>
                                    </div>
                                    <div className="text">
                                        <h3>{row. projectName}</h3>
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
export default MobileAppDevelopmentList;
