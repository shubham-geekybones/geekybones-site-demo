import * as React from "react";
import YearExperience from "../../assets/icons/YearExperience";
import SatisfiedClients from "../../assets/icons/SatisfiedClients";
import DevelopmentHours from "../../assets/icons/DevelopmentHours";
import ProjectsDelivered from "../../assets/icons/ProjectsDelivered";

const WhyChooseUs = (props) => {
    const whyChooseUsListing = [
        {
          icon: <YearExperience/> ,
          customIcon: true,
          count: '8',
          title: 'Year Experience',
        },
        {
          icon: <SatisfiedClients/>,
          customIcon: true,
          count: '80',
          title: 'Satisfied Clients',
        },
        {
           icon: <DevelopmentHours/>,
           customIcon: true,
          count: '2,00,000',
          title: 'Development Hours',
        },
        {
          icon: <ProjectsDelivered/>,
          customIcon: true,
          count: '140',
          title: 'Projects Delivered',
        },
    ]
    const {className} = props;
    return (
        <section className={`why-choose-us-sec container-fluid gb-md-pad-top ${className}`}>
            <div className="container">
                <div className="why-choose-heading common-heading text-center">
                    <h2 className="text-light"><span>Why Choose</span> us?</h2>
                </div>
                <div className="row">

                    {whyChooseUsListing.map((row, index) => (
                        <div className="col-sm-6 col-md-6 col-lg-3 mt-2" key={index}>
                            <div className="why-choose-common-col">
                            <div className="why-choose-common-icons">
                                <div className="icon-sec">
                                {row.customIcon ? (
                                row.icon
                            ) : (
                                <i className={`fa ${row.icon}`} aria-hidden="true"></i>
                            )} 
                                </div>
                                </div>
                                <div className="fa-icon-wrap">
                                    <h3  className="my-3">{row.count}</h3>
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </div>
                                
                                <h5  className="">{row.title}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default WhyChooseUs;
