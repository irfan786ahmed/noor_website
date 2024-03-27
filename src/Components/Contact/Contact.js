import React from 'react';
import "./Contact.css"
import Header from '../Header/Header';


const Contact = () => {
  return (
    <>
      <Header />
      <section className="contact-page-sec">
        <div className="container">
          <div className="row">
            {/* Contact Info */}
            <div className="col-md-4">
              <div className="contact-info">
                {/* Address */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-map-marked"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>Address</h2>
                    <span>Nazirabad , Near Noor Diagnostic Centres </span>
                    <span>Jaunpur Road , Shahganj Jaunpur 223101</span>
                  </div>
                </div>
                {/* Email */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>E-mail</h2>
                    <span>noordentalhospital223101@gmail.com</span>
                  </div>
                </div>
                {/* Office Time */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>Office Time</h2>
                    <span>10:00 am - 08.00 pm</span>
                    <span>Lunch Time :- 03.00 pm - 04.00 pm</span>
                    <span>Thursday Off</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-8">
              <div className="contact-page-form">
                <h2>Get in Touch</h2>
                <form action="https://formspree.io/f/xnqezjbn" method="POST">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input type="text" placeholder="Your Name" name="name" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input type="email" placeholder="E-mail" name="email" required />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input type="text" placeholder="Phone Number" name="phone" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input type="text" placeholder="Problem Duration" name="problem duration" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                      <label for="Preferred Date">Preferred Date</label>
                        <input type="date" placeholder="Preferred Date" name="date" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                      <label for="Preferred Time">Preferred Time</label>
                        <input type="time" placeholder="Preferred Time" name="time" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                      <label for="reason">Reason for Appointment:</label>
                        <select id="reason" name="reason" required>
                          <option value="" selected disabled>Select</option>
                          <option value="Regular checkup">Regular checkup</option>
                          <option value="Cleaning">Cleaning</option>
                          <option value="Toothache">Toothache</option>
                          <option value="Cavity filling">Cavity filling</option>
                          <option value="Orthodontic consultation">Orthodontic consultation</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 message-input">
                      <div className="single-input-field">
                        <textarea placeholder="Describe about your problem" name="message"></textarea>
                      </div>
                    </div>
                    <div className="single-input-fieldsbtn">
                      <input type="submit" value="Submit Appointment Request" />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Map */}
            <div className="col-md-4">
              <div className="contact-page-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14339.039669640479!2d82.6828952!3d26.0414103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399045980b5a908d%3A0xa0468cc44d7f103b!2sNoor%20Diagnostic%20Center!5e0!3m2!1sen!2sin!4v1707927099900!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
