import React from 'react'
import './Vendorfirstpage.css';
import {Link, Outlet} from 'react-router-dom';
import NavlogoImage from './img/CR-icon.png';
import BodyImage from './img/chef.jpg';

export default function Restropartner() {
  return (
    <div>
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        
        <div className="bodyconatiner _br8901">
            <div className="logobackgrounddiv _lbd101">
                <div className="backoflogo _bol101">            
                    <img src={NavlogoImage} width="50px" height="50px" className='_logo009' ></img>
                </div>
                <div className="backofbutton _bob102">
                    <Link to="/" className='_bob102' activeclassname="active">
                    <button className='_bob202'>Back    <i class="fa-solid fa-arrow-right"></i></button>
                    </Link>
                </div>
            </div>
            <div className="body _by8901">
                <div className="imageupper _iu8901">
                    <img src={BodyImage} width="300px" height="300px"  alt="CloudRasoi image" />
                </div>
                <div className="middlebox _mx8901">
                    <p>Cloud Rasoi Restaurant Partner Dashboard</p>
                </div>
                <div className="buttons _bs8901">
                    <Link to="/VendorLogin" className='' activeclassname="active">
                    <button className='btn8901'>Login</button>
                    </Link>
                    <Link to="/VendorSignUp" className='' activeclassname="active">
                    <button className='btn8902'>Register</button>
                    </Link>
                </div>
            </div>
        </div>
      
    </div>
  )
}
