import * as React from "react";

const CommonServiceTitle = (props) => {
    const {title, description} = props;
    return (
        <section className="web-development-content-sec gb-md-pad-ver">
            <div className="container">
                <div className="web-development-tech-heading">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 dangerouslySetInnerHTML={{__html: title}} />
                            <p dangerouslySetInnerHTML={{__html: description}} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CommonServiceTitle;
