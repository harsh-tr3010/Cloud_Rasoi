import React from "react";
import "./Saihub.css";
import {Link,Outlet} from 'react-router-dom';
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

      

      <div className=".boxmain _bm1234zm">
        <div className="boxflex _bf1234zm">
          <div className=".headingbox _hb123zm">
            <div className=".headingmain _hm1234zm">
              <h1 id="headinghg112zm">Sai Hub</h1>
            </div>
          </div>
          <div className=".headingsdiv _hv123zm">
            <div className=".mainboxrate _me1234zm">
              <div className=".div1 _d111zm">
                <div className=".left _lt12zm">
                  <div className="logo _lg11zm">
                    <i class="fa-regular fa-circle-dot"></i>
                  </div>
                  <div className="content _ct11zm">4.1(1K+ ratings)</div>
                </div>
              </div>
              <div className=".cuisine _ce121zm">
                <div className="contents _cs98zm">
                  <span> North Indian</span>
                </div>
              </div>
              <div className="outlet _ot121zm">
                <div className="headingout _h11111zm">
                  <span className="ab12zm">Outlet </span>
                  <span id="Szm">Kamla Nagar</span>
                </div>
                <div className="time _te1zm">
                  <span className="ab12zm">30-35 mins</span>
                </div>
              </div>
              <div className="cycle _c189zm">
                <div className="cyclezm">
                  <div className="left-cyclezm">
                    <i class="fa-solid fa-bicyclezm"></i>
                  </div>
                  <div className="right-cyclezm">
                    Order above 149 for discounted delivery fee
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bodydivs _bs1165zm">
            <div className="menu _mu19zm">
              <div className="head _hd18zm">
                <h3 id="h56zm">Menu</h3>
              </div>
            </div>
            <div className="foody _fy67zm">
              <div className="upper _up90zm">
                <div className="food-divzm">
                  <div className="left-foodzm">
                    <div className="icon-food _ifd1zm">
                      <i class="fa-solid fa-leaf"></i>
                    </div>
                    <div className="food-name _fe1zm">Veggie Pizza</div>
                    <div className="price-food _pf1zm">₹ 199</div>
                    <div className="food-desc _fd1zm">
                     8 inch
                    </div>
                  </div>
                  <div className="right-foodzm">
                    <div className="image-food _if1zm"></div>
                    <div className="button-add _bd1zm">
                      <button id="addzm">ADD</button>
                    </div>
                  </div>
                </div>
                <div className="food-divzm">
                  <div className="left-foodzm">
                    <div className="icon-food _ifd1zm">
                      <i class="fa-solid fa-leaf"></i>
                    </div>
                    <div className="food-name _fe2zm">Burger</div>
                    <div className="price-food _pf2zm">₹ 49</div>
                    <div className="food-desc _fd2zm">
                   Patty made with aloo spiced with herbs and wrapped in bread. 
                    </div>
                  </div>
                  <div className="right-foodzm">
                    <div className="image-food _if2zm"></div>
                    <div className="button-add _bd2zm">
                      <button id="addzm">ADD</button>
                    </div>
                  </div>
                </div>
                <div className="food-divzm">
                  <div className="left-foodzm">
                    <div className="icon-food _ifd1zm">
                      <i class="fa-solid fa-leaf"></i>
                    </div>
                    <div className="food-name _fe3zm">Noodles</div>
                    <div className="price-food _pf3zm">₹ 120</div>
                    <div className="food-desc _fd3zm">
                    This dish is made from wheat flour, which is then boiled and stir-fried and typically served with vegetables.
                    </div>
                  </div>
                  <div className="right-foodzm">
                    <div className="image-food _if3zm"></div>
                    <div className="button-add _bd3zm">
                      <button id="addzm">ADD</button>
                    </div>
                  </div>
                </div>
                <div className="food-divzm">
                  <div className="left-foodzm">
                    <div className="icon-food _ifd1zm">
                      <i class="fa-solid fa-leaf"></i>
                    </div>
                    <div className="food-name _fe4zm">Manchurian</div>
                    <div className="price-food _pf2zm">₹ 150</div>
                    <div className="food-desc _fd4zm">
                    Manchurian is a class of Indian Chinese dishes made by roughly chopping and deep-frying ingredients such as cauliflower, carrot, paneer.                    </div>
                  </div>
                  <div className="right-foodzm">
                    <div className="image-food _if4zm"></div>
                    <div className="button-add _bd4zm">
                      <button id="addzm">ADD</button>
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
