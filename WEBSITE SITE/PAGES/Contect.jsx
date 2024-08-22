import React, { useState } from 'react'
import Header from '../COMMON/Header'
import Footer from '../COMMON/Footer'
import { toast } from 'react-toastify'
import axios from 'axios'

function Contect() {

    const [formvalue , setformvalue]=useState({
        name:"",
        email:"",
        message:"",
        number:"",
       
    },[])

    const changeHandel=(e)=>{
        setformvalue(
            {...formvalue, id: new Date().getMilliseconds().toString(),
                [e.target.name]:e.target.value
             });
        console.log(formvalue);
      }
      function validation() {
        var result = true;
        if (formvalue.name === "") {
          toast.error("Categories Name Field is required !");
          result = false;
          return false;
        }
        if (formvalue.email === "") {
          toast.error("Categories email Field is required !");
          result = false;
          return false;
        }
        if (formvalue.message === "") {
          toast.error("Categories message Field is required !");
          result = false;
          return false;
        }
       
        if (formvalue.number === "") {
          toast.error("Categories number Field is required !");
          result = false;
          return false;
        }
        return result;
      }
      const submitHandle = async(e)=>{
        e.preventDefault();
        if(validation()){
          const res= await axios.post(`http://localhost:3000/contact`,formvalue);
          setformvalue({...formvalue,name:"",email:"",message:"",number:""});
          toast.success("Thanks for contacting us")
        }        
      }
    return (
        <div>
            <Header></Header>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="text-primary text-uppercase">// Contact Us //</h6>
                        <h1 className="mb-5">Contact For Any Query</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="row gy-4">
                                <div className="col-md-4">
                                    <div className="bg-light d-flex flex-column justify-content-center p-4">
                                        <h5 className="text-uppercase">// Booking //</h5>
                                        <p className="m-0"><i className="fa fa-envelope-open text-primary me-2" />book@example.com</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="bg-light d-flex flex-column justify-content-center p-4">
                                        <h5 className="text-uppercase">// General //</h5>
                                        <p className="m-0"><i className="fa fa-envelope-open text-primary me-2" />info@example.com</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="bg-light d-flex flex-column justify-content-center p-4">
                                        <h5 className="text-uppercase">// Technical //</h5>
                                        <p className="m-0"><i className="fa fa-envelope-open text-primary me-2" />tech@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                            <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{ minHeight: 350, border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                        </div>
                        <div className="col-md-6">
                            <div className="wow fadeInUp" data-wow-delay="0.2s">
                                <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                                <form id="request" className="main_form" mathod="post" onSubmit={submitHandle}>
                                <div className="row">
                                  <div className="col-md-6 ">
                                    <input
                                      className="form_control"
                                      placeholder="Your name"
                                      type="text"
                                      value={formvalue.name}
                                      onChange={changeHandel}
                                      name="name"
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <input
                                      className="form_control"
                                      placeholder="email"
                                      type="email"
                                      value={formvalue.email}
                                      onChange={changeHandel}
                                      name="email"
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <input
                                      className="form_control"
                                      placeholder="number"
                                      type="text" maxlength="10"
                                      value={formvalue.number}
                                      onChange={changeHandel}
                                      name="number"
                                    />
                                  </div>
                                 
                                  <div className="col-md-12">
                                    <textarea
                                      style={{ color: "#d0d0cf" }}
                                      className="textarea"
                                      placeholder="Message"
                                      type="type"
                                      name="message"
                                      value={formvalue.message}
                                      onChange={changeHandel}
                                      defaultValue={"message "}
                                    />
                                  </div>
                                  <div className="col-md-12">
                                    <button className="send_btn">Send Now</button>
                                  </div>
                                </div>
                              </form>                         </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}


            <Footer></Footer>
        </div>
    )
}

export default Contect
