import React from 'react'
import { gallerySportsData } from "../../assets/data/tech";

const Index = () => {
  return (
    <>
      <div className="geeky-memories mb-5">
        <div className="container">
          <div className="row">
            <div className="common-heading text-center mb-4 mt-1">
              <h2>
              Activities at <span>Geekybones</span> 
              </h2>
            </div>
            <div className="modal-img-trip-wrapper gb-cricket-img-wrapper container">
                        <div className="row">
                            {gallerySportsData.map((slide, index) => (
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 p-0 gb-common-light-mrt" key={index}>
                                    <div className="common">
                                        <a href={slide.imgSrc} data-lightbox="hailhimalayastrip">
                                            <img className="w-100 common-img" src={slide.imgSrc} alt="" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index