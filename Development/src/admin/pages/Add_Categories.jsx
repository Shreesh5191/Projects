import React, { useState } from 'react'
import Aheader from '../Component/Aheader'
import Afooter from '../Component/Afooter'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


function Add_Categories() {

    // this Hooks used to redireact other page
    const navigate = useNavigate();

    const gotoAddcat = () => {
      navigate('/Manage_Categories');
    }

    const [form ,setform] = useState ({

        title : "",
        cat_img : ""
    })

    const changehandle = (e) => {
        setform({...form,id : new Date().getMilliseconds().toString(),[e.target.name]: e.target.value});
        console.log(form);
    }

    function validation() {
        let ans = true;
        if (form.title == "") {
            toast.error("Categories Image Field is Required");
            ans = false;
            return false;
        }
        if (form.cat_img == "") {
            toast.error("Categories image Field is Required");
            ans = false;
            return false;
        }
        return ans;
    }

    const submithandle = async (e) => {
        e.preventDefault();
      if(validation()){
        const res = await axios.post(`http://localhost:3000/categories`, form);
        setform({ ...form, title : "", cat_img: "" });
        toast.success('Categories Add success');
      }
    }

      
    return (
        <div>
            <Aheader title={"Add Categories"} />
            <div className="container-fluid" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bg-light  p-lg-5 ">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Categories</h6>
                                <button className='btn btn-info ml-5' onClick={gotoAddcat}  style={{ float: 'right', marginRight: '50px' }}>view categories</button>
                                
                                <h1 className="mb-4">Add Categories</h1>
                            
                                <form   method= 'post' onSubmit={submithandle} name="sentMessage" id="contactForm">
                                    <div className="form-row">
                                        <div className="col-sm-12 control-group">
                                            <input type="text" onChange={changehandle} value={form.title} className="form-control border-0 p-4" name='title' id="categoryname" placeholder="Your Category Name" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="text" onChange={changehandle}  value={form.cat_img} className="form-control border-0 p-4" name='cat_img' id="categoryname" placeholder="Your Category Image" />
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

export default Add_Categories