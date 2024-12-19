import * as React from "react";

const Breadcrumbs = (props) => {
    const { pageTitle, currentPage } = props;
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="gb-common-breadcrumbs text-center pb-md-5 pb-4">
                    <h1 className="title gb-color-black text-capitalize">{pageTitle}</h1>
                    <ul className="breadcrumb-listing-wrapper">
                        <li><a href="/">Home</a></li>
                        <li>/</li>
                        <li className="gb-current-page">{currentPage}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumbs;
