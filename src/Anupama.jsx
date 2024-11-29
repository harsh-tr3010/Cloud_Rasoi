import React from "react";
import "./Anupama.css";
import {Link,Outlet} from 'react-router-dom';
import NavlogoImage from "./img/CR-icon.png";

export default function Anupama() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      

      <div className=".boxmain _pvbm1234">
        <div className="boxflex _pvbf1234">
          <div className=".headingbox _pvhb123">
            <div className=".headingmain _pvhm1234">
              <h1 id="pvheadinghg112">Anupama Tiffin services</h1>
            </div>
          </div>
          <div className=".headingsdiv _pvhv123">
            <div className=".mainboxrate _pvme1234">
              <div className=".div1 _pvd111">
                <div className=".left _pvlt12">
                  <div className="logo _pvlg11">
                    <i class="fa-regular fa-circle-dot"></i>
                  </div>
                  <div className="content _pvct11">4.1(1K+ ratings)</div>
                </div>
              </div>
              <div className=".cuisine _pvce121">
                <div className="contents _pvcs98">
                  <span> North Indian</span>
                </div>
              </div>
              <div className="outlet _pvot121">
                <div className="headingout _pvh11111">
                  <span className="pvab12">Outlet </span>
                  <span id="pvS">Sikandra</span>
                </div>
                <div className="time _pvte1">
                  <span className="pvab12">40-45 mins</span>
                </div>
              </div>
              <div className="cycle _pvc189">
                <div className="pvcycle">
                  <div className="pvleft-cycle">
                    <i class="fa-solid fa-bicycle"></i>
                  </div>
                  <div className="pvright-cycle">
                    Free delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bodydivs _pvbs1165">
            <div className="menu _pvmu19">
              <div className="head _pvhd18">
                <h3 id="pvh56">Menu</h3>
              </div>
            </div>
            <div className="foody _pvfy67">
              <div className="upper _pvup90">
                <div className="pvfood-div">
                  <div className="pvleft-food">
                    <div className="pvicon-food _pvifd1">
                      <i class="fa-solid fa-leaf"></i>
                    </div>
                    <div className="food-name _pvfe1">Breakfast Plan</div>
                    <div className="price-food _pvpf1">₹ 70</div>
                    <div className="food-desc _pvfd1">
                    4 sandwich, ketchup/ dahi, aaloo paratha
                    </div>
                  </div>
                  <div className="pvright-food">
                    <div className="image-food _pvif1"></div>
                    <div className="button-add _pvbd1">
                      <Link to="/Popup" className="" activeclassname="active">
                      <button id="pvadd">ADD</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="pvfood-div">
                  <div className="pvleft-food">
                    <div className="pvicon-food _pvifd1">
                      <i class="fa-solid fa-leaf"></i>
                    </div>
                    <div className="food-name _pvfe2">Lunch Plan</div>
                    <div className="price-food _pvpf2">₹ 60</div>
                    <div className="food-desc _pvfd2">
                    4 Roti, Dal, Chawal, 1 sabji, achar
                    </div>
                  </div>
                  <div className="pvright-food">
                    <div className="image-food _pvif2"></div>
                    <div className="button-add _pvbd2">
                      <button id="pvadd">ADD</button>
                    </div>
                  </div>
                </div>
                <div className="pvfood-div">
                  <div className="pvleft-food">
                    <div className="pvicon-food _pvifd1">
                      <i class="fa-solid fa-leaf"></i>
                    </div>
                    <div className="food-name _pvfe3">Dinner Plan</div>
                    <div className="price-food _pvpf3">₹ 80</div>
                    <div className="food-desc _pvfd3">
                    4 Roti, Dal, Chawal, 1 sabji, achar
                    </div>
                  </div>
                  <div className="pvright-food">
                    <div className="image-food _pvif3"></div>
                    <div className="button-add _pvbd3">
                      <button id="pvadd">ADD</button>
                    </div>
                  </div>
                </div>
                <div className="pvfood-div">
                  <div className="pvleft-food">
                    <div className="pvicon-food _pvifd1">
                      <i class="fa-solid fa-leaf"></i>
                    </div>
                    <div className="food-name _pvfe4">Special Tiffin</div>
                    <div className="price-food _pvpf4">₹ 120</div>
                    <div className="food-desc _pvfd4">
                    4 roti, paneer sabji, salad, raita, dal makhni, chawal, achaar, papad, rasgulla
                    </div>
                  </div>
                  <div className="pvright-food">
                    <div className="image-food _pvif4"></div>
                    <div className="button-add _pvbd4">
                      <button id="pvadd">ADD</button>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="lower pvlr90"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
