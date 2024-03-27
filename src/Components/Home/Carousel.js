import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Carousel = () => {
  const responsive = {
    0: {
      items: 1
    },
    568: {
      items: 1
    },
    1024: {
      items: 3,
      itemsFit: 'contain'
    },
  };

  const items = [
    <img className="responseImage" src="./Images/d1.jpeg" style={{ width: "98%", height: "370px" ,borderRadius:"50px" }} />,
    <img className="responseImage" src="./Images/d2.jpg" style={{ width: "98%", height: "370px" ,borderRadius:"50px" }} />,
    <img className="responseImage" src="./Images/d3.jpg" style={{ width: "98%", height: "370px" ,borderRadius:"50px" }} />,
    <img className="responseImage" src="./Images/d4.jpeg" style={{ width: "98%", height: "370px" ,borderRadius:"50px" }} />,
    <img className="responseImage" src="./Images/d5.jpg" style={{ width: "98%", height: "370px" ,borderRadius:"50px" }} />,
    <img className="responseImage" src="./Images/de6.jpeg" style={{ width: "98%", height: "370px" ,borderRadius:"50px" }} />,


  ];
  return (
    <>
      <div className="container mt-5 mb-5">
          <div className="">
            <AliceCarousel autoPlay
              autoPlayStrategy="none"
              autoPlayInterval={4000}
              animationDuration={1000}
              animationType="fadeout"
              infinite
              touchTracking={true}
              disableDotsControls
              disableButtonsControls mouseTracking items={items} responsive={responsive} controlsStrategy="alternate" />
        </div>
      </div>
    </>
  )
}

export default Carousel ;