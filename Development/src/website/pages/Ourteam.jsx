import React from 'react'
import Header2 from '../Component/Header2'
import Footer from '../Component/Footer'
import { Helmet } from 'react-helmet'

function Ourteam() {
    return (
        
        <div>
            <Header2 title="OurTeam"/>
            {/* Team Start */}
            <div className="container-fluid py-5">
                <div className="container pt-5">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-6">
                            <h6 className="d-inline-block bg-light text-primary text-uppercase py-1 px-2">Spa Specialist</h6>
                            <h1 className="mb-5">Spa &amp; Beauty Specialist</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="team position-relative overflow-hidden mb-5">
                                <img className="img-fluid" src="website/img/team-1.jpg" alt />
                                <div className="position-relative text-center">
                                    <div className="team-text bg-primary text-white">
                                        <h5 className="text-white text-uppercase">Olivia Mia</h5>
                                        <p className="m-0">Spa &amp; Beauty Expert</p>
                                    </div>
                                    <div className="team-social bg-dark text-center">
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
                                        <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team position-relative overflow-hidden mb-5">
                                <img className="img-fluid" src="website/img/team-2.jpg" alt />
                                <div className="position-relative text-center">
                                    <div className="team-text bg-primary text-white">
                                        <h5 className="text-white text-uppercase">Cory Brown</h5>
                                        <p className="m-0">Spa &amp; Beauty Expert</p>
                                    </div>
                                    <div className="team-social bg-dark text-center">
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
                                        <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team position-relative overflow-hidden mb-5">
                                <img className="img-fluid" src="website/img/team-3.jpg" alt />
                                <div className="position-relative text-center">
                                    <div className="team-text bg-primary text-white">
                                        <h5 className="text-white text-uppercase">Elizabeth Ross</h5>
                                        <p className="m-0">Spa &amp; Beauty Expert</p>
                                    </div>
                                    <div className="team-social bg-dark text-center">
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
                                        <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team position-relative overflow-hidden mb-5">
                                <img className="img-fluid" src="website/img/team-4.jpg" alt />
                                <div className="position-relative text-center">
                                    <div className="team-text bg-primary text-white">
                                        <h5 className="text-white text-uppercase">Kelly Walke</h5>
                                        <p className="m-0">Spa &amp; Beauty Expert</p>
                                    </div>
                                    <div className="team-social bg-dark text-center">
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
                                        <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
            <Helmet>
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
                <script src="/website/lib/easing/easing.min.js"></script>
                <script src="/website/lib/waypoints/waypoints.min.js"></script>
                <script src="/website/lib/counterup/counterup.min.js"></script>
                <script src="/website/lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="/website/lib/tempusdominus/js/moment.min.js"></script>
                <script src="/website/lib/tempusdominus/js/moment-timezone.min.js"></script>
                <script src="/website/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>


                <script src="/website/mail/jqBootstrapValidation.min.js"></script>
                <script src="/website/mail/contact.js"></script>


                <script src="/website/js/main.js"></script>
            </Helmet>
            <Footer/>

        </div>
    )
}

export default Ourteam