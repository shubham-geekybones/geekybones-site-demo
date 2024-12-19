import * as React from "react";

const Banner = (props) => {
    const {data} = props;
    if (data) {
        const {projectTitle = '', projectImage = '', projectDescription = ''} = data;
        return (
            <section className="app-details-banner-sec container-fluid">
                <div className="container">
                    <div className="row">
                        <div className={"col-md-1"}></div>
                        <div className={"col-md-10"}>
                            <div className={"app-banner-left-col"}>
                                <img src={projectImage} className="banner-img" alt=""/>
                                <h2 className={"text-center"} dangerouslySetInnerHTML={{ __html: projectTitle}}/>
                                <p dangerouslySetInnerHTML={{ __html: projectDescription }}/>

                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </section>
        )
    }
    return null;
}
export default Banner;
