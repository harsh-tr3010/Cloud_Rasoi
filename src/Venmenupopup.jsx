import React from 'react'
import './Venmenupopup.css';
import {Link, Outlet} from 'react-router-dom';

// import NavlogoImage from './logo.webp';

export default function Popmenu() {
  return (
    <div>
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
        <div className="main _mn6789">
            <div className="bodydiv _bv6789">
                <div className="head _hd6789">
                    <p className='increase-width _inw1oo1'>Create Customisations for Biryani</p>
                    <Link to="/Menuorders" className="" activerclassname="active">
                    <button id="bcf">X</button>
                    </Link>
                    
                </div>
                <hr/>
                <div className="bodylower _br6789">
                <div className="leftdiv _lv6789">
                    <div className="top _tp6789">
                        <p className='_b26789'>Properties</p>

                    </div>
                    <div className="bottom _bm6789">
                        <div className="leftie">
                            <div className="btg891">
                                <p className='increase1-width _in1w002'>Quantity</p>
                                <p id='trash'><i class="fa-regular fa-trash-can"></i></p>

                            </div>
                            <button className='btg89'>Single</button>
                            <button className='btg89'> Half</button>
                            <button className='btg89'>Full</button>
                            <button id="gth89">+ Add new Quantity</button>
                        </div>
                        <div className="rightie">
                            <button id="bt9086">+ Add more Properties
                            </button>
                        </div>
                    </div>
                </div>
                <div className="rightdiv _rv6789">
                    <div className="div1789"><p id='po'> Variant Pricing</p>
                    <p id='pbitt'>Enter variant pricing here</p>

                    </div>
                    <div className="div2789">
                        <p>Type</p>
                        <p>Price</p>
                    </div>
                    <div className="div3789">
                        <div className="lt90"><p>Single</p></div>
                        <div className="rt90">
                            <button id='paisa45'>₹ 250</button>
                            <p id='bt9087'><i class="fa-regular fa-circle-check"></i></p>
                        </div>
                    </div>
                    <div className="div3789">
                        <div className="lt90"><p>Half</p></div>
                        <div className="rt90">
                            <button id='paisa45'>₹ 500</button>
                            <p id='bt9087'><i class="fa-regular fa-circle-check"></i></p>
                        </div>
                    </div>
                    <div className="div3789">
                        <div className="lt90"><p>Full</p></div>
                        <div className="rt90">
                            <button id='paisa45'>₹ 700</button>
                            <p id='bt9087'><i class="fa-regular fa-circle-check"></i></p>
                        </div>
                    </div>
                   
                    <div className="div6789"><button id='done78'>Done</button></div>
                    <div className="div7789"></div>
                </div>
                </div>

            </div>
           
        </div>
    </div>
  )
}
