import React from 'react'
import { NavLink } from 'react-router-dom'

function Afooter() {
    return (
        <div>
            <div className="footer container-fluid position-relative bg-dark py-5" style={{ marginTop: 90 }}>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-6 pr-lg-5 mb-5">
                            <a href="index.html" className="navbar-brand">
                                <h1 className="mb-3 text-white"><span className="text-primary">Rajvi</span> Clinic &amp; Cosmetic</h1>
                            </a>
                            <p>411, Signature Arcade, opp. ramjimandir, near Gangotri circle.</p>
                            <p><i className="fa fa-map-marker-alt mr-2" />Nikol, Ahmedabad, Gujarat 382350</p>
                            <p><i className="fa fa-phone-alt mr-2" />+91 98982 44350</p>
                            <p><i className="fa fa-envelope mr-2" />info@example.com</p>
                            <div className="d-flex justify-content-start mt-4">
                                <a className="btn btn-lg btn-primary btn-lg-square mr-2" href="#"><i className="fab fa-twitter" /></a>
                                <a className="btn btn-lg btn-primary btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f" /></a>
                                <a className="btn btn-lg btn-primary btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
                                <a className="btn btn-lg btn-primary btn-lg-square" href="#"><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                        <div className="col-lg-6 pl-lg-5">
                            <div className="row">
                                <div className="col-sm-4 mb-5">
                                    <h5 className="text-white text-uppercase mb-4">Categories</h5>
                                    <NavLink className="text-white-50 mb-2" to="/add_categories"><i className="fa fa-angle-right mr-2" />Add Categories</NavLink>
                                    <br></br>
                                    <NavLink className="text-white-50 mb-2" to="/manage_categories"><i className="fa fa-angle-right mr-2" />Manage Categories</NavLink>
                                </div>
                                <div className="col-sm-4 mb-5">
                                    <h5 className="text-white text-uppercase mb-4">Services</h5>
                                    <NavLink className="text-white-50 mb-2" to="/add_services"><i className="fa fa-angle-right mr-2" />Add Services</NavLink>
                                    <br></br>
                                    <NavLink className="text-white-50 mb-2" to="/manage_services"><i className="fa fa-angle-right mr-2" />Manage Services</NavLink>
                                </div>
                                <div className="col-sm-4 mb-5">
                                    <h5 className="text-white text-uppercase mb-4">BloG</h5>
                                    <NavLink className="text-white-50 mb-2" to="/add_blog"><i className="fa fa-angle-right mr-2" />Add Blog</NavLink>
                                    <br></br>
                                    <NavLink className="text-white-50 mb-2" to="/manage_blog"><i className="fa fa-angle-right mr-2" />Manage Blog</NavLink>
                                </div>
                                <div className="col-sm-5 mb-5">
                                    <h5 className="text-white text-uppercase mb-2">Contact</h5>
                                    <NavLink className="text-white-50 mb-2" to="/viewcontect"><i className="fa fa-angle-right mr-2" />View Contact</NavLink>
                                </div>
                                <div className="col-sm-5 mb-5">
                                    <h5 className="text-white text-uppercase mb-2">Customer</h5>
                                    <NavLink className="text-white-50 mb-2" to="/"><i className="fa fa-angle-right mr-2" />Manage Customer</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-light border-top py-4" style={{ borderColor: 'rgba(256, 256, 256, .15) !important' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                            <p className="m-0 text-white">© <a href="#">Spa</a>. All Rights Reserved.</p>
                        </div>
                        <div className="col-md-6 text-center text-md-right">
                            <p className="m-0 text-white">Designed by <a href="https://htmlcodex.com">Keval Vaghasiya</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary back-to-top"><i className="fa fa-angle-double-up" /></a>
        </div>
    )
}

export default Afooter