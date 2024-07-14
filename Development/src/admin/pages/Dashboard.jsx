import React, { useEffect, useState } from 'react';
import Aheader from '../Component/Aheader';
import Afooter from '../Component/Afooter';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [blog, setBlog] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
    fetchServices();
    fetchBlog();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get('http://localhost:3000/categories');
      setCategories(res.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchServices = async () => {
    try {
      const res = await axios.get('http://localhost:3000/service');
      setServices(res.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const fetchBlog = async () => {
    try {
      const res = await axios.get('http://localhost:3000/blogs');
      setBlog(res.data);
    } catch (error) {
      console.error('Error fetching blog:', error);
    }
  };

  const handleCategoryClick = () => {
    navigate('/manage_categories');
  };

  return (
    <div>
      <Aheader title={"Dashboard"} />
      {/* Dashboard Stats Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card text-center bg-light p-4" onClick={handleCategoryClick} style={{ cursor: 'pointer' }}>
                <div className="card-body">
                  <h3 className="text-primary">Total Categories</h3>
                  <hr />
                  <h6 className="text-uppercase">{categories.length}</h6> {/* Display total categories */}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card text-center bg-light p-4">
                <div className="card-body">
                  <h3 className="text-primary">Total Services</h3>
                  <hr />
                  <h6 className="text-uppercase">{services.length}</h6> {/* Display total services */}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card text-center bg-light p-4">
                <div className="card-body">
                  <h3 className="text-primary">Total Blogs</h3>
                  <hr />
                  <h6 className="text-uppercase">{blog.length}</h6> {/* Display total blogs */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Dashboard Stats End */}
      <Afooter />
    </div>
  );
}

export default Dashboard;
