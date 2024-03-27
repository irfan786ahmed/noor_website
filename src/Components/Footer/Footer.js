import React, { useState } from 'react';
import "./Footer.css"
import { useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("")

  const whatsappData = (event) => {
    const newData = event.target.value;
    setData(newData);
  };

  const scrollToTopAndNavigate = (link) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    navigate(link);
  };

  const validatingReview = () => {
    if (data.length <= 0) {
      toast.error('🦄 Feedback cant be empty!', {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
    else {
      toast.success('🦄 Thanks for your valuable feedback!', {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      setData("")

    }
  }
  return (
    <footer className="footer-section mt-5">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta d-flex">
                <div className="d single-cta">
                  <i className="fas fa-map-marker-alt" style={{ fontSize: "35px" }}></i>
                </div>
                <div className="cta-text ps-3">
                  <h4>Find us</h4>
                  <span>Nazirabad Near Noor Diagnostic Center Jaunpur Road Shahganj Jaunpur 223101</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <p className="text-light" style={{ margin: "0", padding: "0" }}>9651204214</p>
                  <p className="text-light" style={{ margin: "0", padding: "0" }}>6393409078</p>
                  <p className='text-light' style={{ margin: "0", padding: "0" }}>9936671236</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>noordentalhospital223101@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <img src="./logoFooter.png" className="img-fluid" alt="logo" />
                </div>
                <div className="footer-text">
                  <p>Your Trusted Source for Exceptional Dentistry, Crafting Healthy and Happy Smiles, Every Visit Counts.</p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a target="_blank" href="https://www.facebook.com/share/xVxWzETiiSnPU5pa/?mibextid=qi2Omg"><i className="fab fa-facebook-f bg-light"></i></a>
                  <a target="_blank" href="https://www.instagram.com/noor_dental_hospital?utm_source=qr&igsh=MXQxaG1uYXRrbWgxeA=="><i className="fab fa-instagram bg-light"></i></a>
                  <a target="_blank" href="#"><i className="fab fa-youtube bg-light"></i></a>
                  <a href="whatsapp://send?text=Hello!&phone=+916393409078"><i className="fab fa-whatsapp bg-light"></i></a>                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3 className='pt-3'>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <p className='text-light' style={{ cursor: "pointer" }} onClick={() => scrollToTopAndNavigate("/home")}>Home</p>
                  </li>
                  <li>
                    <p className='text-light' style={{ cursor: "pointer" }} onClick={() => scrollToTopAndNavigate("/about")}>About Us</p>
                  </li>
                  <li>
                    <p className='text-light' style={{ cursor: "pointer" }} onClick={() => scrollToTopAndNavigate("/services")}>Services</p>
                  </li>
                  <li>
                    <p className='text-light' style={{ cursor: "pointer" }} onClick={() => scrollToTopAndNavigate("/contact")}>Book Appointment</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3 className='pt-3'>Feedback</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>Please leave a valuable feedback of your experience.</p>
                </div>
                <div className="subscribe-form">
                  <input type="text" placeholder="Write a Review" onChange={whatsappData} value={data} />
                  <button onClick={validatingReview}><i className="fab fa-telegram-plane"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>Copyright &copy; 2024 Noor Dental Hospital - All Rights Reserved  </p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </footer>
  );
}

export default Footer;
