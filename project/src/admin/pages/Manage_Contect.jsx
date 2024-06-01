import React, { useEffect, useState } from 'react'
import Aheader from '../Component/Aheader'
import Afooter from '../Component/Afooter'
import axios from 'axios';
import { getValue } from '@testing-library/user-event/dist/utils';
import { toast } from 'react-toastify';

function Manage_Contect() {

    const [data , setdata] = useState([]);

     useEffect(()=>{
        contactfetch()
     })
    const contactfetch = async () => {
        const res = await axios.get(`http://localhost:3000/contactus`);
        setdata(res.data);
    }

    const deletecontact = async (id) => {
        const res = await axios.delete(`http://localhost:3000/contactus/${id}`)
        toast.success('This Contact Delete SuccessFully')
    }

  return (
    <div>
        <Aheader title={"Contect"}/>
         < div className="container-fluid" >
                <div className="container">
                    <div className="row">
                        <div className=" col-lg-12 ">
                            <div className="bg-light  p-lg-5">
                                {/* <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Contact</h6>   */}
                                <h1 className="mb-4">Manage Contect</h1>
                                <div id="success" />
                                <table className="table">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>name</th>
                                            <th>Email</th>
                                            <th>Subject</th>
                                            <th>Message</th>
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
                                                <td>{getValue.subject}</td>
                                                <td>{getValue.message}</td>
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

export default Manage_Contect