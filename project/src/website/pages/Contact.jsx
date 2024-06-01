import React, { useState } from 'react'
import Header2 from '../Component/Header2'
import Footer from '../Component/Footer'
import axios from 'axios'
import { toast } from 'react-toastify'

function Contact() {
   
  const [form , setform] = useState({
    name : "",
    email : "",
    subject : "",
    message : ""
  })

  const changehandle = (e) => {
    setform({...form,id : new Date().getMilliseconds().toString(),[e.target.name]:e.target.value})
    // console.log(form);

  } 

  function validation(){
    let ans = true;
    if (form.name === "") {
        toast.error("Please enter your name");
        ans = false;
    }
    if(form.email === ""){
        toast.error("Please enter your email");
        ans = false;
    }
    if(form.subject === ""){
        toast.error("Please enter your subject");
        ans = false;
    }
    if(form.message === ""){
        toast.error("Please enter your message");
        ans = false;
    }
    return ans; // Ensure that the validation function returns a boolean value
}

const submithendle = async (e) => {
    e.preventDefault();
    if (validation()) {
        try {
            const res = await axios.post(`http://localhost:3000/contactus`, { ...form, id: new Date().getMilliseconds().toString() });
            setform({ name: "", email: "", subject: "", message: "" });
            toast.success("Inquiry sent successfully");
        } catch (error) {
            toast.error("Error sending inquiry");
        }
    }
}
  return (
    <div>
      <Header2 title="Contect Us"/>
      {/* Contact Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6" style={{ minHeight: 500 }}>
              <div className="position-relative h-100">
                <iframe className="position-absolute w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
              </div>
            </div>
            <div className="col-lg-6 pt-5 pb-lg-5">
              <div className="contact-form bg-light p-4 p-lg-5 my-lg-5">
                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Contact</h6>
                <h1 className="mb-4">Contact For Any Query</h1>
                <div id="success" />
                <form onSubmit={submithendle}  method='post' name="sentMessage" id="contactForm" noValidate="novalidate">
                  <div className="form-row">
                    <div className="col-sm-6 control-group">
                      <input type="text"  onChange={changehandle}  value={form.name}  name='name' className="form-control border-0 p-4" id="name" placeholder="Your Name" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="col-sm-6 control-group">
                      <input type="email" onChange={changehandle} value={form.email}  name='email' className="form-control border-0 p-4" id="email" />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <input type="text"  onChange={changehandle}  value={form.subject} name='subject'className="form-control border-0 p-4" id="subject" placeholder="Subject" />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <textarea onChange={changehandle} value={form.message}  name='message' className="form-control border-0 py-3 px-4" rows={3} id="message" placeholder="Message"  defaultValue={""} />
                    <p className="help-block text-danger" />
                  </div>
                  <div>
                    <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Send
                      Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
     <Footer/>
    </div>
  )
}

export default Contact