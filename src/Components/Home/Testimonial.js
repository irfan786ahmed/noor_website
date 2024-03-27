import React from 'react';
import './Testimonial.css'; // Replace with your actual CSS file name

const Testimonial = () => {
    return (
        <div className="outerdiv">
            <div className="innerdiv">
                {/* div1 */}
                <div className="div1 eachdiv">
                    <div className="userdetails">
                        
                        <div className="detbox">
                            <p className="name fw-bold">Dr. GC Chitravanshi</p>
                        </div>
                    </div>
                    <div className="review">
                        <h4>Great Dental Treatment At Noor Dental Hospital</h4>
                        <p>“ The dental care that I received after my recent visit to Noor Dental Hospital in the cases of severe tooth pain was really remarkable. Dr. Afaq Ahmad and the rest of Noor Dental Hospital have exceeded my expectations with quick treatment effectiveness
                            Just after I walked in, the staff proved to be highly professional and also quite interested in my state of health. Dr. Afaq Ahmad carefully evaluated my condition, listened to what I had to say concerning it and clearly described the treatment plan. ”</p>
                    </div>
                </div>
                {/* div2 */}
                <div className="div2 eachdiv">
                    <div className="userdetails">
                        
                        <div className="detbox">
                            <p className="name fw-bold">Anuj</p>
                        </div>
                    </div>
                    <div className="review">
                        <h4>Exceptional Care</h4>
                        <p>“ I was suffering from chronic tooth pain, I visited the Noor Dental Hospital where Dr. Afaq Ahmad offered exceptionally good care".
                        </p>
                    </div>
                </div>
                {/* div3 */}
                <div className="div3 eachdiv">
                    <div className="userdetails">
                        
                        <div className="detbox">
                            <p className="name fw-bold dark">Ronaq</p>
                        </div>
                    </div>
                    <div className="review dark">
                        <h4>Such a life-changing experience. Highly recommended!</h4>
                        <p>“ Our family had a great time at the Noor Dental Hospital, especially with Dr. My children, initially hesitant due to their first dental appointment, were handled with the utmost delicacy. The process was very easy because of the Dr. Naseem Ahmad skill in pediatric dentistry. And Noor Dental Hospital really is an ideal place for the parents in need of compassionate and competent dental care services for their children. ”</p>
                    </div>
                </div>
                {/* div4 */}
                <div className="div4 eachdiv">
                    <div className="userdetails">
                        
                        <div className="detbox">
                            <p className="name fw-bold dark">Usman</p>
                        </div>
                    </div>
                    <div className="review dark">
                        <h4>An overall wonderful and rewarding experience</h4>
                        <p>“ Thank you Ateek Ansari for the wonderful experience!.Mere daatho ka ilaaz itne ache tarike se karne ke liye. Thanks once again   ”</p>
                    </div>
                </div>
                {/* div5 */}
                <div className="div5 eachdiv">
                    <div className="userdetails">
                        
                        <div className="detbox">
                            <p className="name fw-bold">Shahid Hussain</p>
                        </div>
                    </div>
                    <div className="review">
                        <h4>Efficient Dental Assistance.</h4>
                        <p>“"main apane danto ke ilaaz ke liye noor dental hospital aur dr. naseem ahmad ko dhanyavaad dena chahata hoon. main pahale ghabara gaya tha, lekin dr. naseem ne apanee friendly nature se ise aasaan bana diya. Hospital bahut hi acha hai, aur dr naseem vaastav mein apane kaam mein bahut maahir hai. yadi aapako danto ke ilaaz ki jarurat hai, to main noor dental hospital hi suggest karata hoon."”</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
