import React,{ useEffect, useState } from 'react'
import Aheader from '../Component/Aheader'
import Afooter from '../Component/Afooter'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Manage_Blog() {


    const redirect = useNavigate();

    const Addblog = () => {
        redirect('/add_blog');
    }

    // data view code start 
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch();
    });

   const fetch = async()=> {
     const response = await axios.get(`http://localhost:3000/blogs`);
     
     setData(response.data);
   }
//   data view code end 

// data delete code start 
    const deletedata = async(id ) => {
        const response = await axios.delete(`http://localhost:3000/blogs/${id}`);
    toast.success('blog delete successfully');
    }

    //edit data code start

    const [form, setForm] = useState({
        title: "",
        description: "",
        blog_img: ""
    })


    const edithandel = async (id) => {
        const res = await axios.get(`http://localhost:3000/blogs/${id}`);
        console.log(res.data);
        setForm(res.data);
        document.getElementById('myModal').style.display = "block";
    }

  
    const changeHandle = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form);
    }

    function validation() {
        let ans = true;
        if (form.title == "") {
            toast.error("Blogs Title Required ");
            ans = false;
            return false;
        }
        if (form.description == "") {
            toast.error("Blogs description Required");
            ans = false;
            return false;
        }
        if (form.blog_img == "") {
            toast.error("Blogs image Required");
            ans = false;
            return false;
        }
        return ans;
    }
    const submitHandle = async (e) => {
        e.preventDefault(); // not page refresh
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/blogs/${form.id}`, form);
            setForm({ ...form,  title: "", description: "",  blog_img: "" });
            document.getElementById('myModal').style.display="none";
            toast.success('Blogs Update success'); 
        }
    }

  return (
    <div>
        <Aheader title={"Manage Blog"}/>
          < div className="container-fluid" >
                <div className="container">
                    <div className="row">
                        <div className=" col-lg-12 ">
                            <div className="bg-light  p-lg-5">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Blog</h6>
                                <button className='btn btn-info ml-5' onClick={Addblog}  style={{ float: 'right', marginRight: '50px' }}>Add Blog</button>
                                <h1 className="mb-4">Manage Blog</h1>
                              
             
                                <table className="table">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>id</th>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>blogimg</th>
                                            <th>Action</th>
                                          
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {
                                        data && data.map((value) => {

                                            return(
                                        <tr>
                                            <td>{value.id}</td>
                                            <td>{value.title}</td>
                                            <td>{value.description}</td>
                                            <td><img src={value.blog_img} width="50px" /></td>
                                            
                                            <td>
                                                <button className='btn btn-info mr-2'  data-toggle="modal" data-target="#myModal"  onClick={() => edithandel(value.id)}>Edit</button>
                                                <button className='btn btn-danger' onClick={()=>deletedata(value.id)}>Delete</button>
                                            </td>
                                        </tr>
                                       
                                            )
                                        })
                                       }
                                       
                                    </tbody>
                                </table>

                                <div className="modal" id="myModal">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h4 className="modal-title">Edit Blog</h4>
                                                <button type="button" className="close" data-dismiss="modal">×</button>
                                            </div>
                                            <div className="modal-body">
                                                <form method='post' name="sentMessage" id="contactForm" noValidate="novalidate">
                                                    <div className="form-row">
                                                        <div className="col-sm-12 control-group">
                                                            <input onChange={changeHandle} value={form.title} name="title" type="text" className="form-control border-0 p-4" id="name" placeholder="Blog Name" required="required" data-validation-required-message="Please enter category name" />
                                                            <p className="help-block text-danger" />
                                                        </div>
                                                        <div className="col-sm-12 control-group">
                                                         
                                                            <input onChange={changeHandle} value={form.description} name="description" type="text" className="form-control border-0 p-4" id="cat_img" placeholder="Blog description" required="required" data-validation-required-message="Please enter category image URL" />
                                                            <p className="help-block text-danger" />
                                                        </div>
                                                        <div className="col-sm-12 control-group">
                                                         
                                                            <input onChange={changeHandle} value={form.blog_img} name="blog_img" type="url" className="form-control border-0 p-4" id="cat_img" placeholder="Blog Image" required="required" data-validation-required-message="Please enter category image URL" />
                                                            <p className="help-block text-danger" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-primary py-3 px-4" onClick={submitHandle} type="submit" id="sendMessageButton">Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Afooter/>
    </div>
  )
}

export default Manage_Blog