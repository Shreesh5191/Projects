import React, { useEffect, useState } from 'react';
import Aheader from '../Component/Aheader';
import Afooter from '../Component/Afooter';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Manage_Services() {

 const redirect = useNavigate();
  
    const addser = () => {
        redirect('/add_services')
   }

    //service usestate
    const [data, setData] = useState([]);
    
    //categoery usestate
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchServices();  
        fetchCategories();
    }, []); 
     
    //service fatch code start
    const fetchServices = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/service`);
            setData(res.data);
        } catch (error) {
            toast.error('Error fetching services');
        }
    };
  
    //categories fatch code start
    const fetchCategories = async () => {
        try {
            const res = await axios.get('http://localhost:3000/categories');
            setCategories(res.data);
            
        } catch (error) {
            toast.error('Error fetching categories');
        }
    };

    //service delete code start
    const deleteService = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/service/${id}`);
            toast.success('Service deleted successfully');
            fetchServices();
        } catch (error) {
            toast.error('Error deleting service');
        }
    };
    

    //service edit code start
    const [form, setForm] = useState({
        cat_id: "",
        service_name: "",
        description: "",
        main_price: "",
        dis_price: "",
        service_img: ""
    });

    const changeHandel = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form);
    };

    const editServ = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3000/service/${id}`);

            setForm(response.data);
            document.getElementById('myModal').style.display = "block";
        } catch (error) {
            toast.error('Error fetching service details');
        }
    };

    const sersubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:3000/service/${form.id}`, form);
            // Clear the form after submission
            setForm({
                id: "",
                cat_id: "",
                service_name: "",
                description: "",
                main_price: "",
                dis_price: "",
                service_img: ""
            });
            // Hide the modal after successful update
            document.getElementById('myModal').style.display = "none";
            toast.success('Service updated successfully');
            fetchServices();
        } catch (error) {
            toast.error('Error updating service');
        }
    }
    return (
        <div>
            <Aheader title={"Manage Service"} />
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bg-light p-lg-5">
                            <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Manage Services </h6>
                            <button className='btn btn-info ml-5' onClick={addser}  style={{ float: 'right', marginRight: '50px' }}>Add Services</button>
                                <h1 className="mb-4">Manage Services</h1>
                               
                                <table className="table">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Id</th>
                                            <th>Category Id</th>
                                            <th>Service Name</th>
                                            <th>Main Price</th>
                                            <th>Discount Price</th>
                                            <th>Description</th>
                                            <th>Service Image</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.map((value) => (
                                            <tr key={value.id}>
                                                <td>{value.id}</td>
                                                <td>{value.cat_id}</td>
                                                <td>{value.service_name}</td>
                                                <td>{value.main_price}</td>
                                                <td>{value.dis_price}</td>
                                                <td>{value.description}</td>
                                                <td><img src={value.service_img} alt="" width={50} /></td>
                                                <td>
                                                    <button className='btn btn-info mr-2'   data-toggle="modal" data-target="#myModal"  onClick={() => editServ(value.id)} >Edit</button>
                                                    <button className='btn btn-danger' onClick={() => deleteService(value.id)}>Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div className="modal" id="myModal">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h4 className="modal-title">Edit Service</h4>
                                                <button type="button" className="close" data-dismiss="modal">×</button>
                                            </div>
                                            <div className="modal-body">
                                                <form method='post'  name="sentMessage" id="contactForm" >
                                                    <div className="form-row">
                                                        <div className="col-sm-12 control-group">
                                                         
                                                            <select name="cat_id" onChange={changeHandel} value={form.cat_id} className='form-control border-0'>
                                                                <option value="" selected>----select Categories----</option>
                                                                {
                                                                categories && categories.map((category) => (

                                                                    <option key={category.id} value={category.id}>{category.title}</option>
                                                                ))
                                                                }
                                                            </select>
                                                            <p className="help-block text-danger" />
                                                        </div>
                                                        <div className="col-sm-12 control-group">
                                                            <input onChange={changeHandel} value={form.service_name} name="service_name" type="text" className="form-control border-0 p-4" placeholder="Service Name"  />
                                                            <p className="help-block text-danger" />
                                                        </div>
                                                       
                                                        <div className="col-sm-12 control-group">
                                                            <input onChange={changeHandel} value={form.main_price} name="main_price" type="number" className="form-control border-0 p-4" placeholder="Main Price" />
                                                            <p className="help-block text-danger" />
                                                        </div>
                                                        <div className="col-sm-12 control-group">
                                                            <input onChange={changeHandel} value={form.dis_price} name="dis_price" type="number" className="form-control border-0 p-4" placeholder="Discount Price"  />
                                                            <p className="help-block text-danger" />
                                                        </div>
                                                        <div className="col-sm-12 control-group">
                                                            <input onChange={changeHandel} value={form.description} name="description" type="text" className="form-control border-0 p-4" placeholder="Description"  />
                                                            <p className="help-block text-danger" />
                                                        </div>
                                                        <div className="col-sm-12 control-group">
                                                            <input onChange={changeHandel} value={form.service_img} name="ser_img" type="url" className="form-control border-0 p-4" placeholder="Service Image URL" />
                                                            <p className="help-block text-danger" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-primary py-3 px-4" onClick={sersubmit}    type="submit" id="sendMessageButton">Submit</button>
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
    );
}

export default Manage_Services;
