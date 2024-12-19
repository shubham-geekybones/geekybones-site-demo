import React from 'react'
import Layout from '../components/layout'
import SitemapBanner from './sitemap-banner'

const SiteMap = () => {
  return (
    <Layout metaTitle={'GeekyBones | Global Web and App Development Agency'} metaDescription={'GeekyBones is a top mobile app and website development, designing, and digital marketing agency. Visit us for more information at https://www.geekybones.com/'}>
      <SitemapBanner />
      <section className='sitemap-sec my-5'>
        <div className='container'>
          <div className="row">
            <div className="col-md-4">
              <div className="sitemap-wrapper">
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

                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sitemap-wrapper">
                <ul>

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
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sitemap-wrapper">
                <ul>

                  <li>
                    <i
                      className="fa fa-angle-double-right common-double-arrow"
                      aria-hidden="true"
                    ></i>
                    <a href="/careers">Careers</a>
                  </li>
                  <li>
                    <i
                      className="fa fa-angle-double-right common-double-arrow"
                      aria-hidden="true"
                    ></i>
                    <a href="/gallery" className="">
                      Geekybones Gallery
                    </a>
                  </li>
                  <li>
                    <i
                      className="fa fa-angle-double-right common-double-arrow"
                      aria-hidden="true"
                    ></i>
                    <a href="/leaders-on-the-ground" className="">

                      Cricket Matches
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


    </Layout>
  )
}

export default SiteMap