import React, { Component } from "react";
import Slider from "react-slick";
import TestimonialsIcon from "../../assets/icons/TestimonialsIcon";
import {testimonialListData} from "../../assets/data/tech";
const Testimonials = () => {

  const settings = {
    centerMode: true,
    centerPadding: '0', 
    slidesToShow: 3, 
    

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <section className="our-happy-customer">
        <div className="container m-auto">
          <h2 className="pb-5 text-center">Statement from <span className="customer-heading-wrap-span">our Happy Customers</span></h2>
          <div className="slider-container">
            <Slider {...settings}>
             {testimonialListData.map((data)=>{
              return(
                <div className="px-3">
              <TestimonialsIcon/>
              <p>{data.clientMessage}</p>
                <h6>{data.clientName}</h6>
              </div>
              )
             })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonials;



