import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Vdashboard.css';
import {Link, Outlet} from 'react-router-dom';
import NavlogoImage from './img/CR-icon.png';
import Dashboard from './img/dashboardback.webp';
import BodyImage from './img/chef.jpg';

const Vdashboard=()=> {
    const [totalOrders, setTotalOrders] = useState(0);
  const [totalPartners, setTotalPartners] = useState(0);

  useEffect(() => {
    const fetchOrderRequests = async () => {
      try {
        const response = await axios.get('http://localhost:3100/order-requests');
        setTotalOrders(response.data.totalOrders);
      } catch (error) {
        console.error('Error fetching order requests:', error);
      }
    };

    const fetchDeliveryPartners = async () => {
      try {
        const response = await axios.get('http://localhost:3100/delivery-partners');
        setTotalPartners(response.data.totalPartners);
      } catch (error) {
        console.error('Error fetching delivery partners:', error);
      }
    };

    fetchOrderRequests();
    fetchDeliveryPartners();
  }, []);
  return (
    <div>
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        
       <div className="navbar-div _ndi100">
        <div className="leftside-div _lsd100">
            <div className="logo-div _ldo101">
                <img src={NavlogoImage} width="45px" height="45px" className='_logo009' ></img>
            </div>
            <div className="logotitle-div _ltd102">
                <div className="titleupper-div _tud103">Cloud Rasoi</div>
                <div className="titlelower-div _tld104">-- rasoi partner --</div>
            </div>
        </div>
        <div className="rightside-div _rsd100">
            <div className="profilediv _pd301">
                <div className="profilephoto _pp302">
                <i class="fa-solid fa-user _pp3002"></i>
                </div>
                <div className="profilename _pn303">
                    Mukesh
                    <Link to="/Venprofile" className='' activeclassName="active">
                    <i class="fa-solid fa-caret-down _pni303"></i>
                    </Link>
                </div>
            </div>
        </div>
       </div>
       <div className="mains-div afternavbar _mdi100">
        <div className="sidebar-div _sdi100">
            <div className="blankdiv _fd199"></div>
            <div className="firstdiv _fd200">
                Profile
                </div>
            <div className="seconddiv _fd200">Upload Photos</div>
            <div className="thirddiv _fd200" >
                <Link to="/Menuorders" className='_fd200' activeclassName="active">
                menu orders
                </Link>
                </div>
                
            <div className="fourthdiv _fd200">Order History</div>
            <div className="fifthdiv _fd200">Outlet Info</div>
            <div className="sixthdiv _fd200">
                <Link to="/AddRasoi" className='_fd200' activeclassName="active">
                Add Rasoi
                </Link>
                </div>
            <div className="seventhdiv _fd200">
            <Link to="/AddTiffin" className='_fd200' activeclassName="active">
                Add TiffinService
                </Link>
            </div>


        </div>
        <div className="base-div _bdi100">
            {/* <img src={Dashboard} width="1030px" height="480px" /> */}
            <div className="basedivfirst _bdf1o1">
                <div className="first1-div _fid1oo1">
                    <div className="colour-div _col001">
                        <div className="title-divofcolour _tit001">
                            Total Items
                            <p className='_todb007'>{totalPartners}</p>

                        </div>
                        <div className="photo-divofcolour _pho002">
                        <i class="fa-solid fa-bars _ict777"></i>
                        </div>
                    </div>
                </div>
                <div className="second2-div _fid1oo1">
                <div className="colour-div _col002">
                <div className="title-divofcolour _tit001">
                            Total Orders
                            <p className='_todb007'>{totalPartners}</p>

                        </div>
                        <div className="photo-divofcolour _pho002">
                        <i class="fa-solid fa-users _ict777"></i>
                        </div>

                </div>

                </div>
            </div>
            <div className="basedivsecond _bds2o2">
            <div className="first1-div _fid1oo1">
            <div className="colour-div _col003">
            <div className="title-divofcolour _tit001">
                            Total Deliveryboys
                            <p className='_todb007'>{totalPartners}</p>

                        </div>
                        <div className="photo-divofcolour _pho002">
                        <i class="fa-solid fa-truck _ict777"></i>
                        </div>

            </div>

            </div>
            <div className="second2-div _fid1oo1">
            <div className="colour-div _col004">
            <div className="title-divofcolour _tit001">
                            Total Sales
                            <p className='_todb007'>{totalPartners}</p>

                        </div>
                        <div className="photo-divofcolour _pho002">
                        <i class="fa-solid fa-chart-simple _ict777"></i>
                        </div>

            </div>

            </div>
            </div>
        </div>
       </div>
      
    </div>
  )
}

export default Vdashboard;