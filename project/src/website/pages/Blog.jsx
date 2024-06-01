import React, { useEffect, useState } from 'react';
import Header2 from '../Component/Header2';
import Footer from '../Component/Footer';
import axios from 'axios';

function Blog() {
    const [data, setData] = useState([]);

    useEffect(() => {
        blogDataGet();
    }, []); // Add an empty dependency array to ensure it runs only once

    const blogDataGet = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/blogs`);
            setData(res.data);
        } catch (error) {
            console.error('Error fetching blog data:', error);
        }
    };

    return (
        <>
            <Header2 title={'View Blog'} />
            <div>
                {/* Blog Posts Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        {data && data.map((blog, index) => (
                            <div className="row mb-5" key={index}>
                                <div className="col-lg-6" style={{ minHeight: 500 }}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute w-100 h-100" src={blog.blog_img} style={{ objectFit: 'cover' }} alt={blog.title} />
                                    </div>
                                </div>
                                <div className="col-lg-6 pt-5 pb-lg-5">
                                    <div className="hours-text bg-light p-4 p-lg-5 my-lg-5">
                                        <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Blog</h6>
                                        <h1 className="mb-4">{blog.title}</h1>
                                        <p>{blog.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Blog Posts End */}
            </div>
            <Footer />
        </>
    );
}

export default Blog;
