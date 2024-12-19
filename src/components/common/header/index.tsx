import * as React from "react";
import { ASSETS } from "../images";
import { Link } from "gatsby";
import Breadcrumb from "../breadcrumb";
import CareerIcon from "../../../assets/icons/CareerIcon";

const Header = (props) => {
  const { headerCustomClass, breadcrumbView } = props;
  return (
    <div className={`${headerCustomClass} gb-header-main-wrapper`}>
      <div className="header-sec container-fluid">
        <div className="top-header-wrap">
          <div className="container">
            <div className="top-header-content-wrap">
              <div className="contact-wrap">
                <div className="top-header-left-col">
                  <a className="contact-disc" href="tel: +911722912179">
                    <i
                      className="fa fa-phone navbar-fa-common"
                      aria-hidden="true"
                    ></i>
                    +91 172 2912179
                  </a>
                  <div className="gmail-wrap">
                    <a href="mailto:contact@geekybones.com">
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>
                      contact@geekybones.com
                    </a>
                  </div>
                </div>
                <div className="top-header-right-col">
                  <ul>
                    <li><a href="https://www.facebook.com/GeekyBones/"><i className="fa fa-facebook-square social-icon-common" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.instagram.com/geeky.bones/"><i className="fa fa-instagram social-icon-common" aria-hidden="true"></i></a></li>
                    <li><a href="https://x.com/_GeekyBones"><i className="fa fa-twitter-square social-icon-common" aria-hidden="true"></i></a></li>
                    <li><a href="skype:daishy.goyal1"><i className="fa fa-skype" aria-hidden="true"></i></a></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-wrap">
        <div className="navbar-wrap-inner">
          <div className="container">
            <div className="navbar-container">
              <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid p-0">
                  <a className="navbar-brand" href="/">
                    <img src={ASSETS.HOME.Logo} className="logo-img" alt="" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </button>
                  <div
                    className="collapse navbar-collapse mx-auto collapse-navbar"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav mx-auto">
                      <li className="nav-item">
                        <Link
                          to={"/"}
                          className="nav-link nav-link-common"
                          activeClassName="active"
                          aria-current="page"
                        >
                          <i
                            className="fa fa-home navbar-fa-common"
                            aria-hidden="true"
                          />
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to={"/about"}
                          className="nav-link nav-link-common"
                          activeClassName="active"
                          aria-current="page"
                        >
                          <i
                            className="fa fa-user navbar-fa-common"
                            aria-hidden="true"
                          />{" "}
                          About us
                        </Link>
                      </li>

                      <li className="nav-item dropdown">
                        <Link
                          to={"/services"}
                          className="nav-link nav-link-common"
                          activeClassName="active"
                          aria-current="page"
                        >
                          <i
                            className="fa fa-cogs navbar-fa-common"
                            aria-hidden="true"
                          />{" "}
                          Services
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          to={"/gallery"}
                          className="nav-link nav-link-common"
                          activeClassName="active"
                          aria-current="page"
                        >
                          <i
                            className="fa fa-picture-o navbar-fa-common"
                            aria-hidden="true"
                          />{" "}
                          Gallery
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to={"/portfolio/web-development"}
                          className="nav-link nav-link-common"
                          activeClassName="active"
                          aria-current="page"
                        >
                          <i
                            className="fa fa-briefcase navbar-fa-common"
                            aria-hidden="true"
                          />{" "}
                          Portfolio
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to={"/blog"}
                          className="nav-link nav-link-common"
                          activeClassName="active"
                          aria-current="page"
                        >
                          <i
                            className="fa fa-newspaper-o navbar-fa-common"
                            aria-hidden="true"
                          />{" "}
                          Blog
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to={"/contact-us"}
                          className="nav-link nav-link-common"
                          activeClassName="active"
                          aria-current="page"
                        >
                          <i
                            className="fa fa-phone navbar-fa-common"
                            aria-hidden="true"
                          />{" "}
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <form className="d-flex justify-content-end">
                  <Link
                    to={"#contactUsModal"}
                    className="gb-animate-sm-btn-white gb-animate-color-red get-a-quote-btn"
                    data-bs-toggle="modal"
                  >
                    Get a Quote
                  </Link>
                </form>
              </nav>
            </div>
          </div>
        </div>
        {breadcrumbView && <Breadcrumb {...props} />}
      </div>
    </div>
  )
}
export default Header;
