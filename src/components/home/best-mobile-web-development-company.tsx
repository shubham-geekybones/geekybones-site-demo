import * as React from "react";
import {Link} from "gatsby";
import WebDevelopment from "../../assets/icons/WebDevelopment";
import MobileAppDevelopment from "../../assets/icons/MobileAppDevelopment";
import WebDesign from "../../assets/icons/WebDesign";
import DigitalMarketing from "../../assets/icons/DigitalMarketing";
import ECommerce from "../../assets/icons/ECommerce";
import Cryptocurruncy from "../../assets/icons/Cryptocurruncy";
const BestMobileWebDevelopmentCompany = () => {
    const developmentList = [
        {
            icon: <WebDevelopment/>,
            customIcon: true,
            title: 'Web Development',
            description: 'Reflect your business identity by crafting an appealing and functional website in the online world. Get the customized web solutions with our passionate web developers who craft stunning websites with seamless functionality.',
            listPoint1: 'Symfony',
            listPoint2: 'Laravel',
            listPoint3: 'CodeIgniter',
            listPoint4: 'NodeJS',
            listPoint5: 'ExpressJS',
            url: '/services',
        },
        {
            icon: <MobileAppDevelopment/>,
            customIcon: true,
            title: 'Mobile App Development',
            description: 'Step up with intuitive, feature-rich and customer engaging mobile apps. Our mobile app developers build scalable apps for all the industries, domains and OS, using the best UI/UX design.',
            listPoint1: 'Android',
            listPoint2: 'iOS',
            listPoint3: 'Kotlin',
            listPoint4: 'Swift',
            listPoint5: 'React Native',
            url: '/services',
        },
        {
            icon: <WebDesign/>,
            customIcon: true,
            title: 'Web Design',
            description: 'Enhance your brand identity and attract your audience by establishing eye-grabbing UX/UI designs. Our designers craft frames with influential visual aspects that offer a seamless user experience.',
            listPoint1: 'React JS',
            listPoint2: 'Angular JS',
            listPoint3: 'Vu JS',
            listPoint4: 'Next JS',
            listPoint5: 'Svelte',
            url: '/services',
        },
        {
            icon: <DigitalMarketing/>,
            customIcon: true,
            title: 'Digital Marketing',
            description: 'Raise your digital presence with groundbreaking marketing tactics . Our digital marketing experts curate creative techniques and catchy graphics that allow you to gain an edge over your competitors .',
            listPoint1: 'SEO',
            listPoint2: 'SMO',
            listPoint3: 'Content Writing',
            url: '/services',
        },
        {
            icon: <ECommerce/>,
            customIcon: true,
            title: 'e-Commerce',
            description: 'Gain a winning advantage with an e-commerce store for your business. Our eCommerce website development expertise simplifies and streamlines the management of your online stores, delivering a top-notch shopping experience for high-conversions.',
            listPoint1: 'Shopify',
            listPoint2: 'Woo-Commerce',
            listPoint3: 'OpenCart',
            listPoint4: 'Magento',
            listPoint5: 'BigCommerce',
            url: '/services',
        },
        {
            icon: <Cryptocurruncy/>,
            customIcon: true,
            title: 'Blockchain/Cryptocurruncy',
            description: 'Step up on the success ladder with our range of blockchain development service-old. We help you transform your business and target more customers through the successful integration of blockchain and complementing technologies.',
            listPoint1: 'Ethereum & Solidity',
            listPoint2: 'Blockchain Exchange',
            url: '/services',
        }
    ]

    return (
      <section
        className="best-web-dev-sec gb-md-pad-top gb-sm-pad-bottom"
        id="best-mob-and-web-dev-company"
      >
        <div className="common-services-second-col-home container">
          <div className="best-web-development-heading common-heading text-center">
            <h2>
              Get on the Road to Success with the
              <span> Best Mobile & Web Development</span> Company
            </h2>
            <p>
              GeekyBones covers the entire development cycle, no matter how
              complex or diverse the needs of the clients. Our experts have
              years of experience which enables them to fulfil business needs.
              We have mobile app developers, UI/UX designers, quality analysts,
              developers and other associates that deliver creatively crafted
              and strategically designed mobile app and web development
              services, taking your business to the next level.
            </p>
          </div>
          <div className="single-security-card">
            <div className="row">
              {developmentList.map((row, index) => (
                <div
                  className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-4 mb-5"
                  key={index}
                >
                  <div className="single-security text-left ">
                    <div className="single">
                      {row.customIcon ? (
                        row.icon
                      ) : (
                        <i className={`fa ${row.icon}`} aria-hidden="true"></i>
                      )}
                    </div>
                    <h5>{row.title}</h5>
                    <p>{row.description}</p>
                    <ul className="tech-list">
                      <span className="span-line"> </span>
                      {row.listPoint1 && <li>{row.listPoint1}</li>}
                      {row.listPoint2 && (
                        <li>
                          <span> |</span> {row.listPoint2}
                        </li>
                      )}
                      {row.listPoint3 && (
                        <li>
                          <span> |</span> {row.listPoint3}
                        </li>
                      )}
                      {row.listPoint4 && (
                        <li>
                          <span> |</span> {row.listPoint4}
                        </li>
                      )}
                      {row.listPoint5 && (
                        <li>
                          <span> |</span> {row.listPoint5}
                        </li>
                      )}
                    </ul>
                    <Link className="read-more text-dark" to={row.url}>
                      Read More{" "}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}
export default BestMobileWebDevelopmentCompany;
