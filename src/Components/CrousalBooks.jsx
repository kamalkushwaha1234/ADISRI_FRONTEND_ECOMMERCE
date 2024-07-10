import React from "react";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
     return(
      <>
      <div className="max-sm:h-40 flex logg justify-center" style={{height:"30px"}} >
      <span><svg className={className} style={{...style,width:'4vw',height:"2.4vmax",transform:"rotate(-90deg)"}} onClick={onClick} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></span>
      </div>
      </>
     )
  }
  
  
  function SamplePrevArrow(props) {
  const {className,style,onClick}=props
  return(
    <>
    <div className="max-sm:h-40 flex logg justify-center " style={{height:"30px"}}>
     <span className="">
     <svg className={className} style={{...style,width:'4vw',height:"2.4vmax",transform:"rotate(-270deg)",zIndex:"2"}} onClick={onClick} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
     </span>
     </div>
    </>
  )
  }
  
export default function CrousalBooks({slideshow}) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slideshow,
    slidesToScroll: 1,
    autoplaySpeed: 1600,
     cssEase: "linear",
     nextArrow: <SampleNextArrow/>,
     prevArrow: <SamplePrevArrow />
     
  };
  return (
    <div className="slider-container p-3 ">
    <Slider {...settings} >
      <div className=" ">
      <img
       className="w-4/5 m-auto  "
            src="ALL IN ONE READING.jpg"
            alt=""
          />
      </div>
      <div>
      <img
       className="w-4/5 m-auto"
            src="ALL IN ONE WRITING BOOK HARD BOUND.jpg"
            alt=""
          />
      </div>
      <div>
      <img className="w-4/5 m-auto"
            src="AMAZING PICTURES  A.jpg"
            alt=""
          />
      </div>
      <div>
      <img className="w-4/5 m-auto"
            src="ART&CRAFT A.jpg"
            alt=""
          />
      </div>
      <div>
      <img 
           className="w-4/5 m-auto"
            src="ALL IN ONE WRITING BOOK HARD BOUND.jpg"
            alt=""
          />
      </div>
      <div>
      <img className="w-4/5 m-auto"
            src="AMAZING PICTURES C.jpg"
            alt=""
          />
      </div>
    </Slider>
    </div>
  );
}