import React from "react";
import "./Popup.css";
import {Link, Outlet} from 'react-router-dom';
export default function NewPage() {
  return (
    <div>
      {/* <div className="main">
        <div className="center">

        <div className="first">

            <p className='first-content'>Shahi Paneer * ₹140</p>
            <p className='first-content'>Customise as per your taste</p>

        </div>

        <div className="second">

            <div className="sub-second">


            </div>

        </div>

        <div className="third">

        </div>

    </div>

      </div> */}

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div className="container-new-page">
        <div className="box-new-page">
          <div className="box _bx2">
            <div className="box-new-page1">
              <div className="bnp1">
                <div className="bnp1-1">
                  <div className="bnp1-1-1">

                    {/* <span id="paneer">Shahi Paneer ₹120</span> */}
                    <div className="paneer">
                       <p id="paneer">Special Thali ₹200</p>
                    </div>
                    <div className="paneer">
                        <ul>
                            <li>
                                <Link to="/SBBMB" classname="" activeclassname="active">
                                    <button id="cross"><i class="fa-regular fa-circle-xmark"></i></button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                  </div>

                  <div className="bnp1-1-2">

                    <p id="customise">Customise as per your choice</p>

                  </div>
                </div>
              </div>
            </div>

            <div className="box-new-page2">
                <div className="bnp2-1">

                    <p id="quantity">Quantity</p>

                    <div className="radio" >
                        <div className="first-veg">
                        <label for="ml"><span className="texttitless">1 Thali</span>
                        <input type="radio" className="ml" value="500 Ml" name="quantity" />
                        </label> 
                        <div className="iconofradio"><i class="fa-regular fa-circle-dot"></i></div>
                        </div>
                        <br />
                       <div className="second-veg">
                        <label for="ml"><span className="texttitless">2 Thali</span>
                        <input type="radio" id="kg" className="ml" value="1 kg" name="quantity" />
                        </label>
                        <div className="iconofradio"><i class="fa-regular fa-circle-dot"></i></div>

                       </div>
                    </div>
                    
                </div>

            </div>

            <div className="box-new-page3">
                <div className="left123">
                    <div className="left123-1">
                        <p>₹200.00</p>
                        <p id="view">View Customised item</p>
                    </div>
                    <div className="left123-2">

                    </div>
                </div>
                <div className="right123">
                    <button id="cart">Place Order</button>

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
