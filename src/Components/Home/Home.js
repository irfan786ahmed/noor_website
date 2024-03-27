import React, { useEffect ,useState} from "react";
import "./Home.css";
import Header from "../Header/Header";
import Testimonial from "./Testimonial";
import FAQ from "./FAQ";
import Doctors from "./Doctors";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Home = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/main-background1.png',
    '/main-background3.png',
    '/main-background4.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        (prevIndex + 1) % images.length
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="frontPageImage">
        <Header />
        <img className="jk" src={images[currentImageIndex]} alt="" width="100%" height="100%" />
      </div>
      <div className="mainServices mt-5 d-flex justify-content-center ">
        <img src="./Services.png" alt="" width="100%" />
      </div>

      <div className="container-fluid p-5 mt-5 pb-5 bgDental">
        <p className="text-center text-light fw-bold" style={{fontSize:"42px"}}>Your Free Initial Consultation</p>
        <h4 className="text-center text-light mb-5">First appointments are always complimentary at our practice. During your visit, our specialist will:</h4>
        <div className="row p-4">
          <div className="col-lg-4 text-center mb-3">
            <img src="./Images/icons/coffee-cup.png" alt="" width="100px" height="100px" />
            <p className="text-light fs-5 mt-2">Spend plenty of one-on-one time with you to talk about your needs</p>
          </div>
          <div className="col-lg-4 text-center mb-3">
            <img src="./Images/icons/clean.png" alt="" width="100px" height="100px" />
            <p className="text-light fs-5 mt-2">Create a personalized treatment plan for your smile</p>
          </div>
          <div className="col-lg-4 text-center">
            <img src="./Images/icons/clinic.png" alt="" width="100px" height="100px" />
            <p className="text-light fs-5 mt-2">If you’re ready to begin your treatment, the team will get you started that same day!</p>
          </div>
        </div>
      </div>

      {/* scroll wala with Icons */}
      <div className="scrollWalaPart pt-5 pb-5" style={{ backgroundColor: "#9a8aeb0c" }}>
        <p className="text-center fontSizeChange" style={{ fontSize: "65px", fontWeight: "800" }}>A trip to the dentist’s office should be a <br /> source of serenity, not anxiety</p>
        <p className="text-center fs-3" style={{ fontWeight: "400" }}>Here's how Noor Dental Hospital delivers a patient experience like no other</p>
        <div className="w-100">
        <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" duration="2">
            <div className="detailedBox mt-5" style={{ margin: "0 auto" }}>
              <div className="row">
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-medal purpleIcons"></i>
                </div>
                <div className="col-lg-8">
                  <p className="fs-2 fw-bold">Led by Trust And Transparency</p>
                  <p className="fs-5" style={{ fontWeight: "400" }}>Expect full transparency on every treatment from start to finish and understand the cost of every procedure before it begins.</p>
                </div>
              </div>
            </div>
