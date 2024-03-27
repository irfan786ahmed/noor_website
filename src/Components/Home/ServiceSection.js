import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const ServiceItem = ({ data }) => (
  <div className="news-card">
    <a href="#" className="news-card__card-link"></a>
    <img src={data.serviceImages} alt="" className="news-card__image" />
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">{data.title}</h2>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur&hellip;</p>
        <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>
);

const CarouselServices = ({ serviceDetails }) => {
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

  return (
      <div className="container">
        <h1 className="text-center mt-3 divider" style={{ fontFamily: "cursive" }}>How We Can Help</h1>
      <div className="p-4">
        <AliceCarousel
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={2000}
          animationDuration={1000}
          animationType="fadeout"
          infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
          mouseTracking
          items={serviceDetails.map((data) => (
            <ServiceItem key={data.title} data={data} />
          ))}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </div>
    </div>
  );
};

const OurServices = ({ serviceDetails }) => (
  <div className="ourServices">
    <h1 className="text-center mt-3 divider" style={{ fontFamily: "cursive" }}>How We Can Help</h1>
    <div className="content-wrapper">
      {serviceDetails.map((data) => (
        <ServiceItem key={data.title} data={data} />
      ))}
    </div>
  </div>
);

const ServiceSection = () => {
  const [serviceDetails, setServiceDetails] = useState([
    {
      serviceImages: "/implants.jpg",
      title: "Implants",
    },
    {
      serviceImages: "/childteeth.jpg",
      title: "Children Teeth Care",
    },
    {
      serviceImages: "/ortho.jpg",
      title: "Orthdentist",
    },
    {
      serviceImages: "/sensitive.jpg",
      title: "Sensitive Teeth",
    },
    {
      serviceImages: "/teethcleaning.jpg",
      title: "Teeth Cleaning",
    },
    {
      serviceImages: "/whitening.jpg",
      title: "Teeth Whitening",
    },
  ]);

  return (
    <>
      {/* Render carousel on mobile, list on desktop */}
      <div className="d-block d-md-none">
        <CarouselServices serviceDetails={serviceDetails} />
      </div>
      <div className="d-none d-md-block">
        <OurServices serviceDetails={serviceDetails} />
      </div>
    </>
  );
};

export default ServiceSection;
