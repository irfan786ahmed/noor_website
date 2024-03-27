import React from 'react'
import Header from '../Header/Header'
import Carousel from '../Home/Carousel'

const AboutUs = () => {
    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-8">
                        <h1>About Us</h1>
                        <h5>Nurturing Healthy Smiles , Building Lasting Trust</h5>
                        <p>Welcome to Noor Dental Hospital, where your oral health and radiant smiles are our top priorities. Established with a commitment to excellence, Noor Dental Hospital is a leading institution dedicated to providing comprehensive and compassionate dental care.</p>
                        <h4>Our Mission</h4>
                        <p>
                            At Noor Dental Hospital, we strive to deliver the highest quality dental services in a patient-centered environment. Our mission is to enhance and preserve the oral health of our community through personalized care and cutting-edge treatments.

                            Our team of experienced and skilled dental professionals is passionate about your well-being. From our seasoned dentists to our friendly support staff, everyone at Noor Dental Hospital is committed to making your dental experience positive and comfortable.

                            Equipped with the latest technology and modern facilities, Noor Dental Hospital ensures that you receive advanced dental treatments. We prioritize your safety and well-being by maintaining strict hygiene standards and utilizing state-of-the-art equipment.
                        </p>
                        <div className="row">
                            <div className="col-lg-4 text-center text-bold fw-bold fs-3 mb-4">12+ <br />Years Experience</div>
                            <div className="col-lg-4 text-center text-bold fw-bold fs-3 mb-4">4.8 <br /> Rating</div>
                            <div className="col-lg-4 text-center text-bold fw-bold fs-3">200+ <br /> Operations</div>

                        </div>
                        <h2 className='mt-5'>Our Patient Centric Approach</h2>
                        <p>A "Patient-Centric Approach" in the context of a dental hospital refers to a philosophy and methodology that places the patient at the core of all decision-making and care processes. It's about tailoring dental services to meet the unique needs, preferences, and concerns of each individual patient.

                            We recognize that your dental needs are as individual as your smile. Our experienced team takes the time to listen and understand your concerns, goals, and medical history. This information is the foundation for creating personalized care plans that address your specific oral health requirements and more.</p>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-evenly">
                        <div className="ovalBox" style={{ width: "90%", height: "600px", overflow: "hidden", borderRadius: "180px" }}>
                            <video
                                src="/teeth2.mp4"
                                width="100%"
                                height="100%"
                                loop
                                autoPlay
                                muted
                                style={{ objectFit: "cover" ,margin:"0 auto"}}
                            ></video>
                        </div>
                        {/* <div className="ovalBox" style={{ width: "170px", height: "400px", marginTop: "90px" }}>
                            <img src="https://img.freepik.com/free-photo/close-up-dentist-instruments_23-2151042877.jpg?w=360&t=st=1710655126~exp=1710655726~hmac=788811deee9122d9e534a09fccbd7356a364a2403175f720fd881377b1b913a3" alt="" width="100%" height="100%" style={{ borderRadius: "180px" }} />
                        </div> */}
                    </div>
                </div>
            </div>
            <Carousel />



        </>
    )
}

export default AboutUs