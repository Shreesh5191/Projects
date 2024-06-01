import React, { useEffect, useState } from 'react'
import Aheader from '../Component/Aheader'
import Afooter from '../Component/Afooter'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Manage_Categories() {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch();
    }, []); // Adding an empty dependency array to call fetch only once

    const fetch = async () => {
        const response = await axios.get(`http://localhost:3000/categories`);
        setData(response.data);
    }

    const deleteCat = async (id) => {
        await axios.delete(`http://localhost:3000/categories/${id}`);
        toast("Category deleted successfully");
        fetch(); // Re-fetch data after deletion
    }

    const [form, setForm] = useState({
        title: "",
        cat_img: ""
    })

    const changeHandle = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form)
    }

    const editCat = async (id) => {
        const res = await axios.get(`http://localhost:3000/categories/${id}`);
        console.log(res.data);
        setForm(res.data);
        document.getElementById('myModal').style.display = "block";
    }

    function validation() {
        let ans = true;
        if (form.title === "") {
            toast.error("Category Name Field is Required");
            ans = false;
            return false;
        }
        if (form.cat_img === "") {
            toast.error("Category Image Field is Required");
            ans = false;
            return false;
        }
        return ans;
    }

    const submitHandle = async (e) => {
        e.preventDefault(); // prevent page refresh
        if (validation()) {
            await axios.patch(`http://localhost:3000/categories/${form.id}`, form);
            setForm({ ...form, title: "", cat_img: "" });
            document.getElementById('myModal').style.display = "none";
            toast.success('Category updated successfully'); 
            fetch(); // Re-fetch data after update
        }
    }

    // this Hooks used to redireact other page
    const navigate = useNavigate();

    const handleButtonclick = () => {
        navigate('/Add_Categories');
    }

    return (
        <div>
            <Aheader title={"Categories Management"} />
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bg-light p-lg-5">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Categories</h6>
                                <button className='btn btn-info ml-5' onClick={handleButtonclick} style={{ float: 'right', marginRight: '50px' }}>Add categories</button>
                                <h1 className="mb-4">Manage Categories</h1>
                              
                                <div id="success" />

                                <table className="table">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Id</th>
                                            <th>Title</th>
                                            <th>Image</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data && data.map((value) => {
                                                return (
                                                    <tr key={value.id}>
                                                        <td>{value.id}</td>
                                                        <td>{value.title}</td>
                                                        <td><img src={value.cat_img} alt="" width="50px" /></td>
                                                        <td>
                                                            <button className='btn btn-info mr-2' data-toggle="modal" data-target="#myModal"  onClick={() => editCat(value.id)}>Edit</button>
                                                            <button className='btn btn-danger' onClick={() => deleteCat(value.id)}>Delete</button>
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
                                                <h4 className="modal-title">Edit Category</h4>
                                                <button type="button" className="close" data-dismiss="modal">×</button>
                                            </div>
                                            <div className="modal-body">
                                                <form method='post' name="sentMessage" id="contactForm" noValidate="novalidate">
                                                    <div className="form-row">
                                                        <div className="col-sm-12 control-group">
                                                            <input onChange={changeHandle} value={form.title} name="title" type="text" className="form-control border-0 p-4" id="name" placeholder="Category Name" required="required" data-validation-required-message="Please enter category name" />
                                                            <p className="help-block text-danger" />
                                                        </div>
                                                        <div className="col-sm-12 control-group">
                                                         
                                                            <input onChange={changeHandle} value={form.cat_img} name="cat_img" type="url" className="form-control border-0 p-4" id="cat_img" placeholder="Category Image" required="required" data-validation-required-message="Please enter category image URL" />
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
            </div>
            <Afooter />
        </div>
    )
}

export default Manage_Categories;
