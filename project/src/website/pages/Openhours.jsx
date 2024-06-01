import React from 'react'
import Header2 from '../Component/Header2'
import Footer from '../Component/Footer'
import { Helmet } from 'react-helmet'

function Openhours() {
    return (
        <div>
            <Header2 title="Open Hours" />
            {/* Open Hours Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6" style={{ minHeight: 500 }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100" src="website/img/opening.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5 pb-lg-5">
                            <div className="hours-text bg-light p-4 p-lg-5 my-lg-5">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Open Hours</h6>
                                <h1 className="mb-4">Best Relax And Spa Zone</h1>
                                <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore
                                    sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et
                                    erat sed diam duo</p>
                                <ul className="list-inline">
                                    <li className="h6 py-1"><i className="far fa-circle text-primary mr-3" />Mon – Fri : 9:00 AM -
                                        7:00 PM</li>
                                    <li className="h6 py-1"><i className="far fa-circle text-primary mr-3" />Saturday : 9:00 AM - 6:00
                                        PM</li>
                                    <li className="h6 py-1"><i className="far fa-circle text-primary mr-3" />Sunday : Closed</li>
                                </ul>
                                <a href className="btn btn-primary mt-2">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Open Hours End */}
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

export default Openhours