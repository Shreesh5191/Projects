import React, { useEffect, useState } from 'react'
import Header2 from '../Component/Header1'
import Footer from '../Component/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

function Edit_profile() {

    const { id } = useParams(); // get id from url which we provided in routes 
    useEffect (() => {
        editprofilegetid();
    },[]);
    const [formvalue, setformvalue] = useState({
        id: "",
        name: "",
        email: "",
        mobile: "",
        img: ""


    })
    const editprofilegetid = async () => {
        const res = await axios.get(`http://localhost:3000/users/${id}`);
        setformvalue(res.data);  // this data function is provide inbulitfuntion / method
    }

    const changehandle = (e) => {
        setformvalue({ ...formvalue,[e.target.name]: e.target.value });
    }

    const redirect = useNavigate();

    const submithandle = async (e) => {
        e.preventDefault();

        const res = await axios.patch(`http://localhost:3000/users/${formvalue.id}`, formvalue);
        setformvalue({ ...formvalue, name: "", email: "", mobile: "", img: "" });
        toast.success('Profile Update success');
        redirect('/profile');
    }

    return (
        <>
            <Header2 title="Edit Profile Here" />

            {/* Contact Start */}
            < div className="container-fluid py-5" >
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6" style={{ minHeight: 500 }}>
                            <div className="position-relative h-100">
                                <iframe className="position-absolute w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5 pb-lg-5">
                            <div className="contact-form bg-light p-4 p-lg-5 my-lg-5">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Signup</h6>
                                <h1 className="mb-4">Edit Profile Here</h1>

                                <form id="edit-profile" method='post' onSubmit={submithandle} >
                                    <div className="form-row">
                                        <div className="col-sm-12 control-group">
                                            <input type="text" className="form-control border-0 p-4" onChange={changehandle} value={formvalue.name} name="name" id="name" placeholder="Your Name" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="email" className="form-control border-0 p-4" onChange={changehandle} value={formvalue.email} name="email" id="email" placeholder="Your Email" />
                                            <p className="help-block text-danger" />
                                        </div>

                                        <div className="col-sm-12 control-group">
                                            <input type="number" className="form-control border-0 p-4" onChange={changehandle} value={formvalue.mobile} name="mobile" id="mobile" placeholder="Your Mobile" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="url" className="form-control border-0 p-4" onChange={changehandle} value={formvalue.img} name="img" id="img" placeholder="Your Image" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>

                                    <div>
                                        <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Save</button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* Contact End */}
            <Footer />
        </>
    )
}

export default Edit_profile