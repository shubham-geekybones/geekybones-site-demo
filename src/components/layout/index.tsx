import * as React from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import '../../../static/animate.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { withPrefix } from "gatsby";
import Helmet from "react-helmet";
const Layout = (props)  => {
    const { metaTitle, metaDescription } = props;
    return (
        <div>
            <Header {...props} />
            {props.children}
            <Footer />
            <Helmet>
                <meta charSet="utf-8" />
                <title>{metaTitle}</title>
                <meta name='description' content={metaDescription} />
                <script src={withPrefix('https://code.jquery.com/jquery-3.6.0.min.js')} type="text/javascript" />
                <script src={withPrefix('custom.js')} type="text/javascript" />
                <script src={withPrefix('particles.js')} type="text/javascript" />
                <script src={withPrefix('app.js')} type="text/javascript" />
            </Helmet>
        </div>
    )
}

export default Layout;
