import React, { useState } from 'react'
import Aheader from '../Component/Aheader'
import Afooter from '../Component/Afooter'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Add_Blog() {

    const redirect = useNavigate();
     
    const viewblog = () => {
        redirect('/manage_blog')
    }
    
    const [form, setform] = useState({
        title: "",
        description: "",
        blog_img: ""
    })

    const changehandle = (e) => {
        setform({ ...form, id: new Date().getMilliseconds().toString(), [e.target.name]: e.target.value });
        console.log(form);
    }

    function validation() {
        let ans = true;
        if (form.title == "") {
            toast.error("title is Required");
            ans = false;
            return false;
        }
        if (form.description == "") {
            toast.error("description is Required");
            ans = false;
            return false;
        }
        if (form.blog_img == "") {
            toast.error("blog image is Required");
            ans = false;
            return false;
        }
        return ans;
    }

    const submitdata = async (e) => {

        e.preventDefault();
        if (validation()) {
            const response = await axios.post(`http://localhost:3000/blogs`, form);
            setform({ ...form, title: "", description: "", blog_img: "" });
            toast.success('blog add successfully');
        }

    }

 
    return (
        <div>
            <Aheader title={"Add Blog"} />
            <div className="container-fluid" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bg-light  p-lg-5 ">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Blog</h6>
                                <button className='btn btn-info ml-5' onClick={viewblog}  style={{ float: 'right', marginRight: '50px' }}>View Blog</button>
                                <h1 className="mb-4">Add Blog</h1>
                                <div id="success" />
                                <form method='post' onSubmit={submitdata} name="sentMessage" id="contactForm">
                                    <div className="form-row">
                                        <div className="col-sm-12 control-group">
                                            <input type="text" onChange={changehandle} value={form.title} className="form-control border-0 p-4" name='title' id="title" placeholder="Your title" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="text" onChange={changehandle} value={form.description} className="form-control border-0 p-4" name='description' id="description" placeholder="Your description" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="text" onChange={changehandle} value={form.blog_img} className="form-control border-0 p-4" name='blog_img' id="blog_img" placeholder="Your Blog image" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Afooter />
        </div>
    )
}

export default Add_Blog