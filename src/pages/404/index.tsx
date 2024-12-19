import * as React from 'react';
import {Link} from "gatsby";

const PageNotFoundA = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="not-found-wrapper">
                            <h1 className="sub-title">Oops!</h1>
                            <p className="title">404 - PAGE NOT FOUND</p>
                            <p className="description">The page you are looking for might have been removed had its name changed or its temporarily unavailable.</p>
                            <Link to={'/'} className="back-to-home-btn">go to home page</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PageNotFoundA;