</ScrollAnimation>


          <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" duration="2">
            <div className="detailedBox mt-5" style={{ margin: "0 auto" }}>
              <div className="row">
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                  <i className="fa-regular fa-handshake purpleIcons"></i>
                </div>
                <div className="col-lg-8">
                  <p className="fs-2 fw-bold">Anxiety-free dentistry</p>
                  <p className="fs-5" style={{ fontWeight: "400" }}>Put your dental anxieties to rest in our modern offices, designed by experts to serve as an oasis of calm and tranquility. Receive treatments in high-tech dental chairs where you can watch Netflix, listen to music, and get treated in comfort.</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" duration="2">
            <div className="detailedBox mt-5" style={{ margin: "0 auto" }}>
              <div className="row">
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-people-group purpleIcons"></i>
                </div>
                <div className="col-lg-8">
                  <p className="fs-2 fw-bold">A team you can count on</p>
                  <p className="fs-5" style={{ fontWeight: "400" }}>Every member of our team is focused on ensuring you receive clear, compassionate, and delightful treatments. Our experienced providers remain at the forefront of modern dentistry, so you can be confident you’re in expert hands.</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" duration="2">
            <div className="detailedBox mt-5" style={{ margin: "0 auto" }}>
              <div className="row">
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-syringe purpleIcons"></i>
                </div>
                <div className="col-lg-8">
                  <p className="fs-2 fw-bold">Dentistry for the modern age</p>
                  <p className="fs-5" style={{ fontWeight: "400" }}>Book appointments, fill out patient forms, and make payments with ease - all online! From digital x-rays to laser dentistry and 3D scanners, we’ve hand-picked our technology to ensure your treatments are efficient and delightful. </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* scroll wala end */}

      {/* <div className="ourServices">
        <h1 className="text-center mt-3 divider mainHeading" style={{ fontFamily: "cursive",fontSize:"50px"  }}>How We Can Help
        <span className="underline"></span></h1>
        <div className="content-wrapper">
          {console.log(serviceDetails)}
          {
            serviceDetails.map((data) => {
              return (
                <div className="news-card">
                  <a href="#" className="news-card__card-link"></a>
                  <img src={data.serviceImages} alt="" className="news-card__image" />
                  <div className="news-card__text-wrapper">
                    <h2 className="news-card__title">{data.title}</h2>
                    <div className="news-card__details-wrapper">
                      <p className="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur&hellip;</p>
                      <a href="#" className="news-card__read-more">Read more
                        <i className="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div> */}

      <div className="videoSection">
        <video
          src="/teeth1.mp4"
          width="100%"
          height="auto"
          loop
          autoPlay
          muted
        ></video>
      </div>

      <ScrollAnimation animateIn="slideInLeft" animateOut="slideOutRight" duration="2">
      <Doctors/>
      </ScrollAnimation>

      
      <div className="p-5 bgDental" style={{color: "white" }}>
        <div className="row">
          <div className="col-lg-5">
            <p className="fw-bold responseSize" style={{ fontSize: "60px" }}>Your Dental Needs In One Place</p>
            <p className="fw-bold fs-5">Noor Dental Hospital provides a range of restorative, preventative and cosmetic treatments to keep your teeth safe and healthy. A dentist in Shahganj you can count on.</p>
          </div>
          <div className="col-lg-7">
            <div className="row">
              <div className="col-lg-6 d-flex p-3">
                <div className="iconBox">
                  <img src="./Images/icons/equipment.png" loading="lazy" width="80" alt="A tooth with a checkmark." class="amenities-icon"/>
                </div>
                <div className="iconNameBox d-flex align-items-center ps-3 fs-5 fw-bold">
                  High Tech Equipment
                </div>
              </div>
              <div className="col-lg-6 d-flex p-3">
                <div className="iconBox">
                  <img src="./Images/icons/ai.png" loading="lazy" width="80" alt="A tooth with a checkmark." class="amenities-icon" />
                </div>
                <div className="iconNameBox d-flex align-items-center ps-3 fs-5 fw-bold">
                  Laser Dentistry
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 d-flex p-3">
                <div className="iconBox">
                  <img src="./Images/icons/beverage.png" loading="lazy" width="80" alt="A tooth with a checkmark." class="amenities-icon" />
                </div>
                <div className="iconNameBox d-flex align-items-center ps-3 fs-5 fw-bold">
                  Free Beverages
                </div>
              </div>
              <div className="col-lg-6 d-flex p-3">
                <div className="iconBox">
                  <img src="./Images/icons/eyemask1.png" loading="lazy" width="80" alt="A tooth with a checkmark." class="amenities-icon" />
                </div>
                <div className="iconNameBox d-flex align-items-center ps-3 fs-5 fw-bold">
                  Day Care Facility 
                </div>
              </div>
            </div>
            <div className="row">
            <div className="col-lg-6 d-flex p-3">
                <div className="iconBox">
                  <img src="./Images/icons/blanket.png" loading="lazy" width="80" alt="A tooth with a checkmark." class="amenities-icon" />
                </div>
                <div className="iconNameBox d-flex align-items-center ps-3 fs-5 fw-bold">
                  Wheel Chair Facility
                </div>
              </div>
              <div className="col-lg-6 d-flex p-3">
                <div className="iconBox">
                  <img src="./Images/icons/therapy.png" loading="lazy" width="80" alt="A tooth with a checkmark." class="amenities-icon" />
                </div>
                <div className="iconNameBox d-flex align-items-center ps-3 fs-5 fw-bold">
                  Microscopic Dentistry
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 d-flex p-3">
                <div className="iconBox">
                  <img src="./Images/icons/teet.png" loading="lazy" width="80" alt="A tooth with a checkmark." class="amenities-icon" />
                </div>
                <div className="iconNameBox d-flex align-items-center ps-3 fs-5 fw-bold">
                  Curated Selection of Oral Care Products
                </div>
              </div>
              <div className="col-lg-6 d-flex p-3">
                <div className="iconBox">
                  <img src="./Images/icons/oralcare.png" loading="lazy" width="80" alt="A tooth with a checkmark." class="amenities-icon" />
                </div>
                <div className="iconNameBox d-flex align-items-center ps-3 fs-5 fw-bold">
                  Bespoke Oral Care Amenities
                </div>
              </div>
            </div>      
          </div>
        </div>
      </div>

      <div className="patientSafety mt-5">
        <h1 className="text-center mb-5 divider pb-2" style={{ fontSize: "50px", position: "relative" }} >A Legacy of Exceptional Care
          <span className="underline"></span>
        </h1>
        <Testimonial />
      </div>
      <div className="FAQSection">
        <FAQ />
      </div>
    </>
  );
};

export default Home;
