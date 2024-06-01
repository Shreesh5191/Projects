import React, { useEffect, useState } from 'react'
import Afooter from '../Component/Afooter'
import Aheader from '../Component/Aheader'
import axios from 'axios';
import { toast } from 'react-toastify';

function Manage_Customer() {
    const [data , setdata] = useState([]);

    useEffect(()=>{
        fetchuser()
    })

    const fetchuser = async () => {
        const res = await axios.get('http://localhost:3000/users');
        setdata(res.data);
    }
    const deletecontact = async (id) => {
        const res = await axios.delete(`http://localhost:3000/users/${id}`);
        toast.success("User Delete SuccessFully");
    }
  return (
    <div>
        <Aheader title={"Customer"}/>
         < div className="container-fluid" >
                <div className="container">
                    <div className="row">
                        <div className=" col-lg-12 ">
                            <div className="bg-light  p-lg-5">
                                {/* <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Contact</h6>   */}
                                <h1 className="mb-4">Manage Customer</h1>
                                <div id="success" />
                                <table className="table">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>name</th>
                                            <th>Email</th>
                                            <th>Mobile</th>
                                            <th>Image</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {
                                        data && data.map((getValue)=>{

                                            return(
                                                <tr>
                                                <td>{getValue.name}</td>
                                                <td>{getValue.email}</td>
                                                <td>{getValue.mobile}</td>
                                                <td><img src={getValue.img} width={50} alt="" /></td>
                                                <td>
                                                  
                                                    <button className='btn btn-danger' onClick={()=> deletecontact(getValue.id)}>Delete</button>
                                                </td>
                                            </tr>
                                            )
                                        })
                                       }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Afooter/>
    </div>
  )
}

export default Manage_Customer