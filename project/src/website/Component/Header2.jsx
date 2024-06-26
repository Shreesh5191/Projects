import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Header2({ title }) {
    const redirect = useNavigate()

    const logout = () => {
        localStorage.removeItem('uid');
        localStorage.removeItem('uname');
        toast.success('Logout Success');
        redirect('/');
    }
    return (
        <div>
            <div className="container-fluid bg-light d-none d-lg-block">
                <div className="row py-2 px-lg-5">
                    <div className="col-lg-6 text-left mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center">
                            <small><i className="fa fa-phone-alt mr-2" />+012 345 6789</small>
                            <small className="px-3">|</small>
                            <small><i className="fa fa-envelope mr-2" />info@example.com</small>
                        </div>
                    </div>
                    <div className="col-lg-6 text-right">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-primary px-2" href>
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className="text-primary px-2" href>
                                <i className="fab fa-twitter" />
                            </a>
                            <a className="text-primary px-2" href>
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a className="text-primary px-2" href>
                                <i className="fab fa-instagram" />
                            </a>
                            <a className="text-primary pl-2" href>
                                <i className="fab fa-youtube" />contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}

            {/* Navbar Start */}
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
                    <NavLink to="/" className="navbar-brand ml-lg-3">
                    <h1 className="m-0 text-primary title"><span className="text-dark">Rajvi</span> Clinic &amp; Cosmetic</h1>
                    </NavLink>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                        <div className="navbar-nav m-auto py-0">
                            <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                            <NavLink to="/service" className="nav-item nav-link">Services</NavLink>
                            {/* <NavLink to="/price" className="nav-item nav-link">Pricing</NavLink> */}
                            <NavLink to="/team" className="nav-item nav-link">Our Team</NavLink>
                            <NavLink to="/view_blog" className={"nav-item nav-link"}>Blog</NavLink>
                            {/* <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <NavLink to="/appointment" className="dropdown-item">Appointment</NavLink>
                                    <NavLink to="/opening" className="dropdown-item">Open Hours</NavLink>
                                    <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
                                    <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                                </div>
                            </div> */}
                            <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>

                            {(() => {
                                if (localStorage.getItem('uid')) {
                                    return (
                                        <NavLink to="/profile" className="nav-item nav-link">Hi.. {localStorage.getItem('uname')}</NavLink>
                                    )
                                }
                            })()}

                        </div>
                      
                        {(() => {
                            if (localStorage.getItem('uid')) {
                                return (
                                    <a href="javascript:void(0)" onClick={logout} className="btn btn-primary d-none d-lg-block mr-4">Logout</a>
                                )
                            }
                            else {
                                return (
                                    <NavLink to="/login" className="btn btn-primary d-none d-lg-block mr-4">Login</NavLink>
                                )
                            }
                        })()}
                        
                          {(() => {
                            if (!(localStorage.getItem('uid'))) {
                                return (
                                    <NavLink to="/signup" className="btn btn-primary d-none d-lg-block ">Signup</NavLink>
                                )
                            }
                            
                        })()}
                    </div>
                </nav>
            </div>
            {/* Navbar End */}
            {/* Header Start */}
            <div className="jumbotron jumbotron-fluid bg-jumbotron" style={{ marginBottom: 90 }}>
                <div className="container text-center py-5">
                    <h3 className="text-white display-3 mb-4">{title}</h3>
                    <div className="d-inline-flex align-items-center text-white">
                        <p className="m-0"><a className="text-white" href>Home</a></p>
                        <i className="far fa-circle px-3" />
                        <p className="m-0">{title}</p>
                    </div>
                </div>
            </div>
            {/* Header End */}
        </div>
    )
}

export default Header2