import React, { useEffect, useState } from 'react'
import Header2 from '../Component/Header2'
import Footer from '../Component/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { getValue } from '@testing-library/user-event/dist/utils';

function View_service() {
    const { id } = useParams();

    const [data, setdata] = useState();

    useEffect(()=>{
        viewser(); 
    })

    const viewser = async () => {
        const res = await axios.get(`http://localhost:3000/service?cat_id=${id}`);
        setdata(res.data);
    }
    return (
        <>
            <Header2 title={'View Services'} />

            <div>
                {/* Open Hours Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        {
                            data && data.map((value)=> {
                                return(
                                    <div className="row">
                            <div className="col-lg-6" style={{ minHeight: 500 }}>
                                <div className="position-relative h-100">
                                    <img className="position-absolute w-100 h-100" src={value.service_img} style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="col-lg-6 pt-5 pb-lg-5">
                                <div className="hours-text bg-light p-4 p-lg-5 my-lg-5">
                                    <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Open Hours</h6>
                                    <h1 className="mb-4">{value.service_name}</h1>
                                    <p>{value.description}</p>
                                    <ul className="list-inline">
                                        <li className="h6 py-1"><i className="far fa-circle text-primary mr-3" />Main Price : {value.main_price}</li>
                                        <li className="h6 py-1"><i className="far fa-circle text-primary mr-3" />Discount Price : {value.dis_price}</li>
                                        <li className="h6 py-1"><i className="far fa-circle text-primary mr-3" />Sunday : Closed</li>
                                    </ul>
                                    <a href className="btn btn-primary mt-2">Book Now</a>
                                </div>
                            </div>
                        </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* Open Hours End */}
            </div>
            <Footer />
        </>
    )
}

export default View_service