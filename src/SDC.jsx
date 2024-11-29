import React from "react";
import "./SDC.css";
import {Link,Outlet} from 'react-router-dom'
import NavlogoImage from "./img/CR-icon.svg";

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

      
      <div className=".boxmain _bm1234z">
        <div className="boxflex _bf1234z">
          <div className=".headingbox _hb123z">
            <div className=".headingmain _hm1234z">
              <h1 id="headinghg112z">Shri Dauji Chatpata</h1>
            </div>
          </div>
          <div className=".headingsdiv _hv123z">
            <div className=".mainboxrate _me1234z">
              <div className=".div1 _d111z">
                <div className=".left _lt12z">
                  <div className="logo _lg11z">
                    <i class="fa-regular fa-circle-dot"></i>
                  </div>
                  <div className="content _ct11z">4.1(1K+ ratings)</div>
                </div>
              </div>
              <div className=".cuisine _ce121z">
                <div className="contents _cs98z">
                  <span> North Indian</span>
                </div>
              </div>
              <div className="outlet _ot121z">
                <div className="headingout _h11111z">
                  <span className="ab12z">Outlet </span>
                  <span id="Sz">Kamla Nagar</span>
                </div>
                <div className="time _te1z">
                  <span className="ab12z">30-35 mins</span>
                </div>
              </div>
              <div className="cycle _c189z">
                <div className="cyclez">
                  <div className="left-cyclez">
                    <i class="fa-solid fa-bicyclez"></i>
                  </div>
                  <div className="right-cyclez">
                    <i class="fa-solid fa-bicycle"></i>
                    Order above 149 for discounted delivery fee
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bodydivs _bs1165z">
            <div className="menu _mu19z">
              <div className="head _hd18z">
                <h3 id="h56z">Menu</h3>
              </div>
            </div>
            <div className="foody _fy67z">
              <div className="upper _up90z">
                <div className="food-divz">
                  <div className="left-foodz">
                    <div className="icon-food _ifd1z">
                      <i class="fa-solid fa-leaf"></i>
                    </div>
                    <div className="food-name _fe1z">Veggie Pizza</div>
                    <div className="price-food _pf1z">₹ 199</div>
                    <div className="food-desc _fd1z">
                     8 inch
                    </div>
                  </div>
                  <div className="right-foodz">
                    <div className="image-food _if1z"></div>
                    <div className="button-add _bd1z">
                      <Link to="/Popup" className="" activeclassname="active">
                      <button id="addz">ADD</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="food-divz">
                  <div className="left-foodz">
                    <div className="icon-food _ifd1z">
                      <i class="fa-solid fa-leaf"></i>
                    </div>
                    <div className="food-name _fe2z">Dal Makhni</div>
                    <div className="price-food _pf2z">₹ 350</div>
                    <div className="food-desc _fd2z">
                    A relatively modern variation of traditional lentil dishes, it is made with urad dal (black lentils) and other pulses, and includes butter and cream (makhani is a Punjabi word for butter).
                    </div>
                  </div>
                  <div className="right-foodz">
                    <div className="image-food _if2z"></div>
                    <div className="button-add _bd2z">
                      <button id="addz">ADD</button>
                    </div>
                  </div>
                </div>
                <div className="food-divz">
                  <div className="left-foodz">
                    <div className="icon-food _ifd1z">
                      <i class="fa-solid fa-leaf"></i>
                    </div>
                    <div className="food-name _fe3z">Paneer Tikka</div>
                    <div className="price-food _pf3z">₹ 300</div>
                    <div className="food-desc _fd3z">
                    A rich, creamy curry of soft succulent paneer and plenty of onions in a wonderful medley of spices, herbs and tomatoes.
                    </div>
                  </div>
                  <div className="right-food">
                    <div className="image-food _if3z"></div>
                    <div className="button-add _bd3z">
                      <button id="addz">ADD</button>
                    </div>
                  </div>
                </div>
                <div className="food-divz">
                  <div className="left-foodz">
                    <div className="icon-food _ifd1z">
                      <i class="fa-solid fa-leaf"></i>
                    </div>
                    <div className="food-name _fe4z">Kachori</div>
                    <div className="price-food _pf4">₹ 20</div>
                    <div className="food-desc _fd4z">
                    Kachori is a spicy Indian snack shaped like a round flattened ball, consisting of a flour-based shell with different fillings
                    </div>
                  </div>
                  <div className="right-foodz">
                    <div className="image-food _if4z"></div>
                    <div className="button-add _bd4z">
                      <button id="addz">ADD</button>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="lower lr90"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
