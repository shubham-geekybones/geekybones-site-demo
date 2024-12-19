import * as React from "react";
import {ASSETS} from "../images";
import {Link} from "gatsby";
import ContactUsForm from "../contact-us-form";
import { useForm } from "react-hook-form";

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Footer = () => {
  const {
 register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log("DATA", data);

  return (
    <React.Fragment>
      <section id="particles-js" className="footer-sec container-fluid">
        <div className="footer-wrap gb-md-pad-top">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="footer-first-col">
                  <img src={ASSETS.HOME.Logo} className="white-logo" alt="" />
                  <p>
                    GeekyBones is a trusted technology leader with a team of
                    highly skilled professionals who take care of business in
                    every aspect. Our passionate experts offer software, web and
                    mobile application development for several industries.
                    Establish a solid identity in the marketplace with our
                    uniquely created expertise.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-second-col">
                  <h4 className="gb-animate-color-white color-white"> Company </h4>
                  <ul>
                    <li>
                      <i
                        className="fa fa-angle-double-right common-double-arrow"
                        aria-hidden="true"
                      ></i>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <i
                        className="fa fa-angle-double-right common-double-arrow"
                        aria-hidden="true"
                      ></i>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <i
                        className="fa fa-angle-double-right common-double-arrow"
                        aria-hidden="true"
                      ></i>
                      <a href="/services">Services</a>
                    </li>
                    <li>
                      <i
                        className="fa fa-angle-double-right common-double-arrow"
                        aria-hidden="true"
                      ></i>
                      <a href="/blogs">Blog</a>
                    </li>
                    <li>
                      <i
                        className="fa fa-angle-double-right common-double-arrow"
                        aria-hidden="true"
                      ></i>
                      <a href="/portfolio/web-development">Portfolio</a>
                    </li>
                    <li>
                      <i
                        className="fa fa-angle-double-right common-double-arrow"
                        aria-hidden="true"
                      ></i>
                      <a href="/contact-us">Contact</a>
                    </li>
                    <li>
                      <i
                        className="fa fa-angle-double-right common-double-arrow"
                        aria-hidden="true"
                      ></i>
                      <a href="/careers">Careers</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-third-col">
                  <h4 className="color-white"> Game at geekybones </h4>
                  <span className="footer-span">
                    <i
                      className="fa fa-angle-double-right common-double-arrow"
                      aria-hidden="true"
                    ></i>
                    <a href="/gallery" className="">
                      Geekybones Gallery
                    </a>
                  </span>
                  <h5 className="color-white mb-3"> Leaders on the Ground! </h5>
                  <a href="/leaders-on-the-ground" className="">
                    <i
                      className="fa fa-angle-double-right common-double-arrow"
                      aria-hidden="true"
                    ></i>{" "}
                    Cricket Matches
                  </a>
                </div>

                <span className="footer-span color-white my-3">
                  <i
                    className="fa fa-angle-double-right common-double-arrow"
                    aria-hidden="true"
                  ></i>
                  <Link className="color-white" to="/sitemap-index.xml">
                    Sitemap
                  </Link>
                </span>
                
              </div>
              <div className="col-md-3">
                <div className="footer-forth-col">
                  <h4 className="color-white"> Get In Touch With Us </h4>
                  <ul className="address-listing-wrapper">
                    <li className="list-bg-plane">
                      <input
                        type="text"
                        className="form-control footer-form-control"
                        placeholder="Your email address"
                        {...register("Email", {
                          required: "Email is required",
                          pattern: {
                            value: EMAIL_REGEX,
                            message: "Invalid Email",
                          },
                        })}
                      />
                      {errors.Email && (
                        <span className="error-message">
                          {typeof errors.Email.message === 'string' ? errors.Email.message : 'Error message'}
                        </span>
                      )}
                      <button
                        className="mail-plane-img"
                        onClick={handleSubmit(onSubmit)}
                      >
                        <img
                          src={ASSETS.COMMON.Send}
                          alt=""
                          style={{ width: 21, height: 19 }}
                        />
                      </button>
                    </li>
                    <li>
                      <img
                        src={ASSETS.COMMON.Headphones}
                        className="common-double-arrow"
                        alt=""
                        style={{ width: 20, height: 17 }}
                      />{" "}
                      <a href="tel: +91-9478511189">+91 0172 291 2179</a>
                    </li>
                    <li>
                      <img
                        src={ASSETS.COMMON.Map}
                        className="common-double-arrow"
                        alt=""
                        style={{ width: 20, height: 22 }}
                      />
                      <p>
                        Plot No 986, Ground Floor, Sector 82, JLPL Industrial
                        Area, Sahibzada Ajit Singh Nagar, Punjab 160055
                      </p>
                    </li>
                    <li>
                      <img
                        src={ASSETS.COMMON.Envelope}
                        className="common-double-arrow"
                        alt=""
                        style={{ width: 20, height: 18 }}
                      />
                      <a href="mailto: Contact@geekybones.com">
                        contact@geekybones.com
                      </a>
                    </li>
                  </ul>
                  <div className="footer-social-icon-wrap">
              <Link to={"https://www.facebook.com/GeekyBones/"} target="_black">
                <i
                  className="fa fa-facebook-square social-icon-common"
                  aria-hidden="true"
                ></i>
              </Link>
              <Link to={"https://twitter.com/_GeekyBones"} target="_black">
                <i
                  className="fa fa-twitter-square social-icon-common"
                  aria-hidden="true"
                ></i>
              </Link>
              <Link
                to={"https://www.instagram.com/geeky.bones/?hl=en"}
                target="_black"
              >
                <i
                  className="fa fa-instagram social-icon-common"
                  aria-hidden="true"
                ></i>
              </Link>
              <Link
                to={"https://in.linkedin.com/company/geekybones"}
                target="_black"
              >
                <i
                  className="fa fa-linkedin-square social-icon-common"
                  aria-hidden="true"
                ></i>
              </Link>
            </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-2-wrap">
              <p className="color-white text-center">
                2025 GeekyBones Lab Private Limited. All Rights Reserved{" "}
              </p>
           </div>
      <div
        className="modal fade"
        id="contactUsModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="contact-form-popup-wrapper contact-us-sec-wrapper">
                <Link to={'#'} className="cancel-btn" data-bs-dismiss="modal" aria-label="Close"><img src={ASSETS.COMMON.PlusIconWhite} alt="" /></Link>
                <p className="gb-contact-popup-title">request free quote</p>
              <ContactUsForm />
            </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Footer;

