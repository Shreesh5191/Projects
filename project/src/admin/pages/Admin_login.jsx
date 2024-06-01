import { logDOM } from '@testing-library/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Admin_login() {

    const redirect = useNavigate();
    useEffect (() => {
        if(localStorage.getItem('aid')){
            redirect('/dashboard');
        }
    })
    const [form, setform] = useState({
        email: "",
        password: ""
    });

    const changehandle = (e) => {
        setform({ ...form, id: new Date().getMilliseconds().toString(), [e.target.name]: e.target.value });
        console.log(form);

    }

    function validation() {
        let ans = true;
        if (form.email == "") {
            toast.error("Email Filed is Required");
            ans = false;
            return false;
        }
        if (form.password == "") {
            toast.error("Password Filed is Required");
            ans = false;
            return false;
        }
        return ans;
    }
    const submitHandle = async (e) => {
        e.preventDefault();

        if (validation()) {
            const res = await axios.get(`http://localhost:3000/admin_login?email=${form.email}`);
            if (res.data.length > 0) {
                if (res.data[0].password == form.password) {
                    // session 
                    localStorage.setItem('aid', res.data[0].id);
                    localStorage.setItem('aname', res.data[0].name);

                    toast.success('Login Succees');
                    redirect('/dashboard');
                }
                else {
                    toast.error('Password incorrect!');
                }
            }
            else {
                toast.error('Email does nor exist !');
            }

        }
    }
    return (

        <div>

            {/* Contact Start */}
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pt-5 pb-lg-5">
                            <div className="contact-form bg-light p-4 p-lg-5 my-lg-5">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Admin Login</h6>
                                <h1 className="mb-4">Admin Login</h1>

                                <form method='post' onSubmit={submitHandle} name="sentMessage" >
                                    <div className="control-group">
                                        <input type="email" onChange={changehandle} value={form.email} className="form-control border-0 p-4" id="email" name='email' placeholder="Your Email" />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input type="text" onChange={changehandle} value={form.password} className="form-control border-0 p-4" id="subject" name='password' placeholder=" Your Password" />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">
                                            Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}

            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary back-to-top"><i className="fa fa-angle-double-up" /></a>
        </div>

    );
}

export default Admin_login;
