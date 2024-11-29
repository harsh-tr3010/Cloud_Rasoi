import React from 'react';
import './css/bootstrap.min.css';
import './css/style.css';
import logoImage from './img/logo.png';
import hero5Image from './img/hero5.webp.webp';
import about1Image from './img/about-01.png';
import about2Image from './img/about-04.png';
import about3Image from './img/about-03.png';
import about4Image from './img/about-02.png';
import testimonial1 from './img/testimonial-1.jpg';
import testimonial2 from './img/testimonial-2.jpg';
import testimonial3 from './img/testimonial-3.jpg';
import testimonial4 from './img/testimonial-4.jpg';



export default function New() {
  return (
    <>
      {/* Google Web Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&family=Pacifico&display=swap" rel="stylesheet" />

      {/* Icon Font Stylesheet */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

      {/* Libraries Stylesheet */}
      <link href="lib/animate/animate.min.css" rel="stylesheet" />
      <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
      <link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

      {/* Customized Bootstrap Stylesheet */}
      <link href="css/bootstrap.min.css" rel="stylesheet" />

      {/* Template Stylesheet */}
      <link href="css/style.css" rel="stylesheet" />


      <div class="container-xxl bg-white p-0">
        {/* <!-- Spinner Start -->
        <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style={{width: '100px', height: '100px'}} role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <!-- <div class="preloader-img">
                <img src="img/preloader.png.jpeg" width="80px" height="80px" class="preloader" style="transition: none;">
            </div> -->

        </div> */}
        {/* <!-- Spinner End --> */}

        {/* <!-- Navbar & Hero Start --> */}
        <div class="container-xxl position-relative p-0">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                <a href="" class="navbar-brand p-0">
                    <h1 class="text-primary m-0"><img src={logoImage} width="100px" height="200px" />Cloud Rasoi</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0 pe-4">
                        <a href="index.html" class="nav-item nav-link active">Home</a>
                        <a href="rasoi.html" class="nav-item nav-link">About Us</a>
                        <a href="tiffinservices.html" class="nav-item nav-link">Reviews</a>
                        <a href="profile.html" class="nav-item nav-link">Contact Us</a>
                        <a href="profile.html" class="nav-item nav-link">Profile</a>
                    </div>
                    <a href="signup.html" class="btn btn-primary py-2 px-4">Sign Up/ Login</a>
                </div>
            </nav>

            <div class="container-xxl py-5 bg-dark hero-header mb-5">
                <div class="container my-5 py-5">
                    <div class="row align-items-center g-5">
                        <div class="col-lg-6 text-center text-lg-start">
                            <h2 >Ghar Jaisa Khana,<br />Cloud Rasoi se hi Mangana</h2>
                            <p class="text-white animated slideInLeft mb-4 pb-2">Experience the taste of perfect home made food at CLOUD RASOI, one of the best Ghost kitchen in india.</p>
                            <a href="signup.html" class="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Order Now</a>
                        </div>
                        <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img class="img-fluid" src={hero5Image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Navbar & Hero End --> */}
      </div>

      {/* <!-- Service Start --> */}
        <div class="container-xxl py-5">
            <div class="container" >
                <div class="row g-4 styleg4">
                    <div class="col-lg-3 col-sm-6 wow fadeInUp stylesm6" data-wow-delay="0.1s">
                        <div class="service-item rounded pt-3">
                            <a href="signup.html" style={{color: 'grey'}}>
                                <div class="p-4">
                                    <i class="fa fa-3x fa-user text-primary mb-4"></i>
                                    <h5>User SignUp</h5>
                                    <p>Sign Up to Order Food</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp stylesm6" data-wow-delay="0.3s" >
                        <div class="service-item rounded pt-3">
                            <a href="vender.html" style={{color: 'grey'}}>
                                <div class="p-4">
                                    <i class="fa fa-3x fa-utensils text-primary mb-4"></i>
                                    <h5>Vender SignUp</h5>
                                    <p>Register Your Kitchen</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp stylesm6" data-wow-delay="0.5s" >
                        <div class="service-item rounded pt-3">
                            <a href="signup.html" style={{color: 'grey'}}>
                                <div class="p-4">
                                    <i class="fa fa-3x fa-user text-primary mb-4"></i>
                                    <h5>Delivery Boy SignUp</h5>
                                    <p>Register as a Delivery Boy</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    {/* <!-- <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div class="service-item rounded pt-3">
                            <div class="p-4">
                                <i class="fa fa-3x fa-headset text-primary mb-4"></i>
                                <h5>24/7 Service</h5>
                                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div> --> */}
                </div>
            </div>
        </div>
        {/* <!-- Service End --> */}

        {/* <!-- About Start --> */}
        {/* <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="row g-3">
                            <div class="col-6 text-start">
                                <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src={about1Image} />
                            </div>
                            <div class="col-6 text-start">
                                <img class="img-fluid rounded w-75 wow zoomIn stylew75" data-wow-delay="0.3s" src={about2Image} />
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src={about3Image} />
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src={about4Image} />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <h5 class="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
                        <h1 class="mb-4">Welcome to <i class="fa fa-utensils text-primary me-2"></i>Cloud Rasoi</h1>
                        <p class="mb-4">As we know, the traditional food service industry is facing significant challenges in adapting to modern consumer demands for convenience, speed, and variety.</p>
                        <p class="mb-4">The rise of online food delivery platforms has highlighted inefficiencies and limitations in traditional restaurant models. So the potential solution for the same is CLOUD RASOI.</p> */}
                        {/* <!-- <div class="row g-4 mb-4">
                            <div class="col-sm-6">
                                <div class="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1 class="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">15</h1>
                                    <div class="ps-4">
                                        <p class="mb-0">Years of</p>
                                        <h6 class="text-uppercase mb-0">Experience</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1 class="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50</h1>
                                    <div class="ps-4">
                                        <p class="mb-0">Popular</p>
                                        <h6 class="text-uppercase mb-0">Master Chefs</h6>
                                    </div>
                                </div>
                            </div>
                        </div> --> */}
                        {/* <a class="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <!-- About End --> */}

        {/* <!-- Reviews Start --> */}
        {/* <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container">
                <div class="text-center">
                    <h5 class="section-title ff-secondary text-center text-primary fw-normal">Reviews</h5>
                    <h1 class="mb-5">User Reviews!!!</h1>
                </div>
                <div class="owl-carousel testimonial-carousel" style={{width: '1100px', display: 'flex'}}>
                    <div class="testimonial-item bg-transparent border rounded p-4">
                        <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src={testimonial1} style={{width: '50px', height: '50px'}} />
                            <div class="ps-3">
                                <h5 class="mb-1">Client Name</h5>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item bg-transparent border rounded p-4">
                        <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src={testimonial2} style={{width: '50px', height: '50px'}} />
                            <div class="ps-3">
                                <h5 class="mb-1">Client Name</h5>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item bg-transparent border rounded p-4">
                        <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src={testimonial3} style={{width: '50px', height: '50px'}} />
                            <div class="ps-3">
                                <h5 class="mb-1">Client Name</h5>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item bg-transparent border rounded p-4">
                        <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src={testimonial4} style={{width: '50px', height: '50px'}} />
                            <div class="ps-3">
                                <h5 class="mb-1">Client Name</h5>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <!-- Reviews End --> */}

        {/* <!-- Footer Start --> */}
        {/* <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5" style={{justifyContent: 'space-around'}}>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
                        <a class="btn btn-link" href="">About Us</a>
                        <a class="btn btn-link" href="">Contact Us</a>
                        <a class="btn btn-link" href="">Reservation</a>
                        <a class="btn btn-link" href="">Privacy Policy</a>
                        <a class="btn btn-link" href="">Terms & Condition</a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Sikandra, Agra</p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div> */}
                    {/* <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
                        <h5 class="text-light fw-normal">Monday - Saturday</h5>
                        <p>09AM - 09PM</p>
                        <h5 class="text-light fw-normal">Sunday</h5>
                        <p>10AM - 08PM</p>
                    </div> */}
                    {/* <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
                        <p>For Enquiry Please Enter your Email.</p>
                        <div class="position-relative mx-auto" style={{maxwidth: '400px'}} >
                            <input class="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="#">Cloud Rasoi</a>, All Right Reserved.  */}
							
							{/* <!-- This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support --> */}
							{/* &nbsp;Designed By <a>Cloud Rasoi Team.</a><br/><br/> */}
                            {/* Distributed By <a class="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a> */}
                        {/* </div>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <!-- Footer End --> */}
    </>
  );
}
