import React from "react";
import "./Narayan.css";
import {Link,Outlet} from 'react-router-dom';
import NavlogoImage from "./img/CR-icon.png";

export default function Muskanrasoi() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <div id="root" style={{ height: "100%" }}>
        <div className="whole-background _3arMG">
          <header className="header-section _76q0O">
            <div className="main-navbar global-nav">
              <div className="interior-navbar _1EuBh">
                <a
                  href="/"
                  className="logo d9y3g"
                  title="CloudRasoi"
                  style={{ marginRight: "16px" }}
                >
                  <img src={NavlogoImage} width="50px" height="50px"></img>
                </a>
                <div
                  role="button"
                  className="address-button _2z2N5"
                  tabIndex="0"
                >
                  <span className="other _1tcx6">
                    <span className="_3odgy">Other</span>
                  </span>
                  <span className="address _3HusE">
                    Agra, Uttar Pradesh, India
                  </span>
                  <span className="icon-downArrow kVKTT fa-solid fa-angle-down"></span>
                </div>
                <ul className="navbar-list _1JNGZ">
                  <li className="cart _1fo6c">
                    <div className="inner _1fmVk _30y3a">
                      <div>
                        <div className="inner1 _2CgXb">
                          <a className="_1T-E4" href="/checkout">
                            <span className="_3yZyp">
                              <i
                                class="fa-solid fa-cart-shopping"
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  fontSize: "18px",
                                }}
                              ></i>
                            </span>
                            <span>Cart</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="cart _1fo6c" style={{ width: "78px" }}>
                    <div className="inner1 _2CgXb">
                      <span className="_3yZyp">
                        <i
                          class="fa-regular fa-user"
                          style={{
                            width: "18px",
                            height: "19px",
                            fontSize: "18px",
                          }}
                        ></i>
                      </span>
                      <span>Sign In</span>
                    </div>
                  </li>
                  <li className="cart _1fo6c" style={{ width: "62px" }}>
                    <div className="inner1 _2CgXb" style={{padding: '10px', }}>
                      <a className="_1T-E4" >
                        <span className="_3yZyp">
                          <i
                            class=""
                            style={{
                              width: "18px",
                              height: "19px",
                              fontSize: "18px",
                            }}
                          ></i>
                        </span>
                        <Link to="/Udashboard" className='_1T-E4' activeclassname="active">
                        <span>Dashboard</span>
                        </Link>
                      </a>
                    </div>
                  </li>
                  <li className="cart _1fo6c _ma1fo6c" style={{ width: "62px" }}>
                    <div className="inner1 _2CgXb">
                      <a className="_1T-E4" href="/support">
                        <span className="_3yZyp">
                          <i
                            class="fa-solid fa-percent"
                            style={{
                              width: "18px",
                              height: "19px",
                              fontSize: "18px",
                            }}
                          ></i>
                          Offers
                        </span>

                        <span className="PJaej">New</span>
                      </a>
                    </div>
                  </li>
                  <li className="cart _1fo6c" style={{ width: "62px" }}>
                    <div className="inner1 _2CgXb">
                      <a className="_1T-E4" href="/support">
                        <span className="_3yZyp">
                          <i
                            class="fa-solid fa-magnifying-glass"
                            style={{
                              width: "18px",
                              height: "19px",
                              fontSize: "18px",
                            }}
                          ></i>
                        </span>
                        <span>Search</span>
                      </a>
                    </div>
                  </li>
                  <li className="cart _1fo6c" style={{ width: "156.5px" }}></li>
                </ul>
              </div>
            </div>
          </header>
        </div>
      </div>

      <div className=".boxmain _pabm1234">
        <div className="boxflex _pabf1234">
          <div className=".headingbox _pahb123">
            <div className=".headingmain _pahm1234">
              <h1 id="paheadinghg112">Narayan Tiffin Services</h1>
            </div>
          </div>
          <div className=".headingsdiv _pahv123">
            <div className=".mainboxrate _pame1234">
              <div className=".div1 _pad111">
                <div className=".left _palt12">
                  <div className="logo _palg11">
                    <i class="fa-regular fa-circle-dot"></i>
                  </div>
                  <div className="content _pact11">4.1(1K+ ratings)</div>
                </div>
              </div>
              <div className=".cuisine _pace121">
                <div className="contents _pacs98">
                  <span> South Indian</span>
                </div>
              </div>
              <div className="outlet _paot121">
                <div className="headingout _pah11111">
                  <span className="paab12">Outlet </span>
                  <span id="paS">Sanjaya Palace</span>
                </div>
                <div className="time _pate1">
                  <span className="paab12">40-45 mins</span>
                </div>
              </div>
              <div className="cycle _pac189">
                <div className="pacycle">
                  <div className="paleft-cycle">
                    <i class="fa-solid fa-bicycle"></i>
                  </div>
                  <div className="paright-cycle">
                    Free delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bodydivs _pabs1165">
            <div className="menu _pamu19">
              <div className="head _pahd18">
                <h3 id="pah56">Menu</h3>
              </div>
            </div>
            <div className="foody _pafy67">
              <div className="upper _paup90">
                <div className="pafood-div">
                  <div className="paleft-food">
                    <div className="paicon-food _paifd1">
                      <i class="fa-solid fa-leaf"></i>
                    </div>
                    <div className="food-name _pafe1">Breakfast Plan</div>
                    <div className="price-food _papf1">₹ 70</div>
                    <div className="food-desc _pafd1">
                    upma/ idli/ dosa
                    </div>
                  </div>
                  <div className="paright-food">
                    <div className="image-food _paif1"></div>
                    <div className="button-add _pabd1">
                      <button id="paadd">ADD</button>
                    </div>
                  </div>
                </div>
                <div className="pafood-div">
                  <div className="paleft-food">
                    <div className="paicon-food _paifd1">
                      <i class="fa-solid fa-leaf"></i>
                    </div>
                    <div className="food-name _pafe2">Lunch Plan</div>
                    <div className="price-food _papf2">₹ 60</div>
                    <div className="food-desc _pafd2">
                    4 Roti, Dal, Chawal, 1 sabji, achar
                    </div>
                  </div>
                  <div className="paright-food">
                    <div className="image-food _paif2"></div>
                    <div className="button-add _pabd2">
                      <button id="paadd">ADD</button>
                    </div>
                  </div>
                </div>
                <div className="pafood-div">
                  <div className="paleft-food">
                    <div className="paicon-food _paifd1">
                      <i class="fa-solid fa-leaf"></i>
                    </div>
                    <div className="food-name _pafe3">Dinner Plan</div>
                    <div className="price-food _papf3">₹ 80</div>
                    <div className="food-desc _pafd3">
                    4 Roti, Dal, Chawal, 1 sabji, achar
                    </div>
                  </div>
                  <div className="paright-food">
                    <div className="image-food _paif3"></div>
                    <div className="button-add _pabd3">
                      <button id="paadd">ADD</button>
                    </div>
                  </div>
                </div>
                <div className="pafood-div">
                  <div className="paleft-food">
                    <div className="paicon-food _paifd1">
                      <i class="fa-solid fa-leaf"></i>
                    </div>
                    <div className="food-name _pafe4">Special Tiffin</div>
                    <div className="price-food _papf4">₹ 120</div>
                    <div className="food-desc _pafd4">
                    4 roti, paneer sabji, salad, raita, dal makhni, chawal, achaar, papad, rasgulla
                    </div>
                  </div>
                  <div className="paright-food">
                    <div className="image-food _paif4"></div>
                    <div className="button-add _pabd4">
                      <button id="paadd">ADD</button>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="lower palr90"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
