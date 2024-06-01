import React, { useEffect, useState } from 'react'
import Aheader from '../Component/Aheader'
import Afooter from '../Component/Afooter'
import axios from 'axios';
import { toast } from 'react-toastify';
import {  useNavigate } from 'react-router-dom';

function Add_Services() {

const redirect = useNavigate();
    const gotoAddser = () => {
        redirect('/manage_services')
    }

const [data , setdata] = useState([]);
useEffect(() => {
    fetch();
})

const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/categories`);
    setdata(res.data);
}

const [form , setform] = useState({
    cat_id: "",
    service_name: "",
    description: "",
    main_price: "",
    dis_price: "",
    service_img: ""
})

const changeHandel =  (e) => {
 setform({...form, id: new Date().getMilliseconds().toString(), [e.target.name]:e.target.value});
}

const submithandle = async (e) => {
    e.preventDefault();
    const res = await axios.post(`http://localhost:3000/service`,form)
    setform ({...form,  
    service_name: "",
    description: "",
    main_price: "",
    dis_price: "",
    service_img: ""});
    toast.success("Service add Successfully")
}
  return (
    <div>
        <Aheader title={"Add services"}/>
   <div className="container-fluid" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bg-light  p-lg-5 ">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Services</h6>
                                <button className='btn btn-info ml-5' onClick={gotoAddser}  style={{ float: 'right', marginRight: '50px' }}>view Services</button>
                                <h1 className="mb-4">Add Services</h1>
                                <div id="success" />
                                <form  method= 'post' onSubmit={submithandle} name="sentMessage" id="contactForm" noValidate="novalidate">
                                    <div className="form-row">
                                        <div className="col-sm-12 control-group">
                                           <select name="cat_id"  onChange={changeHandel} value={form.cat_id} id="" className='form-control border-0'>
                                            <option value="" selected>----select Categories----</option>
                                            {
                                                      data && data.map((value) => {
                                                        return(
                                                            <option value={value.id}>{value.title}</option>  
                                                        )
                                                      })
                                            }
                                           </select>
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="text"  onChange={changeHandel}  value={form.service_name} className="form-control border-0 p-4"name='service_name' id="categoryname" placeholder="Your Services Name"  />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="text" onChange={changeHandel} value={form.description} className="form-control border-0 p-4"name='description' id="categoryname" placeholder="Your description"  />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="text" onChange={changeHandel} value={form.main_price} className="form-control border-0 p-4"name='main_price' id="categoryname" placeholder="Your Main pirce"  />
                                            <p className="help-block text-danger" />
                                        
                                            <input type="text" onChange={changeHandel} value={form.dis_price} className="form-control border-0 p-4"name='dis_price' id="categoryname" placeholder="Your discount price"  />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="text" onChange={changeHandel} value={form.service_img} className="form-control border-0 p-4"name='service_img' id="categoryname" placeholder="Your Services Image"  />
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
            <Afooter/>
    </div>
  )
}

export default Add_Services