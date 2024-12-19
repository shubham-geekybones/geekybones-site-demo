import { ASSETS } from "../../components/common/images";
import React from "react";
import Slider from "react-slick";
import { gallerySliderData } from "../../assets/data/tech";

const Index = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={`btn btn-primary common-tech-next-prev-btn tech-prev-btn gallery-btn ${currentSlide === 0 ? "slick-disabled" : ""} d-none d-sm-block d-md-block d-lg-block`}
      aria-hidden="true"
      aria-disabled={currentSlide === 0}
      type="button"
    >
      <img src={ASSETS.SERVICES.SliderArrowLeftWhite} className="bg-sm-img" alt="SliderArrowLeftWhite" />
    </button>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={`btn btn-primary common-tech-next-prev-btn tech-next-btn gallery-btn ${currentSlide === slideCount - 1 ? "slick-disabled" : ""} d-none d-sm-block d-md-block d-lg-block`}
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1}
      type="button"
    >
      <img src={ASSETS.SERVICES.SliderArrowRightWhite} className="bg-sm-img" alt="SliderArrowRightWhite" />
    </button>
  );

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="gallery-slider latest-tech-slider-wrapper mt-5 mb-5 pt-5 pb-5">
      <div className="container">
        <div className="slider three">
          <div className="common-heading text-center mb-5">
            <h2>
              Fun at <span>GeekyBones</span>
            </h2>
          </div>
          <Slider {...settings}>
            {gallerySliderData.map((slide, index) => (
                
              <div className="common-main-div" key={index}>
                <div className="technology-expert-sec container-fluid pb-4">
                  <div className="container">
                    <div className="row slider-row">
                      <div className="col-md-12 col-sm-12">
                        <div className="expert-tech-col-second w-100 h-25">
                          <img
                            src={slide.imgSrc}
                            className="w-100"
                            alt={slide.imgAlt}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Index;


