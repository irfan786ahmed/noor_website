import React from 'react'
import "./Doctors.css"

const Doctors = () => {
    return (
        <>
            <p className="text-center fontSizeChange mt-5" style={{ fontSize: "65px", fontWeight: "800", color: "#5e529c" }}>Meet Our Experienced Dental Professionals</p>
            <p className="text-center fs-3" style={{ fontWeight: "400", color: "#5e529c" }}> Empowering Patients Through Knowledgeable and Compassionate Care</p>
            <div className="counterTops__container pt-1" style={{ paddingBottom: "70px", boxShadow: "0px 0px 50px #9a8aeb0c" }}>
                <div className='galleryBody'>
                    <div className="card" style={{ '--clr': '#009688' }}>
                        <div className="img-box">
                            <img
                                src="./Images/afaq.jpg"
                                alt="Roma Imperial"
                            />
                        </div>
                        <div className="content">
                            <h2 style={{ color: "#5e529c" }}>Dr. Afaq Ahmad</h2>
                            <div className='fs-6 fw-bold'>(BDS , MDS)</div>
                            <p className='fw-bold'>Prosthodontics & Implantologist</p>
                            <p>

                                Experienced dentist with 10 years of providing excellent patient care.<br />Proficient in RCTs , Crown and Bridge,Implants ,Dentures , Extraction , Gum Surgery , Smile Design ,Jaw Fracture etc
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{ '--clr': '#FF3E7F' }}>
                        <div className="img-box">
                            <img
                                src="./Images/naseem.png"
                                alt="naseem"
                            />
                        </div>
                        <div className="content">
                            <h2 style={{ color: "#5e529c" }}>Dr. Naseem Ahmad</h2>
                            <div className='fs-6 fw-bold'>(B.Sc , BDS)</div>
                            <p className='fw-bold'>General Dentist</p>
                            <p>
                            Established dentist with five years of dedicated patient care experience.Well-versed in a comprehensive range of dental procedures including RCTs , Crown and Bridge,Orthodontics tratment (Braces) , Dentures , Extraction , Flap Surgery , Scaling , Teeth Whitening And Polishing etc.
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{ '--clr': '#03A9F4' }}>
                        <div className="img-box">
                            <img
                                src="./Images/ateek.png"
                                alt="ateek"
                            />
                        </div>
                        <div className="content">
                            <h2 style={{ color: "#5e529c" }}>Dr. Ateek Ansari</h2>
                            <div className="fw-bold fs-6">(B.D.S)</div>
                            <p className='fw-bold'>General Dentist</p>
                            <p>
                                Experienced dentist with a proven track record of 5 years delivering exceptional patient care.<br />Skilled in root canal treatments (RCTs), crown and bridge work, Orhodontic Treatment (Braces) , Scaling , Teeth Filling , Polishing , Extraction and more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Doctors