import React, { useEffect, useState } from 'react'
import Header2 from '../Component/Header2'
import axios from 'axios'
import { redirect, useNavigate } from 'react-router-dom'
import Footer from '../Component/Footer';

function Profile() {
   const redirect =  useNavigate();
    const [data , setdata] = useState({})


    useEffect(() =>{
        fetch();
    })
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/users/${localStorage.getItem('uid')}`)
        setdata(res.data);
    }
  return (
  <>
  <Header2 title={'Profile Page'}/>


  {/* Open Hours Start */}
  <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-6" style={{ minHeight: 500 }}>
                                <div className="position-relative h-100">
                                    <img className="position-absolute w-100 h-100" src={data.img} style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="col-lg-6 pt-5 pb-lg-5">
                                <div className="hours-text bg-light p-4 p-lg-5 my-lg-5">
                                    <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Profile Manage</h6>
                                    <h1 className="mb-4">{data.name}</h1>
                                    <p>Id:{data.id}</p>
                                    <p>Email:{data.email}</p>
                                    <p>Mobile:{data.mobile}</p>
                                    
                                    <a href="javascript:void(0)" onClick={() =>redirect('/edit-profile/' + data.id)} className="btn btn-primary mt-2">Edit Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Open Hours End */}

         <Footer/>
  </>
  )
}

export default Profile